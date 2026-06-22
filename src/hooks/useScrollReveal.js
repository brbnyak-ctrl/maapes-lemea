import { useEffect } from 'react'

/**
 * מפעיל אנימציית חשיפה עדינה (fade-in / slide-up) על כל אלמנט עם class="reveal"
 * ברגע שהוא נכנס לאזור התצוגה. רץ פעם אחת לכל אלמנט.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -60px 0px' }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
