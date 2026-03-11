// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Ton nouveau domaine officiel
  site: 'https://ckittel.eu',
  
  // IMPORTANT : On met '/' car ton site est maintenant à la racine du domaine
  base: '/', 
  
  integrations: [tailwind()],
});
