import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "packages/index.tsx",
      name: "titan",
      formats: ["umd"]
    },
    rollupOptions: {
      external: ['react', "react-dom"],
      output: {
        globals: {
          react: "React"
        }
      }
    }
  }
})
