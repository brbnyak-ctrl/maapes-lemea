export default function AreaMap() {
  return (
    <section id="area" className="section">
      <div className="container area-grid">
        {/* גרפיקה — רדיוס שירות מונפש */}
        <div className="area-visual reveal">
          <div className="radar">
            <div className="radar-grid" />
            <span className="radar-ring r1" />
            <span className="radar-ring r2" />
            <span className="radar-ring r3" />
            <span className="radar-sweep" />
            <span className="radar-pin">
              <span className="pin-dot" />
              <span className="pin-label">תל אביב</span>
            </span>
          </div>
        </div>

        {/* תוכן */}
        <div className="area-content reveal">
          <span className="eyebrow">אזורי שירות</span>
          <h2>פרונטלי בתל אביב — ואונליין מכל מקום</h2>
          <p>
            את השיעורים הפרונטליים אני מעביר בתל אביב והסביבה הקרובה, ברדיוס
            של כ-3 ק"מ, כדי שאוכל להגיע בקלות ובזמן ולהשקיע את כל האנרגיה
            בשיעור עצמו.
          </p>
          <ul className="area-list">
            <li>
              <span className="ic">📍</span>
              <div>
                <strong>שיעורים פרונטליים</strong>
                <span>תל אביב והסביבה הקרובה (עד ~3 ק"מ)</span>
              </div>
            </li>
            <li>
              <span className="ic">💻</span>
              <div>
                <strong>שיעורים אונליין</strong>
                <span>מכל מקום בארץ — נוח, יעיל ובדיוק כמו פרונטלי</span>
              </div>
            </li>
          </ul>
          <p className="area-note">
            לא בטוחים אם אתם בתחום? פשוט כתבו לי ונבדוק יחד.
          </p>
        </div>
      </div>
    </section>
  )
}
