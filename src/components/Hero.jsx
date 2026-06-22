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
            ממתמטיקה שמלחיצה — <br />
            <span className="accent">להצלחה שמרגישים.</span>
          </h1>

          <p className="hero-sub">
            ליווי אישי וסבלני שבונה את הביטחון של הילד צעד אחר צעד. אני צעיר,
            עברתי בעצמי את אותו חומר ואת אותם מבחנים לא מזמן — ואני יודע להסביר
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
              <strong>מסלול ההתקדמות</strong>
              <span className="tag">דוגמה</span>
            </div>

            <div className="progress-rings">
              <div className="ring">
                <span className="big">62</span>
                <span className="small">נקודת פתיחה</span>
              </div>
              <div className="ring">
                <span className="big">84</span>
                <span className="small">אחרי חודשיים</span>
              </div>
              <div className="ring">
                <span className="big">95</span>
                <span className="small">יעד</span>
              </div>
            </div>

            <div className="hero-bars">
              <div className="bar-row">
                <div className="bar-label">
                  <span>שברים ואחוזים</span>
                  <span>90%</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: '90%' }} />
                </div>
              </div>
              <div className="bar-row">
                <div className="bar-label">
                  <span>גאומטריה</span>
                  <span>78%</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: '78%' }} />
                </div>
              </div>
              <div className="bar-row">
                <div className="bar-label">
                  <span>ביטחון עצמי במבחנים</span>
                  <span>96%</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: '96%' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="hero-float">
            <span className="ic">🎯</span>
            <div>
              <div className="t1">תוכנית אישית</div>
              <div className="t2">בנויה לפי הקצב של הילד</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
