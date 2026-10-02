import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  /**
   * Target public domain, frozen in Product Charter v1 §9.
   *
   * This is the canonical origin: canonical URLs, and later sitemap /
   * structured-data work, resolve against it.
   *
   * `base` is intentionally NOT set. The previous configuration pointed at a
   * GitHub Pages project path (https://lyrawang6688.github.io/personal-ip-hub)
   * while emitting absolute asset paths such as /favicon.svg and /_astro/*, which
   * would have resolved from the domain root and broken on that host.
   *
   * The production provider is now Vercel, and the site is served from the root of
   * the custom domain (https://lyrawang.bamamei.online). `base` therefore stays
   * unset and the build output remains rooted at `/`. If the site ever moves to a
   * path-prefixed host, set `base` at that point.
   */
  site: 'https://lyrawang.bamamei.online',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  // Emits sitemap-index.xml + sitemap-0.xml at build time. Kept at defaults:
  // no changefreq / priority / lastmod, and the 404 page is filtered out so the
  // sitemap lists only real public content routes.
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
