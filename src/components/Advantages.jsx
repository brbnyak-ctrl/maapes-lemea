const ADVANTAGES = [
  {
    icon: '🤝',
    title: 'ליווי אישי וצמוד',
    text: 'כל שיעור מותאם בדיוק לילד — לקצב, לאופי ולמקום שבו הוא מתקשה. אני זמין גם בין השיעורים לשאלה קצרה לפני מבחן.',
  },
  {
    icon: '🧑‍🎓',
    title: 'שפה משותפת',
    text: 'אני צעיר ועברתי את אותו חומר ואת אותם מבחנים לא מזמן. אני מסביר בגובה העיניים, פחות מאיים ממורה — ויודע איפה בדיוק נתקעים.',
  },
  {
    icon: '🪜',
    title: 'שיטה הדרגתית',
    text: 'בונים את הידע נדבך על נדבך, מהיסודות החסרים ועד החומר הנוכחי. כשהבסיס יציב — הכול פתאום מתחבר.',
  },
  {
    icon: '✨',
    title: 'לומדים בכיף',
    text: 'מתמטיקה לא חייבת להיות מפחידה. השיעורים רגועים, ענייניים ועם חיוך — וזה בדיוק מה שמחזיר לילד את הביטחון.',
  },
]

export default function Advantages() {
  return (
    <section id="advantages" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">למה ללמוד איתי</span>
          <h2 className="section-title">לא עוד שיעור פרטי — חוויית לימוד אחרת</h2>
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
