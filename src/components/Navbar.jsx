import Logo from './Logo.jsx'

export default function Navbar({ scrolled }) {
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#hero" className="brand">
          <Logo size={40} />
        </a>
        <div className="nav-links">
          <a href="#advantages">למה איתי</a>
          <a href="#about">הסיפור שלי</a>
          <a href="#how">איך זה עובד</a>
          <a href="#area">אזורי שירות</a>
          <a href="#contact" className="btn btn-primary nav-cta">
            בדיקת התאמה
          </a>
        </div>
      </div>
    </nav>
  )
}
