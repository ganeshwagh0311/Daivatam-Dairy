import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: '.', // points to the folder containing index.html
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist'
  }
})
