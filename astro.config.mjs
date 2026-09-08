import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dominio di produzione (aggiornare se cambia in fase di deploy)
export default defineConfig({
  site: 'https://impresaippolito.it',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // qualità/formati gestiti per-immagine nei componenti (astro:assets)
  },
});
