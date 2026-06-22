import { useState } from 'react'

/* ============================================================
   👈 מספר הוואטסאפ שאליו יישלחו הפניות.
   בפורמט בינלאומי בלי + ובלי 0 בהתחלה: 972 ואז המספר.
   לדוגמה: 050-123-4567  ->  '972501234567'
   ============================================================ */
const WHATSAPP_NUMBER = '972537202725' // 053-720-2725

const STEPS = [
  { key: 'contact', name: 'פרטי קשר' },
  { key: 'student', name: 'פרטי התלמיד' },
  { key: 'need', name: 'הצורך' },
  { key: 'availability', name: 'זמינות' },
]

const GRADES = [
  'כיתה א׳', 'כיתה ב׳', 'כיתה ג׳', 'כיתה ד׳', 'כיתה ה׳', 'כיתה ו׳',
  'כיתה ז׳', 'כיתה ח׳', 'כיתה ט׳',
]

const NEEDS = [
  { id: 'grades', label: 'שיפור ציונים' },
  { id: 'exam', label: 'הכנה למבחן' },
  { id: 'foundations', label: 'חיזוק יסודות' },
  { id: 'other', label: 'אחר' },
]

const DAYS = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי']
const TIMES = ['בוקר', 'צהריים', 'אחר הצהריים', 'ערב']

const INITIAL = {
  parentName: '',
  phone: '',
  email: '',
  grade: '',
  school: '',
  needs: [],
  needOther: '',
  days: [],
  times: [],
  notes: '',
}

