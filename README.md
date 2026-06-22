# מאפס למאה — דף נחיתה

דף נחיתה יחיד לשירות שיעורים פרטיים במתמטיקה, בנוי ב‑**React + Vite** עם CSS רגיל (ללא ספריות UI).

## הרצה

> דרוש Node.js 18+ (לא מותקן כרגע על המחשב — להורדה: https://nodejs.org)

```bash
npm install
npm run dev
```

ואז לפתוח את הכתובת שמופיעה בטרמינל (בדרך כלל http://localhost:5173).

לבנייה לפרודקשן:

```bash
npm run build
npm run preview
```

## מבנה

```
index.html
src/
  main.jsx            נקודת כניסה
  App.jsx             הרכבת הסקשנים + מאזין גלילה
  styles.css          כל העיצוב (משתני צבע, רספונסיב, אנימציות)
  hooks/
    useScrollReveal.js  אנימציית fade-in/slide-up בגלילה
  components/
    Navbar.jsx
    Hero.jsx
    Advantages.jsx     "למה ללמוד איתי" — 4 כרטיסיות
    About.jsx          "מי אני" + תמונת placeholder
    HowItWorks.jsx     תהליך 3 שלבים
    ContactForm.jsx    טופס רב-שלבי עם progress bar
    Footer.jsx
```

## נקודות לעריכה מהירה

- **צבעי מותג**: בראש `src/styles.css` תחת `:root` — המשתנה `--accent` הוא צבע הזהב; אפשר להחליף לטורקיז/ירוק.
- **טקסטים**: כל הקופי נמצא ישירות בקומפוננטות (בעברית).
- **תמונה אישית**: ב‑`About.jsx`, החליפו את ה‑placeholder ב‑`<img>`.
- **פרטי קשר**: ב‑`Footer.jsx` (טלפון, אימייל, וואטסאפ).
- **נתוני הטופס**: בשליחה מודפסים ל‑Console (`console.log`). אין בקאנד בשלב זה — מוכן לחיבור עתידי.
```
