export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        {/* כותרת בשורה אחת — רוחב מלא */}
        <div className="hero-head reveal">
          <span className="hero-badge">
            <span className="dot" />
            שיעורים פרטיים במתמטיקה · יסודי וחטיבת ביניים
          </span>

          <h1>
            מחשבון שמלחיץ – <span className="accent">לביטחון שמנצח.</span>
          </h1>
        </div>

        <div className="hero-grid">
          {/* צד תוכן */}
          <div className="hero-content reveal">
            <p className="hero-sub">
              שיעורים פרטיים בחשבון ומתמטיקה לתלמידי יסודי וחטיבת ביניים (כיתות
              א'-ט'). אנחנו לא משננים נוסחאות – אנחנו בונים בסיס חזק, סוגרים
              פערים מהכיתה ומחזירים לילד את החיוך ואת האמונה שהוא מסוגל.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                לבדיקת התאמה ושיחת ייעוץ קצרה
              </a>
              <a href="#how" className="btn btn-ghost">
                איך זה עובד?
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="num">
                  <span className="accent">1:1</span>
                </div>
                <div className="label">שיעור אישי לכל תלמיד</div>
              </div>
              <div className="hero-stat">
                <div className="num">חינם</div>
                <div className="label">שיחת היכרות ראשונה</div>
              </div>
              <div className="hero-stat">
                <div className="num">
                  <span className="accent">אונליין</span>
                </div>
                <div className="label">או פרונטלי בתל אביב</div>
              </div>
            </div>
          </div>

          {/* צד ויזואלי */}
          <div className="hero-visual reveal">
            <div className="hero-card">
              <div className="hero-card-head">
                <strong>ככה נראה שיעור</strong>
                <span className="tag">צעד אחר צעד</span>
              </div>

              <ul className="lesson-list">
                <li className="lesson-item">
                  <span className="li-check">1</span>
                  <div className="li-text">
                    <strong>מתחילים מאיפה שנתקעת</strong>
                    <span>בלי לדלג על פערים מהעבר</span>
                  </div>
                </li>
                <li className="lesson-item">
                  <span className="li-check">2</span>
                  <div className="li-text">
                    <strong>מבינים את הרעיון</strong>
                    <span>לא משננים נוסחאות בעל פה</span>
                  </div>
                </li>
                <li className="lesson-item">
                  <span className="li-check">3</span>
                  <div className="li-text">
                    <strong>מתרגלים יחד</strong>
                    <span>עד שזה מרגיש ברור</span>
                  </div>
                </li>
                <li className="lesson-item">
                  <span className="li-check">✓</span>
                  <div className="li-text">
                    <strong>פותרים לבד, בביטחון</strong>
                    <span>וזאת המטרה האמיתית</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="hero-float">
              <span className="ic">🎯</span>
              <div>
                <div className="t1">תוכנית אישית</div>
                <div className="t2">בנויה לפי הקצב שלך</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
