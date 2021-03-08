---
layout: layoutPost
title: Moving My Site to Eleventy
tags: post
date: 2021-03-08
---

# Moving My Site to Eleventy

Every few years, I have the itch to <a href="https://web.archive.org/web/*/briangunzenhauser.com" target="_blank">redo this website</a>. I see a new technology that I want to get my hands on, and all of the things I could've done better. This time I have made the switch to <a href="https://www.11ty.dev/" target="_blank">Eleventy</a> and I'm loving it. Now I see why it's all the rage. Here are some of my key takeaways.



## An SSG Makes the Most Sense for This Site 

For the past few years, I've used Wordpress to power my site. It's a fine platform, but it's overkill for this site. I don't need a database, custom fields, or unnecessary plugins; just some barebones code and content. Static suits me just fine.

## It's Great for Performance

I mostly attribute the performance bump to the static nature of the site. There are no roundtrip database calls, as all the content is simply output as HTML files.  There are also no unneeded scripts (AHEM, jQuery), and I feel that I have more control of how images or media display because I'm the one coding them. I'm also not limited by PHP, which is why next-gen image formats like WebP or AVIF can't be uploaded to Wordpress without a plugin.

## The Development Experience (DX) is Fantastic

At the outset, I was honestly a little underwhelmed by how simple Eleventy is. It's extremely basic if you're not using one of the starter projects. But the more I used it, the more I get it. Simple is the point. There is no built-in tooling beyond spinning up a server, template compilation, and caching. This is the opposite of what I've come to expect of a new framework, and it means that any additional tooling is entirely up to me. Eventually I found this refreshing. Rather than being forced into using Webpack - which is also overkill and incredibly daunting for basic tasks - I used Parcel as a bundler because it's all that I really need. 

Eleventy also gives me a choice in how I code my templates. It supports a number of template types, including JavaScript, Nunjucks, Liquid, Markdown, plain HTML, or any combination of them. I originally chose JavaScript as the basis for all of my templates so that I could use some fun new JavaScript ES6+ features, but I eventually simplified the process to using Nunjucks for page templates and markdown for blog posts so that I could launch the site more quickly. Someday I'll make a fun side project out of converting all templates to pure JavaScript. 

## It Forced Me To Learn Something New

As a front-end developer, one thing I never have to worry about is learning something new. The technology moves so fast that it's honestly hard to keep up at times. But using a static site generator (SSG) has long been a desire of mine, so I went for it. I'm glad I did, because it's perfect for my use-case and was super fun to work with. 

## Notable Mention: Eleventy + Netlify is a Match Made in (Web) Heaven

I wasn't planning on talking about hosting, but I feel it's worth mentioning. This is my second site at <a href="https://www.netlify.com/" target="_blank">Netlify</a> and I was reminded of what a great experience they provide. The built-in form handler takes work off my plate, and the workflow is so easy and streamlined: just push to Github and Netlify takes care of the rest. 

## Moving Forward...
The site is far from finished, and I have a number of minor-ish things that I need to get done before I'll feel satisfied with it. Namely, an XML sitemap, RSS feed, favicon and app icons, and better use of the Image plugin. But it's up, and that's a good enough start for me. 
