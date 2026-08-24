// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://burgas2027guide.com',

  // English stays at the root (/); Russian and Bulgarian are prefixed
  // (/ru/, /bg/, /de/). Only the four commercially important pages are translated
  // so far — see LOCALIZED_ROUTES in src/i18n/ui.ts.
  i18n: {
    locales: ['en', 'ru', 'bg', 'de'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ru: 'ru', bg: 'bg', de: 'de' },
      },
    }),
  ],
});