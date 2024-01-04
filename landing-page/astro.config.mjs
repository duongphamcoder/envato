import { defineConfig, sharpImageService } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  image: {
    domains: ['loremflickr', 'preview.colorlib'],
    service: sharpImageService(),
  },
});
