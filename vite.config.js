import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // allow specific host
    allowedHosts: ['qz-vht0.onrender.com'],
  },
})
