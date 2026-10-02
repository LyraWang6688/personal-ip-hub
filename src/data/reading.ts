export type ReadingType = 'book' | 'article' | 'paper' | 'report' | 'essay';
export type ReadingStatus = 'reading' | 'finished' | 'revisiting';

export interface ReadingItem {
  id: string;
  title: string;
  author: string;
  type: ReadingType;
  status: ReadingStatus;
  whyItMatters: string;
  relatedTopics: string[];
  relatedProjects: string[];
  externalLink?: string;
  date?: string;
}

/**
 * Reading is a subdomain of Learning (IA v1 §6), not a top-level domain.
 *
 * This array is intentionally empty. The previous build shipped three invented
 * `[Placeholder]` entries, which rendered as if they were real reading records on
 * the public homepage. No verified reading data exists yet, so nothing is
 * published here.
 *
 * TODO (Phase 3 / Reading Agent): populate with verified reading records under
 * `content/learning/reading/**`. The ReadingItem component is retained for that
 * work. Do not add placeholder rows — add real records or leave this empty.
 */
export const readingItems: ReadingItem[] = [];
