import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // מאפשר טעינה דרך מנהרות ציבוריות (cloudflare/ngrok) בזמן פיתוח
    allowedHosts: true,
  },
})
