const QRCode = require('qrcode')
const fs = require('fs')
const path = require('path')

const url = 'https://maapes-lemea.vercel.app'
const outDir = __dirname

const opts = {
  errorCorrectionLevel: 'H',
  margin: 2,
  color: { dark: '#0b111b', light: '#ffffff' },
}

// SVG — vector, perfect for print/posters at any size
QRCode.toString(url, { type: 'svg', ...opts }, (err, svg) => {
  if (err) throw err
  fs.writeFileSync(path.join(outDir, 'maapes-lemea-qr.svg'), svg)
  console.log('✓ SVG saved')
})

// PNG — high resolution (2048px) for general use
QRCode.toFile(
  path.join(outDir, 'maapes-lemea-qr.png'),
  url,
  { ...opts, width: 2048 },
  (err) => {
    if (err) throw err
    console.log('✓ PNG (2048px) saved')
  }
)
