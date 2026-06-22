/**
 * סמל המותג + שם — בשימוש ב-Navbar וב-Footer.
 * הסמל: מד עולה (0 → 100) עם חץ כלפי מעלה, נקי ואלגנטי.
 */
export function BrandMark({ size = 40 }) {
  return (
    <span className="brand-mark" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 40 40"
        width={size * 0.66}
        height={size * 0.66}
        fill="none"
        aria-hidden="true"
      >
        <polyline
          points="6,28 15,22 23,24 34,11"
          stroke="#20160a"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34 11 L27.5 11 M34 11 L34 17.5"
          stroke="#20160a"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="28" r="2.4" fill="#20160a" />
      </svg>
    </span>
  )
}

export default function Logo({ size = 40 }) {
  return (
    <span className="logo">
      <BrandMark size={size} />
      <span className="logo-word">
        מאפס<span className="logo-word-strong"> למאה</span>
      </span>
    </span>
  )
}
