export type FootprintType = 'github' | 'writing' | 'project' | 'talk' | 'other';

export interface Footprint {
  id: string;
  label: string;
  description: string;
  url?: string;
  type: FootprintType;
}

export const footprints: Footprint[] = [
  {
    id: 'github',
    label: 'GitHub',
    description: 'Code, projects, and commit history over time.',
    url: 'https://github.com/LyraWang6688',
    type: 'github',
  },
  {
    id: 'wechat',
    label: 'WeChat Official Account',
    description:
      'Published writing — an AI-native publishing workflow with human review.',
    // URL placeholder: actual WeChat account link to be confirmed.
    type: 'writing',
  },
  {
    id: 'projects',
    label: 'Public Projects',
    description:
      'Real projects built and iterated over time — with evidence, not just claims.',
    url: '/projects',
    type: 'project',
  },
];
