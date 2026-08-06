import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://webtools.pages.dev',
  integrations: [sitemap()],
});
