export interface NavItem {
  label: string;
  href: string;
}

/**
 * Primary navigation — Information Architecture v1.
 *
 * Home is reached through the Lyra Wang brand / logo and is intentionally not a
 * nav item. `/now` exists as a supporting page but is not part of primary
 * navigation either.
 *
 * Labels are English-only: the Language Contract specifies an English-first UI,
 * and keeping navigation in one language avoids a desktop/mobile divergence and
 * removes the need for per-item language annotation.
 */
export const navigation: NavItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'How I Work', href: '/how-i-work' },
  { label: 'Learning', href: '/learning' },
  { label: 'Writing & Research', href: '/writing' },
  { label: 'Journey', href: '/journey' },
  { label: 'About', href: '/about' },
];
