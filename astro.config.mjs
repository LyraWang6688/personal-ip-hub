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
   * would have resolved from the domain root and broken on that host. The
   * deployment provider is not frozen yet (Vercel or Cloudflare Pages), so the
   * build directory stays at the domain root and remains portable between
   * providers. If a path-prefixed host is ever chosen, set `base` at that point.
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
