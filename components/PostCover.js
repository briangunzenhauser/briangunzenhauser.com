import Image from 'next/image'
import { urlFor } from '../src/sanity/lib/image'
import { coverGradient } from '../lib/coverGradient'
import styles from '../styles/PostCover.module.css'

// A real Sanity cover image when the post has one, otherwise the generated
// gradient. `variant` sets the aspect ratio: "card" (16/9), "square" (1/1,
// the frameless cards) or "hero" (21/9, the post page and /posts banner).
const RATIOS = { card: 16 / 9, square: 1, hero: 21 / 9 }

// Covers are square art with the artwork placed high, clear of the frameless
// card's text overlay. Wide crops centre on this height (0 = top, 1 = bottom)
// instead of the middle, so the art stays centred in the banner. Moving the
// hotspot in Studio overrides it per image.
const ART_CENTER_Y = 0.32

// Sanity asset ids encode the original size: image-<hash>-<w>x<h>-<ext>.
function assetSize(image) {
  const ref = image.asset._ref || image.asset._id || ''
  const match = ref.match(/-(\d+)x(\d+)-/)
  return match ? { width: Number(match[1]), height: Number(match[2]) } : null
}

// Pixel rect for a full-width crop at `ratio`, centred vertically on the art.
// Works inside any crop set in Studio.
function bannerRect(image, ratio) {
  const size = assetSize(image)
  if (!size) return null
  const crop = image.crop || {}
  const left = size.width * (crop.left || 0)
  const top = size.height * (crop.top || 0)
  const width = size.width * (1 - (crop.left || 0) - (crop.right || 0))
  const height = size.height * (1 - (crop.top || 0) - (crop.bottom || 0))

  const bandHeight = Math.min(height, width / ratio)
  const hotspotY = image.hotspot?.y
  const centerY =
    hotspotY != null && hotspotY !== 0.5 ? hotspotY * size.height - top : ART_CENTER_Y * height
  const bandTop = Math.min(Math.max(centerY - bandHeight / 2, 0), height - bandHeight)

  return [left, top + bandTop, width, bandHeight].map(Math.round)
}

function coverUrl(image, variant) {
  const ratio = RATIOS[variant] || RATIOS.card
  const width = variant === 'hero' ? 1600 : 800
  const height = Math.round(width / ratio)

  const rect = variant === 'hero' && bannerRect(image, ratio)
  if (rect) {
    // Built from the bare asset so Studio's crop/hotspot aren't applied twice.
    return urlFor(image.asset).rect(...rect).width(width).height(height).auto('format').url()
  }
  return urlFor(image).width(width).height(height).fit('crop').auto('format').url()
}

export default function PostCover({ id, coverImage, variant = 'card', priority = false }) {
  const className = `${styles.cover} ${styles[variant]}`

  if (coverImage?.asset) {
    return (
      <div className={className}>
        <Image
          src={coverUrl(coverImage, variant)}
          alt={coverImage.alt || ''}
          fill
          sizes={variant === 'hero' ? '(max-width: 1200px) 100vw, 1200px' : '(max-width: 768px) 100vw, 400px'}
          priority={priority}
          className={styles.image}
        />
      </div>
    )
  }

  return <div className={`${className} ${styles.generated}`} style={{ background: coverGradient(id) }} aria-hidden="true" />
}