export default function ContactForm() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [data, setData] = useState(INITIAL)
  const [errors, setErrors] = useState({})

  const set = (field, value) => {
    setData((d) => ({ ...d, [field]: value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const toggleInArray = (field, value) => {
    setData((d) => {
      const arr = d[field]
      return {
        ...d,
        [field]: arr.includes(value)
          ? arr.filter((v) => v !== value)
          : [...arr, value],
      }
    })
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const validateStep = () => {
    const e = {}
    if (step === 0) {
      if (!data.parentName.trim()) e.parentName = 'נא למלא שם'
      if (!/^[0-9\-+\s()]{7,}$/.test(data.phone.trim()))
        e.phone = 'נא להזין מספר טלפון תקין'
      if (!/^\S+@\S+\.\S+$/.test(data.email.trim()))
        e.email = 'נא להזין כתובת אימייל תקינה'
    }
    if (step === 1) {
      if (!data.grade) e.grade = 'נא לבחור כיתה'
    }
    if (step === 2) {
      if (data.needs.length === 0) e.needs = 'נא לבחור לפחות אפשרות אחת'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const buildWhatsappText = () => {
    const needLabels = data.needs
      .map((id) => NEEDS.find((n) => n.id === id)?.label)
      .filter(Boolean)
      .join(', ')

    const lines = [
      'שלום! מילאתי טופס באתר "מאפס למאה" 👋',
      '',
      `שם: ${data.parentName}`,
      `טלפון: ${data.phone}`,
      `אימייל: ${data.email}`,
      `כיתה: ${data.grade}`,
    ]
    if (data.school.trim()) lines.push(`בית ספר / אזור: ${data.school}`)
    if (needLabels) lines.push(`הצורך: ${needLabels}`)
    if (data.needs.includes('other') && data.needOther.trim())
      lines.push(`פירוט הצורך: ${data.needOther}`)
    if (data.days.length) lines.push(`ימים מועדפים: ${data.days.join(', ')}`)
    if (data.times.length) lines.push(`שעות מועדפות: ${data.times.join(', ')}`)
    if (data.notes.trim()) lines.push(`הערות: ${data.notes}`)

    return lines.join('\n')
  }

  const openWhatsapp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      buildWhatsappText()
    )}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const next = () => {
    if (!validateStep()) return
    if (step < STEPS.length - 1) {
      setStep((s) => s + 1)
    } else {
      // שלב אחרון — שליחה: פתיחת וואטסאפ עם הפרטים + שמירה מקומית
      console.log('📩 פנייה חדשה מהטופס:', data)
      openWhatsapp()
      setDone(true)
    }
  }

  const prev = () => setStep((s) => Math.max(0, s - 1))

  const progress = done
    ? 100
    : Math.round(((step + 1) / STEPS.length) * 100)

  const needLabels = data.needs
    .map((id) => NEEDS.find((n) => n.id === id)?.label)
    .filter(Boolean)
    .join(', ')

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">בואו נתחיל</span>
          <h2 className="section-title">תיאום שיחת היכרות</h2>
          <p className="section-sub">
            כמה פרטים קצרים, ובלחיצת כפתור הם נשלחים אליי ישירות בוואטסאפ.
            אחזור אליכם בהקדם לתיאום שיחה קצרה וחינמית — בלי שום התחייבות.
          </p>
        </div>

        <div className="contact-wrap reveal">
          <div className="form-card">
            {!done ? (
              <>
                {/* Progress */}
                <div className="progress">
                  <div className="progress-meta">
                    <span className="step-name">{STEPS[step].name}</span>
                    <span className="step-count">
                      שלב {step + 1} מתוך {STEPS.length}
                    </span>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-bar"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="progress-dots">
                    {STEPS.map((s, i) => (
                      <div
                        key={s.key}
                        className={`pd ${
                          i === step ? 'active' : i < step ? 'done' : ''
                        }`}
                      >
                        <span className="pdot">{i < step ? '✓' : i + 1}</span>
                        <span>{s.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Steps */}
                {step === 0 && (
                  <div className="form-step" key="s0">
                    <h3>נעים להכיר</h3>
                    <p className="step-hint">איך נוכל ליצור איתכם קשר?</p>

                    <div className="field">
                      <label>שם ההורה או התלמיד</label>
                      <input
                        type="text"
                        placeholder="לדוגמה: דנה כהן"
                        value={data.parentName}
                        onChange={(e) => set('parentName', e.target.value)}
                        className={errors.parentName ? 'input-error' : ''}
                      />
                      {errors.parentName && (
                        <div className="error-text">{errors.parentName}</div>
                      )}
                    </div>

                    <div className="field-row">
                      <div className="field">
                        <label>טלפון</label>
                        <input
                          type="tel"
                          inputMode="tel"
                          placeholder="050-0000000"
                          value={data.phone}
                          onChange={(e) => set('phone', e.target.value)}
                          className={errors.phone ? 'input-error' : ''}
                        />
                        {errors.phone && (
                          <div className="error-text">{errors.phone}</div>
                        )}
                      </div>
                      <div className="field">
                        <label>אימייל</label>
                        <input
                          type="email"
                          inputMode="email"
                          placeholder="name@example.com"
                          value={data.email}
                          onChange={(e) => set('email', e.target.value)}
                          className={errors.email ? 'input-error' : ''}
                        />
                        {errors.email && (
                          <div className="error-text">{errors.email}</div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="form-step" key="s1">
                    <h3>קצת על התלמיד</h3>
                    <p className="step-hint">
                      כדי שאוכל להבין מאיפה מתחילים ולהתאים את הגישה.
                    </p>

                    <div className="field">
                      <label>כיתה</label>
                      <select
                        value={data.grade}
                        onChange={(e) => set('grade', e.target.value)}
                        className={errors.grade ? 'input-error' : ''}
                      >
                        <option value="" disabled>
                          בחרו כיתה
                        </option>
                        {GRADES.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                      {errors.grade && (
                        <div className="error-text">{errors.grade}</div>
                      )}
                    </div>

                    <div className="field">
                      <label>בית ספר / אזור מגורים</label>
                      <input
                        type="text"
                        placeholder="לדוגמה: בית ספר רמות, מודיעין"
                        value={data.school}
                        onChange={(e) => set('school', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="form-step" key="s2">
                    <h3>מה הצורך העיקרי?</h3>
                    <p className="step-hint">
                      אפשר לבחור יותר מאפשרות אחת.
                    </p>

                    <div className="choice-grid">
                      {NEEDS.map((n) => {
                        const selected = data.needs.includes(n.id)
                        return (
                          <div
                            key={n.id}
                            className={`choice ${selected ? 'selected' : ''}`}
                            onClick={() => toggleInArray('needs', n.id)}
                            role="checkbox"
                            aria-checked={selected}
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                toggleInArray('needs', n.id)
                              }
                            }}
                          >
                            <span className="check">✓</span>
                            <span className="choice-label">{n.label}</span>
                          </div>
                        )
                      })}
                    </div>
                    {errors.needs && (
                      <div className="error-text" style={{ marginTop: 12 }}>
                        {errors.needs}
                      </div>
                    )}

                    {data.needs.includes('other') && (
                      <div className="field" style={{ marginTop: 20 }}>
                        <label>פרטו את הצורך</label>
                        <input
                          type="text"
                          placeholder="ספרו לי במשפט על מה תרצו לעבוד"
                          value={data.needOther}
                          onChange={(e) => set('needOther', e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                )}

                {step === 3 && (
                  <div className="form-step" key="s3">
                    <h3>זמינות מועדפת</h3>
                    <p className="step-hint">
                      מתי בדרך כלל נוח לכם? נסגור את הזמן המדויק בשיחה.
                    </p>

                    <span className="field-group-label">ימים מועדפים</span>
                    <div className="chips" style={{ marginBottom: 24 }}>
                      {DAYS.map((d) => (
                        <button
                          type="button"
                          key={d}
                          className={`chip ${
                            data.days.includes(d) ? 'selected' : ''
                          }`}
                          onClick={() => toggleInArray('days', d)}
                        >
                          {d}
                        </button>
                      ))}
                    </div>

                    <span className="field-group-label">שעות מועדפות</span>
                    <div className="chips" style={{ marginBottom: 24 }}>
                      {TIMES.map((t) => (
                        <button
                          type="button"
                          key={t}
                          className={`chip ${
                            data.times.includes(t) ? 'selected' : ''
                          }`}
                          onClick={() => toggleInArray('times', t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    <div className="field">
                      <label>משהו נוסף שכדאי שאדע? (לא חובה)</label>
                      <textarea
                        placeholder="לדוגמה: יש מבחן גדול בעוד שבועיים, הילד ביישן בהתחלה..."
                        value={data.notes}
                        onChange={(e) => set('notes', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Nav */}
                <div className="form-nav">
                  {step > 0 ? (
                    <button className="btn btn-ghost" onClick={prev}>
                      → הקודם
                    </button>
                  ) : (
                    <span className="spacer" />
                  )}
                  <button className="btn btn-primary" onClick={next}>
                    {step === STEPS.length - 1 ? 'שליחה בוואטסאפ 💬' : 'הבא ←'}
                  </button>
                </div>
              </>
            ) : (
              /* מסך תודה */
              <div className="thank-you">
                <div className="ty-icon">💬</div>
                <h3>כמעט סיימנו — שלחו לי בוואטסאפ!</h3>
                <p>
                  פתחתי לכם חלון וואטסאפ עם כל הפרטים מוכנים. רק צריך ללחוץ
                  "שלח" כדי שהפנייה תגיע אליי, ואחזור אליכם בהקדם לתיאום שיחת
                  היכרות. אם החלון לא נפתח — לחצו על הכפתור למטה.
                </p>

                <button
                  className="btn btn-primary"
                  onClick={openWhatsapp}
                  style={{ marginBottom: 24 }}
                >
                  פתיחת וואטסאפ עם הפרטים 💬
                </button>

                <div className="ty-summary">
                  <div className="row">
                    <span className="k">שם</span>
                    <span className="v">{data.parentName || '—'}</span>
                  </div>
                  <div className="row">
                    <span className="k">טלפון</span>
                    <span className="v">{data.phone || '—'}</span>
                  </div>
                  <div className="row">
                    <span className="k">כיתה</span>
                    <span className="v">{data.grade || '—'}</span>
                  </div>
                  <div className="row">
                    <span className="k">הצורך</span>
                    <span className="v">{needLabels || '—'}</span>
                  </div>
                  {data.days.length > 0 && (
                    <div className="row">
                      <span className="k">ימים</span>
                      <span className="v">{data.days.join(', ')}</span>
                    </div>
                  )}
                </div>

                <button
                  className="btn btn-ghost"
                  onClick={() => {
                    setData(INITIAL)
                    setStep(0)
                    setDone(false)
                  }}
                >
                  שליחת פנייה נוספת
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
