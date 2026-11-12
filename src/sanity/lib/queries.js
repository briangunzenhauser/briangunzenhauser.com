// Shared card fields. readTime assumes ~5 chars/word and 200 words/minute;
// the UI clamps it to at least 1.
const postCardFields = `
  "id": slug.current,
  title,
  date,
  excerpt,
  coverImage,
  "readTime": round(length(pt::text(body)) / 5 / 200)
`

export const postsQuery = `*[_type == "post"] | order(date desc) {${postCardFields}}`

export const postSlugsQuery = `*[_type == "post"] {
  "id": slug.current
}`

export const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  ${postCardFields},
  body,
  "newer": *[_type == "post" && date > ^.date] | order(date asc)[0] {${postCardFields}},
  "older": *[_type == "post" && date < ^.date] | order(date desc)[0] {${postCardFields}}
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

export const projectsQuery = `*[_type == "project"] | order(coalesce(displayOrder, 9999) asc, coalesce(engagement, client->name) asc) {
  _id,
  engagement,
  description,
  categories,
  projectUrl,
  "client": client->name
}`

export const settingsQuery = `*[_type == "settings" && _id == "siteSettings"][0] {
  siteTitle
}`
