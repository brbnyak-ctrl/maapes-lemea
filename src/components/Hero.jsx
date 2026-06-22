export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        {/* צד תוכן */}
        <div className="hero-content reveal">
          <span className="hero-badge">
            <span className="dot" />
            שיעורים פרטיים במתמטיקה · יסודי וחטיבת ביניים
          </span>

          <h1>
            ממתמטיקה שמלחיצה, <br />
            <span className="accent">להצלחה שמרגישים.</span>
          </h1>

          <p className="hero-sub">
            ליווי אישי וסבלני שבונה את הביטחון של הילד צעד אחר צעד. אני צעיר,
            עברתי בעצמי את אותו חומר ואת אותם מבחנים לא מזמן, ואני יודע להסביר
            את זה בשפה שילדים באמת מתחברים אליה. בלי לחץ, בלי בושה משאלות.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              לתיאום שיחת היכרות חינם
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
    </section>
  )
}
