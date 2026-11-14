import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// User site (kaustavray21.github.io) is served from the domain root.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
