const STEPS = [
  {
    n: '1',
    title: 'שיחת היכרות',
    text: 'שיחה קצרה וחינמית שבה נכיר, תספרו לי על הילד ועל מה שמאתגר אותו, ונבדוק יחד אם יש כימיה והתאמה. בלי התחייבות.',
  },
  {
    n: '2',
    title: 'אבחון ומבחן רמה',
    text: 'בשיעור הראשון אני ממפה את הידע הקיים ואת הפערים, כדי להבין בדיוק מאיפה מתחילים ולמה כדאי לשים לב.',
  },
  {
    n: '3',
    title: 'תוכנית לימוד אישית',
    text: 'בונים מסלול ברור עם יעדים מדידים, ומתקדמים בקצב של הילד. אתם מקבלים עדכונים שוטפים על ההתקדמות.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">איך זה עובד</span>
          <h2 className="section-title">שלושה צעדים פשוטים להתחלה</h2>
          <p className="section-sub">
            התהליך בנוי כך שתרגישו בנוח כבר מהרגע הראשון: ברור, שקוף ובלי
            הפתעות.
          </p>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <div
              className="step reveal"
              key={s.n}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="step-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {i < STEPS.length - 1 && <span className="step-connector">←</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
