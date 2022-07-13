---
layout: layoutPost
title: 'Using Data Attributes for Mobile Column Titles in Responsive Tables'
tags: post
date: '2021-08-01'
---

# Using Data Attributes for Mobile Column Titles in Responsive Tables

A few years ago, I referenced <a href="https://css-tricks.com/responsive-data-tables/" target="_blank">a handy CSS Tricks article</a> when trying to figure out the best way to handle the display of column and cell data when displaying it in a tabular data format. In essence, the article illustrates that by changing the display property of the rows and cells, and hiding the column headings, one can use the :before pseudo element to show the column headings next to the cell content. It's a great solution that keeps the column and cell data on the same line, while stacking it into rows so the table isn't squeezed.

While it works great, one thing that didn't sit well was that I was putting content in CSS. If I changed the column headings in the future, I would need to change them in the :before pseudo element content property as well. 

By using a data-title attribute in the cell of the table, the attr() function can be referenced in a CSS attribute selector that grabs the data-title to be shown in the :before pseudo element content attribute.  In re-reading the article recently, I noticed a small blurb at the bottom of the page - as well as a mention in the comments - that links to this solution, but I completely overlooked it the first time I referenced the article. I figured I would write a post on it in case it's overlooked by anyone else.

[Here's a pen that shows a simple example of how it works](https://codepen.io/briangunzenhauser/pen/JjboOMj).


What I like about this is two-fold. One, it respects the separation of concerns and keeps content out of CSS. And two, it can keep the management of the title in one spot if using a CMS, such as ACF in Wordpress.

According to caniuse.com, the <a href="https://caniuse.com/?search=attr" target="_blank">attr() function</a> is <em>supported for effectively all browsers for the content property</em>, so using this is a pretty safe bet.

Hopefully this helps someone out there. If you use this and have any additional tips, or if you see anything glaringly wrong with this approach, <a href="/contact/" target="_blank">drop me a line on my contact page</a> and I'll update the article accordingly.
