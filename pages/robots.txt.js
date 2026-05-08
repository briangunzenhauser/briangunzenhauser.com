const SITE_URL = 'https://www.briangunzenhauser.com'

export default function Robots() {
  return null
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain')
  res.write(`User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml`)
  res.end()

  return { props: {} }
}
