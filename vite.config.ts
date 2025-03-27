import { defineConfig } from 'vite'
import { createVuePlugin as vue } from 'vite-plugin-vue2'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
  }
})
