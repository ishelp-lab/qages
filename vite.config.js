import { defineConfig } from 'vite'

export default defineConfig({
  // Garante que o build seja feito a partir da raiz do projeto
  root: '.',
  build: {
    outDir: 'dist',
    // Não falhar em warnings durante o build
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignorar warnings de módulos externos (ex: Tailwind CDN)
        if (warning.code === 'UNRESOLVED_IMPORT') return
        warn(warning)
      }
    }
  }
})
