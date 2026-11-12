import { useEffect, useRef } from 'react'
import styles from '../styles/ReadingProgress.module.css'

// Thin galaxy-gradient bar fixed to the top of the viewport that fills as the
// reader scrolls. Updates are batched into one rAF per frame and applied as a
// transform, so scrolling never triggers layout.
export default function ReadingProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    let frame = null

    const update = () => {
      frame = null
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 1
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`
    }

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className={styles.track} aria-hidden="true">
      <div ref={barRef} className={styles.bar} />
    </div>
  )
}
