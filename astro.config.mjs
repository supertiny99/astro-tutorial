// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  base: '/astro-tutorial',
  site: 'https://supertiny99.github.io/astro-tutorial',
  integrations: [preact()]
});