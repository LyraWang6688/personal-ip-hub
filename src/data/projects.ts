export type ProjectCategory = 'flagship-products' | 'ai-infrastructure';

export interface Project {
  id: string;
  name: string;
  /** Chinese alias. Rendered with an explicit lang attribute, not as UI language. */
  nameZh: string;
  tagline: string;
  problem: string;
  practice: string;
  currentStage: string;
  evidence: string;
  status: 'active' | 'iterating' | 'building';
  year?: string;
  /**
   * The Work domain groups projects into "Flagship Products" and "AI Infrastructure".
   *
   * TODO (Product Owner): assigning a project to a group is an editorial decision
   * and has not been made yet, so this is intentionally left undefined on every
   * record. The Work page renders both groups as structure and lists these records
   * under a separate "not yet classified" container. Do not guess a category here.
   */
  category?: ProjectCategory;
}

export const projects: Project[] = [
  {
    id: 'meeting-intelligence-agent',
    name: 'Meeting Intelligence Agent',
    nameZh: '会议分析智能体',
    tagline: 'A meeting analysis agent integrated with real collaboration systems.',
    problem:
      'Meetings generate decisions, action items, and context that are hard to capture, structure, and follow up on — especially across tools people already use every day.',
    practice:
      'Built and iterated a meeting analysis agent through at least two tracked phases. Integrated with Feishu (Lark) systems, practiced third-party Open API integration, studied official API documentation, and worked through authentication, interfaces, events, and node chains. Gradually formed an "official docs + AI" development approach.',
    currentStage: 'Active — ongoing iteration with real users.',
    evidence:
      'Real users / audience exists. Has gone through at least two phases of tracked iteration. Feishu system integration is complete.',
    status: 'active',
  },
  {
    id: 'retail-operations-system',
    name: 'Retail Operations System',
    nameZh: '进销存管理系统',
    tagline:
      'A multi-year real-world retail operations system — a practice ground for product engineering.',
    problem:
      'A physical retail business needs sales, purchasing, and inventory to work together reliably over years — not as a one-off CRUD exercise, but as a system that can grow, be maintained, and be trusted.',
    practice:
      'Continuously practiced data structure design, began thinking about State Ownership and module boundaries, introduced Multi-Agent collaborative development with Architect / Developer / Reviewer / QA roles, and started paying attention to reliability, maintainability, and iterability.',
    currentStage: 'Ongoing — multi-year project, continuously evolving.',
    evidence:
      'A real, multi-year project serving an actual retail business scenario. Multi-Agent collaboration (Architect / Developer / Reviewer / QA) is being practiced.',
    status: 'iterating',
  },
  {
    id: 'wealth-management-hub',
    name: 'Wealth Management Hub',
    nameZh: '财富中台',
    tagline:
      'A personal investment research and decision-support system built with AI tools and skills.',
    problem:
      'Personal investing requires continuous information gathering, research, analysis, and decision support — work that is repetitive, scattered, and hard to sustain over time without a system.',
    practice:
      'Uses existing AI tools + skills for information acquisition, research organization, analysis, and decision support. Explores how AI can participate in long-term information processing, research, and personal decision systems. Built for Lyra\'s own real investment management.',
    currentStage: 'Building — continuously under construction.',
    evidence:
      'Serves Lyra\'s own real investment management. AI tools + skills are actively used in the workflow.',
    status: 'building',
  },
  {
    id: 'wechat-publishing-system',
    name: 'WeChat Publishing System',
    nameZh: '微信公众号内容与发布系统',
    tagline:
      'An AI-native publishing workflow that reduces the friction of public output.',
    problem:
      'Publishing written work publicly involves a chain of discussion, drafting, formatting, version control, platform submission, review, and release — each step adds friction that stops ideas from being shared.',
    practice:
      'Built a pipeline: ChatGPT for content discussion and crystallization → formatted files → GitHub for version control → automated entry into WeChat Official Account backend → human review → publication. Keeps human review in the loop by design.',
    currentStage: 'Active — AI-native publishing workflow in use.',
    evidence:
      'Real pipeline from ChatGPT through GitHub to WeChat Official Account backend. Human review is intentionally retained.',
    status: 'active',
  },
];
