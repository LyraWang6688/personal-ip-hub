export interface NowTheme {
  id: string;
  title: string;
  description: string;
  practices: string[];
  relatedProject?: string;
}

/**
 * Publicly published "Now" directions.
 *
 * Scope is an explicit Product Owner decision: only directions with sustained
 * real practice are published. A direction that is not mature enough to show is
 * simply absent — it is not reworded until it sounds mature, and it is not
 * replaced with a broader investment / finance / research framing.
 *
 * Not published: "AI + Investing" — held back together with the Wealth
 * Management Hub project it referenced.
 */
export const nowThemes: NowTheme[] = [
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    description:
      'Through the Retail Operations System, continuing to understand what it takes to build software that lasts.',
    practices: [
      'Data structure design',
      'State Ownership',
      'Module boundaries',
      'Reliability',
      'QA',
      'Maintainability',
      'Product iteration',
    ],
    relatedProject: 'retail-operations-system',
  },
  {
    id: 'system-integration',
    title: 'System Integration',
    description:
      'Through the Meeting Intelligence Agent, deepening understanding of how systems talk to each other.',
    practices: [
      'Open API',
      'Authentication',
      'Events',
      'Callbacks',
      'Request / Response',
      'Data passing',
      'System node chains',
    ],
    relatedProject: 'meeting-intelligence-agent',
  },
  {
    id: 'ai-collaboration',
    title: 'AI Collaboration',
    description:
      'Continuously practicing how to work with AI as a real development partner, not just a tool.',
    practices: [
      'Multi-Agent collaboration',
      'Architect / Developer / Reviewer roles',
      'Context provision',
      'Contract definition',
      'AI-native product development',
    ],
  },
];
