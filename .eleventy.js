const fs = require("fs");

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

    eleventyConfig.addPassthroughCopy("css")
    return {
        passthroughFileCopy: true
    }
}