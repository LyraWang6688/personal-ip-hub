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

/**
 * Publicly published project records.
 *
 * Scope is an explicit Product Owner decision: only projects that are actually
 * built and iterated are published here, in this order. Records that are still at
 * a planning / idea stage are not published — not worded around, simply absent.
 *
 * Do not add a project without Product Owner approval, and do not add impact
 * claims (user counts, ROI, efficiency, revenue, investment return, audience
 * size, awards). `currentStage` is the single source of truth for how far along a
 * project is, and it states durable facts rather than a momentary status. There is
 * deliberately no separate status / maturity / lifecycle field — a second state
 * field would duplicate that source of truth and expire quickly.
 *
 * Not published: Wealth Management Hub — reviewed and held back as not yet at a
 * stable iteration stage. It is deliberately absent from the public source rather
 * than kept as a dormant record or a hidden/private data source.
 *
 * Archived: WeChat Publishing System (wechat-article-pilot) was removed after that
 * project was archived. The record was deleted rather than flagged — public scope
 * needs no archive state until a page actually renders one.
 */
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
    currentStage: 'Used in a real collaboration context and iterated through multiple phases.',
    evidence:
      'Integrated with Feishu (Lark) systems, across multiple tracked phases of iteration.',
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
    currentStage: 'Multi-year project, continuously evolving.',
    evidence:
      'A real, multi-year project serving an actual retail business scenario. Multi-Agent collaboration (Architect / Developer / Reviewer / QA) is being practiced.',
  },
];
