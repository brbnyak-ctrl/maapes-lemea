const QRCode = require('qrcode')
const fs = require('fs')
const path = require('path')

const url = 'https://maapes-lemea.vercel.app'
const W = 1500
const H = 2000
const CX = W / 2

/* ---------- QR ---------- */
const qr = QRCode.create(url, { errorCorrectionLevel: 'H' })
const N = qr.modules.size
const D = qr.modules.data
const QW = 440 // white card size
const QX = CX - QW / 2
const QY = 1300
const pad = 32
const avail = QW - pad * 2
const cell = avail / N
let qrRects = ''
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (D[r * N + c]) {
      const x = QX + pad + c * cell
      const y = QY + pad + r * cell
      qrRects += `<rect x="${x.toFixed(2)}" y="${y.toFixed(2)}" width="${(cell + 0.6).toFixed(2)}" height="${(cell + 0.6).toFixed(2)}" fill="#0b111b"/>`
    }
  }
}

/* ---------- faint math decorations ---------- */
const formulas = [
  [110, 430, -8, 'lim f(x) = L'],
  [1140, 360, 6, '∫ eˣ dx'],
  [120, 1150, 0, 'Σ n²'],
  [1180, 1120, -10, 'a² + b² = c²'],
  [180, 1700, 8, '√x'],
  [1160, 1720, -6, 'π r²'],
  [1220, 620, 4, 'x = x²'],
  [120, 760, -4, "f '(x)"],
]
let math = ''
for (const [x, y, rot, t] of formulas) {
  math += `<text x="${x}" y="${y}" transform="rotate(${rot} ${x} ${y})" fill="#e3b873" opacity="0.10" font-style="italic" font-size="46" font-family="Georgia, serif">${t}</text>`
}
// a couple of geometry shapes, faint
math += `<path d="M 250 560 L 470 560 L 470 380 Z" fill="none" stroke="#7fd6c2" stroke-width="3" opacity="0.10"/>`
math += `<path d="M 980 1560 C 1080 1480 1180 1640 1300 1500" fill="none" stroke="#7fd6c2" stroke-width="3" opacity="0.12"/>`
math += `<circle cx="300" cy="1500" r="60" fill="none" stroke="#e3b873" stroke-width="3" opacity="0.10"/>`

/* ---------- brand mark (rising arrow in gold square) ---------- */
const markX = CX - 30
const mark = `
<g transform="translate(${CX - 250} 120)">
  <rect x="0" y="0" width="74" height="74" rx="20" fill="url(#gold)"/>
  <g transform="translate(11 11) scale(1.3)">
    <polyline points="6,28 15,22 23,24 34,11" fill="none" stroke="#20160a" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M34 11 L27.5 11 M34 11 L34 17.5" stroke="#20160a" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="6" cy="28" r="2.4" fill="#20160a"/>
  </g>
  <text x="92" y="52" fill="#eef2f8" font-size="46" font-weight="700" font-family="Heebo, 'Segoe UI', Arial, sans-serif">מאפס<tspan fill="#e3b873" font-weight="800"> למאה</tspan></text>
</g>`

/* ---------- ribbon ---------- */
const ribbon = `
<g>
  <path d="M 360 1085 L 1140 1085 L 1180 1130 L 1140 1175 L 360 1175 L 320 1130 Z" fill="url(#gold)"/>
  <text x="${CX}" y="1144" text-anchor="middle" fill="#20160a" font-size="50" font-weight="800" font-family="Heebo, 'Segoe UI', Arial, sans-serif">שיעור ראשון ב-50% הנחה!</text>
</g>`

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b111b"/>
      <stop offset="0.55" stop-color="#0f2236"/>
      <stop offset="1" stop-color="#143245"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="38%" r="55%">
      <stop offset="0" stop-color="#e3b873" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#e3b873" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f0cb8e"/>
      <stop offset="1" stop-color="#e3b873"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${math}
  ${mark}

  <text x="${CX}" y="430" text-anchor="middle" fill="#ffffff" font-size="118" font-weight="800" font-family="Heebo, 'Segoe UI', Arial, sans-serif">שיעורים פרטיים</text>
  <text x="${CX}" y="560" text-anchor="middle" fill="#ffffff" font-size="118" font-weight="800" font-family="Heebo, 'Segoe UI', Arial, sans-serif">במתמטיקה</text>

  <rect x="${CX - 70}" y="615" width="140" height="6" rx="3" fill="url(#gold)"/>

  <text x="${CX}" y="760" text-anchor="middle" fill="#e9edf4" font-size="74" font-weight="700" font-family="Heebo, 'Segoe UI', Arial, sans-serif">עם המורה הנכון,</text>
  <text x="${CX}" y="855" text-anchor="middle" fill="#e3b873" font-size="74" font-weight="800" font-family="Heebo, 'Segoe UI', Arial, sans-serif">הכל אפשרי.</text>

  <g>
    <rect x="${CX - 200}" y="930" width="400" height="78" rx="39" fill="rgba(227,184,115,0.12)" stroke="#e3b873" stroke-width="2"/>
    <text x="${CX}" y="982" text-anchor="middle" fill="#f0cb8e" font-size="42" font-weight="600" font-family="Heebo, 'Segoe UI', Arial, sans-serif">לכיתות א׳ – ט׳</text>
  </g>

  ${ribbon}

  <rect x="${QX - 4}" y="${QY - 4}" width="${QW + 8}" height="${QW + 8}" rx="28" fill="#e3b873"/>
  <rect x="${QX}" y="${QY}" width="${QW}" height="${QW}" rx="24" fill="#ffffff"/>
  ${qrRects}

  <text x="${CX}" y="${QY + QW + 78}" text-anchor="middle" fill="#ffffff" font-size="50" font-weight="700" font-family="Heebo, 'Segoe UI', Arial, sans-serif">סרקו את הברקוד לתיאום שיחה</text>
  <text x="${CX}" y="${QY + QW + 140}" text-anchor="middle" fill="#e3b873" font-size="38" font-weight="500" font-family="Heebo, 'Segoe UI', Arial, sans-serif" direction="ltr">maapes-lemea.vercel.app</text>
</svg>`

fs.writeFileSync(path.join(__dirname, 'maapes-lemea-poster.svg'), svg)
console.log('✓ SVG poster saved')

/* ---------- rasterize to PNG ---------- */
try {
  const sharp = require('sharp')
  sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(__dirname, 'maapes-lemea-poster.png'))
    .then(() => console.log('✓ PNG poster saved'))
    .catch((e) => console.log('PNG failed: ' + e.message))
} catch (e) {
  console.log('sharp not available: ' + e.message)
}
