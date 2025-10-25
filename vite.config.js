import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ IMPORTANT FIX
export default defineConfig({
  plugins: [react()],
  base: '/carrental-frontend/', // 👈 must match your Tomcat subfolder name
})
