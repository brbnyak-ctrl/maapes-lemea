import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#hero" className="brand">
              <Logo size={40} />
            </a>
            <p>
              שיעורים פרטיים במתמטיקה לתלמידי בית ספר יסודי וחטיבת ביניים.
              ליווי אישי, שיטה ברורה, ולמידה בכיף.
            </p>
          </div>

          <div className="footer-contact">
            <a href="tel:+972537202725">
              <span>📞</span> 053-720-2725
            </a>
            <a
              href="https://wa.me/972537202725"
              target="_blank"
              rel="noreferrer"
            >
              <span>💬</span> וואטסאפ
            </a>
            <a href="mailto:brbnyakbus@gmail.com">
              <span>✉️</span> brbnyakbus@gmail.com
            </a>
            <span>
              <span>📍</span> תל אביב והסביבה · ואונליין מכל מקום
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} מאפס למאה · כל הזכויות שמורות</span>
          <span className="credit">
            נבנה באהבה <span className="accent">·</span> מתמטיקה בגובה העיניים
          </span>
        </div>
      </div>
    </footer>
  )
}
