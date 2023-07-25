import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      hooks: '/src/hooks',
      parts: '/src/components/parts',
      ui: '/src/components/ui',
      utils: '/src/utils',
      lang: '/src/lang',
      layouts: '/src/layouts',
      icons: '/src/assets/icons',
      images: '/src/assets/images',
    }
  }
})