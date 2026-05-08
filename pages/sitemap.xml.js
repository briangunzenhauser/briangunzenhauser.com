import { getSortedPostsData } from '../lib/posts'

const SITE_URL = 'https://www.briangunzenhauser.com'

const staticPages = [
  '',
  '/about',
  '/posts',
  '/contact',
  '/fractional-web-technology-services',
]

function generateSitemap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (path) => `
  <url>
    <loc>${SITE_URL}${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
  ${posts
    .map(
      (post) => `
  <url>
    <loc>${SITE_URL}/posts/${post.id}</loc>
    <lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>`
    )
    .join('')}
</urlset>`
}

export default function Sitemap() {
  return null
}

export async function getServerSideProps({ res }) {
  const posts = await getSortedPostsData()

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
  res.write(generateSitemap(posts))
  res.end()

  return { props: {} }
}
