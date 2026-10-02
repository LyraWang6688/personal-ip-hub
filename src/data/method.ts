/**
 * Method domain data (IA v1 §5).
 *
 * Single source of truth for the AI-native workflow, shared by Home (which shows
 * a preview of the steps) and How I Work (which shows the steps and the
 * practices). Previously both pages each declared their own copy of the same
 * facts, which is exactly the duplicated-truth pattern the Source-of-Truth rules
 * prohibit.
 *
 * Steps and practices are unchanged in content and order — this is a
 * de-duplication, not a content edit.
 *
 * TODO (Phase 2): deliberately a small data module, not a method content schema.
 * The full Method Contract belongs to Phase 2 Content Architecture.
 */

export const aiWorkflowSteps: string[] = [
  'Problem Framing',
  'Product / Architecture',
  'AI Developer',
  'Review / QA',
  'Runtime',
  'Feedback',
  'Iteration',
];

export const aiPractices: string[] = [
  'ChatGPT for problem framing, product and architecture discussion',
  'Codex / AI Developer for concrete implementation',
  'Independent Reviewer / QA for review and quality assurance',
  'Multi-Agent collaboration with defined roles',
  'Official API documentation + clear context + module boundaries',
  'Runtime verification of real results, then iteration on feedback',
];
