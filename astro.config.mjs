import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://webtools-6bz.pages.dev',
  integrations: [sitemap()],
});
