---
layout: layoutPost
title: Moving from Wordpress to Eleventy
tags: post
date: 2021-03-08
---

# Moving from Wordpress to Eleventy

Every few years, I have the itch to <a href="https://web.archive.org/web/*/briangunzenhauser.com" target="_blank">redo this website</a>. For this latest version, I made the switch to <a href="https://www.11ty.dev/" target="_blank">Eleventy</a> and I'm loving it. Here are some of highlights of my move from Wordpress to Eleventy.



## An SSG Makes the Most Sense for This Site 

Wordpress is a fine platform, but it's overkill for this site. I don't need a database, custom fields, or unnecessary plugins; just some barebones code and content. Static suits me just fine.

## It's Great for Performance

I mostly attribute the performance bump to the static nature of the site. There are no roundtrip database calls, unneeded scripts (AHEM, jQuery), and I feel that I have more control over image optimization because I'm the one coding them. I'm also not limited by PHP, which is why next-gen image formats like WebP can't be uploaded to Wordpress without a plugin.

## Developing with Eleventy is FUN

Strangely, I was a little overwhelmed by the simplicity of Eleventy. All of the build tools that I'm accustomed to getting in newer frameworks like Gatsby or Next aren't built-in, which means I need to set it up. I realized quickly that it is the beauty of Eleventy. No more webpack or bloat that I don't need. Now I just use a simple Parcel integration and I'm good to go. 

I also appreciate that I can use various template types that compile down to HTML. My original plan was to use JavaScript as the basis for all of my templates so that I could push myself with some newer JavaScript ES6+ features, but I eventually simplified the process to using Nunjucks for page templates and markdown for blog posts so that I could launch the site more quickly. Moving to JavaScript templates can be a later phase of the project.

## Moving Forward...
The site is far from finished, and I have a number of minor-ish things that I need to get done before I'll feel satisfied with it. Namely, an XML sitemap, RSS feed, favicon and app icons, and better use of the Image plugin. But it's up, and that's a good enough start for me. 
