import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { parseISO, format } from 'date-fns'
import PostCover from './PostCover'
import styles from '../styles/PostCard.module.css'

export function formatMeta(date, readTime) {
  const parts = []
  if (date) parts.push(format(parseISO(date), 'MMM yyyy'))
  parts.push(`${Math.max(1, readTime || 0)} min read`)
  return parts.join(' · ')
}

// `featured` switches to the large horizontal layout used for the newest post.
// `label` is an optional eyebrow, e.g. "Newer" / "Older" on the post page.
// `frameless` drops the card frame and lays the text over the cover, on a
// dark scrim so it stays legible over any image.
export default function PostCard({ post, featured = false, frameless = false, label, priority = false }) {
  const { id, title, date, excerpt, coverImage, readTime } = post
  const HeadingTag = featured ? 'h2' : 'h3'

  return (
    <Link href={`/posts/${id}`} className={[styles.card, featured && styles.featured, frameless && styles.frameless].filter(Boolean).join(' ')}>
      <PostCover id={id} coverImage={coverImage} variant={frameless ? (featured ? 'hero' : 'square') : 'card'} priority={priority} />
      <div className={styles.body}>
        {label && <span className={styles.label}>{label}</span>}
        <span className={styles.meta}>
          <time dateTime={date}>{formatMeta(date, readTime)}</time>
        </span>
        <HeadingTag className={styles.title}>{title}</HeadingTag>
        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
        <span className={styles.more}>
          Read post <ArrowRight size={16} strokeWidth={2} className={styles.arrow} />
        </span>
      </div>
    </Link>
  )
}
