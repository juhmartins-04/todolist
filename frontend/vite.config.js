import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // agora você pode usar "@/components/..."
    },
  },
  server: {
    port: 5173,
    open: true, // abre o navegador automaticamente
  },
})
