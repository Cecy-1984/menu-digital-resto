import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/menu-digital-resto/',
  plugins: [react()],
})