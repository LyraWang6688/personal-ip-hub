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

// PLACEHOLDER: No real reading data has been confirmed yet.
// These entries are placeholders to demonstrate the Reading section structure.
// Replace with Lyra's actual reading before launch.
export const readingItems: ReadingItem[] = [
  {
    id: 'placeholder-1',
    title: '[Placeholder] Title to be confirmed',
    author: '[Author to be confirmed]',
    type: 'book',
    status: 'reading',
    whyItMatters:
      'Placeholder — this space will show why Lyra is reading this now and what ideas are staying with her. No real reading data has been confirmed yet.',
    relatedTopics: ['Topic TBD'],
    relatedProjects: [],
  },
  {
    id: 'placeholder-2',
    title: '[Placeholder] Title to be confirmed',
    author: '[Author to be confirmed]',
    type: 'article',
    status: 'reading',
    whyItMatters:
      'Placeholder — a short reflection on what is shaping her thinking right now. To be replaced with real content.',
    relatedTopics: ['Topic TBD'],
    relatedProjects: [],
  },
  {
    id: 'placeholder-3',
    title: '[Placeholder] Title to be confirmed',
    author: '[Author to be confirmed]',
    type: 'book',
    status: 'revisiting',
    whyItMatters:
      'Placeholder — revisiting an earlier read with new context. To be replaced with real content.',
    relatedTopics: ['Topic TBD'],
    relatedProjects: [],
  },
];
