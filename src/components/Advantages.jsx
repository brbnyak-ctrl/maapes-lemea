const ADVANTAGES = [
  {
    icon: '🤝',
    title: 'מנתקים את המסכים, מפעילים את הראש',
    text: 'במקום עוד שעה של גלילה חסרת מעש בטיקטוק, הילד שלכם מקבל שעה של פוקוס, חשיבה ואתגר. חוויית לימוד אינטראקטיבית שמוכיחה להם שאפשר ליהנות גם בלי מסך מול העיניים.',
  },
  {
    icon: '🧑‍🎓',
    title: 'מגיעים לספטמבר בלי שוק',
    text: 'החופש הגדול גורם לילדים לשכוח את הבסיס, ובספטמבר הלחץ מתחיל מחדש. אנחנו ננצל את הקיץ כדי לרענן את החומר, לסגור פערים מהשנה שעברה ולבנות להם יתרון משמעותי עוד לפני שהצילצול הראשון נשמע.',
  },
  {
    icon: '🪜',
    title: 'בגובה העיניים (בלי לחץ של מורה)',
    text: 'כמורה צעיר, קל לי לנתק אותם מהאדישות של החופש. אני לא עוד דמות סמכותית משעממת – אני מדבר איתם בשפה שלהם, מחבר אותם לחומר ומחזיר להם את הביטחון העצמי שהלך לאיבוד.',
  },
  {
    icon: '✨',
    title: 'שיטה הדרגתית שבונה בסיס חזק',
    text: 'במתמטיקה, אם הבסיס רועד – המגדל קורס. הקיץ זה הזמן המושלם לחזור אחורה בלי לחץ של מבחנים, לחזק את היסודות שנחלשו, ולהבטיח שהשנה הבאה תעבור בקלות ובציונים גבוהים.',
  },
]

export default function Advantages() {
  return (
    <section id="advantages" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">למה ללמוד איתי</span>
          <h2 className="section-title">לא עוד שיעור פרטי, אלא חוויית לימוד אחרת</h2>
          <p className="section-sub">
            המטרה שלי היא לא רק שהילד יקבל ציון טוב יותר, אלא שיפסיק לפחד
            ממתמטיקה ויגלה שהוא באמת מסוגל.
          </p>
        </div>

        <div className="cards-grid">
          {ADVANTAGES.map((a, i) => (
            <article
              className="feature-card reveal"
              key={a.title}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="feature-icon">{a.icon}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
