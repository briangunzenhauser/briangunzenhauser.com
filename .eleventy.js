const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: function (err, bs) {
                bs.addMiddleware("*", (req, res) => {
                    const content_404 = fs.readFileSync('_site/404/index.html');
                    res.write(content_404);
                    res.writeHead(404);
                    res.end();
                });
            }
        }
    });

    eleventyConfig.addPlugin(pluginRss);

    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
    });

    eleventyConfig.addPassthroughCopy("css")
    return {
        passthroughFileCopy: true
    }
}