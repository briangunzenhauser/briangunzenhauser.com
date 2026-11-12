// Deterministic generated cover for posts without a coverImage. The slug is
// hashed so every post gets its own, stable variation of the galaxy palette
// (see --gradient__galaxy in styles/globals.css): a different angle, a
// rotation of the stop order, and the position of a soft highlight.
const GALAXY = ['#2dd4bf', '#38bdf8', '#818cf8', '#c084fc']

// Dark tint laid over the whole cover so it sits back against the dark page.
// 0 = full brightness, 1 = black. Raise to dim further.
const DIM = 0.35

function hash(str = '') {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

export function coverGradient(slug) {
  const h = hash(slug)
  const angle = h % 360
  const offset = (h >>> 9) % GALAXY.length
  const stops = GALAXY.map((_, i) => GALAXY[(i + offset) % GALAXY.length])
  const x = 15 + ((h >>> 13) % 70)
  const y = 15 + ((h >>> 19) % 70)

  return [
    `linear-gradient(rgba(1,8,12,${DIM}), rgba(1,8,12,${DIM}))`,
    `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.2), transparent 45%)`,
    `radial-gradient(circle at ${100 - x}% ${100 - y}%, rgba(1,8,12,0.55), transparent 60%)`,
    `linear-gradient(${angle}deg, ${stops.join(', ')})`,
  ].join(', ')
}
