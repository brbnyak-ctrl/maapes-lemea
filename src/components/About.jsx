export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        {/* תמונה (placeholder) */}
        <div className="about-photo reveal">
          <div className="placeholder">
            <div className="avatar">מ</div>
            <div className="ph-note">כאן תיכנס התמונה שלי</div>
          </div>
          <div className="about-badge">
            <span className="ic">📐</span>
            <div>
              <div className="t1">שיעורים פרטיים במתמטיקה</div>
              <div className="t2">יסודי · חטיבת ביניים</div>
            </div>
          </div>
        </div>

        {/* תוכן */}
        <div className="about-content reveal">
          <span className="eyebrow">הסיפור שלי</span>
          <h2>נעים מאוד — וכן, גם אני הייתי שם</h2>
          <p>
            בכיתה ט׳ ירדתי לרמה של 4 יחידות במתמטיקה. אמרתי לעצמי "מה זה באמת
            משנה, ההבדל בין 4 ל-5 הוא קטן" — וויתרתי בלי ממש לחשוב על זה. רק
            אחר כך הבנתי שזה לא היה על המספר בכלל.
          </p>
          <p>
            כשחזרתי למתמטיקה ברצינות, גיליתי שהיא נתנה לי הרבה יותר מציון: היא
            לימדה אותי לחשוב מסודר, לפרק בעיות גדולות לחתיכות קטנות ולא להיבהל
            ממשהו רק כי הוא נראה מסובך. אלה כלים שאני משתמש בהם בחיים כל יום.
          </p>
          <p>
            בדיוק בגלל זה אני מלמד היום. אני זוכר טוב איך זה מרגיש להיתקע, וגם
            איך זה מרגיש כשפתאום זה מתחבר. השיעורים שלי רגועים, בגובה העיניים
            ועם הרבה כיף — כי ילד שנהנה ומרגיש בטוח, גם מצליח.
          </p>
          <div className="about-quote">
            "מתמטיקה לא לימדה אותי רק לפתור תרגילים — היא לימדה אותי לחשוב. את
            זה אני רוצה להעביר הלאה."
          </div>
        </div>
      </div>
    </section>
  )
}
