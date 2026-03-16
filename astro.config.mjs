import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dothackvr.chat',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
