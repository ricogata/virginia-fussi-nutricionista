import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base` must match the GitHub repository name so asset paths resolve on GitHub Pages:
// https://<usuario>.github.io/virginia-fussi-nutricionista/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/virginia-fussi-nutricionista/',
})
