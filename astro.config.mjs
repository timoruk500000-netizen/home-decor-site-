import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://nestleddecor.com', // ← Change to your Netlify URL
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/contact-success'),
    }),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
  image: {
    domains: ['images.unsplash.com', 'm.media-amazon.com'],
  },
});
