export const postsQuery = `*[_type == "post"] | order(date desc) {
  "id": slug.current,
  title,
  date
}`

export const postSlugsQuery = `*[_type == "post"] {
  "id": slug.current
}`

export const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  title,
  date,
  body
}`

export const pageQuery = `*[_type == "page" && slug.current == $slug][0] {
  title,
  introHeading,
  introSubheading,
  ctaLabel,
  ctaLink,
  image,
  body
}`

export const settingsQuery = `*[_type == "settings" && _id == "siteSettings"][0] {
  siteTitle
}`
