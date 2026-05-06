import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import styles from '../styles/Button.module.css'

export default function Button({ href, children, type, onClick }) {
  if (href) {
    return (
      <Link href={href} className={styles.buttonLink}>
        {children}
        <ArrowRight size={16} strokeWidth={2} />
      </Link>
    )
  }
  return (
    <button type={type || 'button'} className={styles.buttonLink} onClick={onClick}>
      {children}
      <ArrowRight size={16} strokeWidth={2} />
    </button>
  )
}
