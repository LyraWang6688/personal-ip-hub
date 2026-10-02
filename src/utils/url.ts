/**
 * URL helpers shared by navigation and metadata.
 *
 * The site is generated with `build.format: 'directory'`, so a built page can
 * be reached through both `/work` and `/work/`. Any comparison between a
 * navigation href and the current pathname must therefore ignore the trailing
 * slash, otherwise the active-page state silently fails on every subpage.
 */

/** Strip trailing slashes, keeping the root path as `/`. */
export function normalizePath(pathname: string): string {
  if (!pathname) return '/';
  const stripped = pathname.replace(/\/+$/, '');
  return stripped === '' ? '/' : stripped;
}

/** True when `href` points at the page currently being rendered. */
export function isCurrentPath(currentPathname: string, href: string): boolean {
  return normalizePath(currentPathname) === normalizePath(href);
}
