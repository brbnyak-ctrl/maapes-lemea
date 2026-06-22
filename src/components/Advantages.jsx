const ADVANTAGES = [
  {
    icon: '🤝',
    title: 'ליווי אישי ובגובה העיניים',
    text: 'כל שיעור מותאם בדיוק לקצב של הילד. בלי לחץ ובלי שיפוטיות. אני זמין עבורם גם בין השיעורים לכל שאלה בוואטסאפ לפני מבחנים.',
  },
  {
    icon: '🧑‍🎓',
    title: 'שפה משותפת',
    text: 'כמורה צעיר, אני מביא אנרגיה אחרת לשיעור. אני לא עוד דמות סמכותית ומאיימת – אני מדבר איתם בגובה העיניים ומסביר את החומר בשפה פשוטה שהם באמת מבינים.',
  },
  {
    icon: '🪜',
    title: 'שיטה הדרגתית ויציבה',
    text: 'חשבון הוא כמו מגדל קוביות. אם הבסיס רועד, הכל קורס. אנחנו חוזרים בדיוק למקום שבו הילד איבד את הביטחון, סוגרים את הפער, ומשם מתקדמים בקצב שלו.',
  },
  {
    icon: '✨',
    title: 'לומדים בכיף ומחזירים את הביטחון',
    text: 'מתמטיקה לא חייבת להיות סיוט. כשהילד מבין את ההיגיון ומצליח לפתור תרגיל לבד, הביטחון העצמי שלו עולה – וזה משפיע מיד גם על שאר המקצועות בבית הספר.',
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
