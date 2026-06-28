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
            במקום עוד שעה מול המסך <br />
            <span className="accent">שעה שתקפיץ אותו במתמטיקה.</span>
          </h1>
        </div>

        <div className="hero-grid">
          {/* צד תוכן */}
          <div className="hero-content reveal">
            <p className="hero-sub">
              החופש הגדול כבר כאן, והילדים דבוקים לסמארטפון? במקום לתת למוח שלהם
              להתנוון עד ספטמבר, זה הזמן לנצל את הזמן נכון. שיעורים פרטיים בחשבון
              ומתמטיקה (כיתות א'-ט') שמפרקים את הפערים, מחזירים את הביטחון ומכינים
              אותם לשנה הבאה – כדי שהם יפתחו אותה בראש שקט ובלי פחד.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                לשיחת ייעוץ ובדיקת התאמה לקיץ
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
                <div className="num">
                  <span className="accent">50%</span>
                </div>
                <div className="label">הנחה על שיעור ראשון</div>
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
