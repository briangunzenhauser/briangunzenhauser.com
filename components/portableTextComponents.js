import YoutubeEmbed from './YoutubeEmbed'
import { urlFor } from '../src/sanity/lib/image'

// Sanity asset refs encode the original size: image-<id>-<w>x<h>-<ext>.
// Reading it lets us set width/height so inline images don't shift layout.
function dimensionsFromRef(ref = '') {
  const match = ref.match(/-(\d+)x(\d+)-/)
  return match ? { width: Number(match[1]), height: Number(match[2]) } : {}
}

function BodyImage({ value }) {
  if (!value?.asset?._ref) return null
  const { width, height } = dimensionsFromRef(value.asset._ref)
  return (
    <img
      src={urlFor(value).width(1200).fit('max').auto('format').url()}
      alt={value.alt || ''}
      width={width}
      height={height}
      loading="lazy"
      style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '2rem 0' }}
    />
  )
}

// Shared Portable Text renderers. The `link` annotation defined in the schemas
// carries a `blank` boolean, but @portabletext/react's built-in link handling
// ignores unknown fields — so without this the "Open in new tab" checkbox in the
// studio does nothing. rel="noopener" only, not "noreferrer", so referrer data
// still reaches the destination.
export const portableTextComponents = {
  types: {
    youtube: YoutubeEmbed,
    image: BodyImage,
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        {...(value?.blank ? { target: '_blank', rel: 'noopener' } : {})}
      >
        {children}
      </a>
    ),
  },
}
