// Shared by the project schema and the /work page so the studio dropdown and
// the rendered pills can never drift apart. Values are stored in Sanity; titles
// and colors are display-only, so either can change without touching content.
//
// Colors are chosen to sit on the near-black page background with
// --color__primary as the text color. All five clear WCAG AA at the pill's small
// size, all stay clear of the --color__postTitle mauve directly beneath them, and
// hues are spread so that categories likely to appear together stay far apart.
export const PROJECT_CATEGORIES = [
  {title: 'Development', value: 'development', color: '#2dd4bf'},
  {title: 'Design', value: 'design', color: '#fb7185'},
  // Title is qualified because bare "Strategy" reads as content or marketing
  // strategy in a web context. Value stays `strategy` — titles are display-only,
  // so this needed no content migration.
  {title: 'Technical Strategy', value: 'strategy', color: '#a78bfa'},
  {title: 'Facilitation', value: 'facilitation', color: '#fbbf24'},
]

// Sanity's options.list wants title/value pairs only.
export const CATEGORY_OPTIONS = PROJECT_CATEGORIES.map(({title, value}) => ({
  title,
  value,
}))

const find = (value) => PROJECT_CATEGORIES.find((c) => c.value === value)

export const categoryTitle = (value) => find(value)?.title || value

// Undefined for unknown values so the pill falls back to its CSS default
// rather than rendering an empty custom property.
export const categoryColor = (value) => find(value)?.color
