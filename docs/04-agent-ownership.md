# Personal IP Hub — Agent Ownership v1

## 1. Principle

Agents own content domains, not arbitrary pages.

No Agent should modify shared UI, site architecture, or another domain's Source of Truth unless explicitly assigned.

This avoids:
- conflicting edits;
- duplicated facts;
- homepage competition;
- shared-state ambiguity;
- accidental product drift.

## 2. Product Owner

Owner:
Lyra Wang

Responsible for:
- final positioning;
- what the website should communicate;
- homepage featured selection;
- public claims;
- identity language;
- value proposition;
- publication approval;
- release approval.

The Product Owner is the final authority for personal facts, editorial priority, and whether content is appropriate for public publication.

## 3. Product / Solution Architect

Responsible for:
- product framing;
- information architecture;
- content contracts;
- state ownership;
- integration strategy;
- architecture review;
- scope control;
- critical path;
- handoff rules.

Does not automatically own implementation.

## 4. Site Owner Agent

Responsible for:
- Astro / site framework;
- shared components;
- layout;
- design system;
- accessibility;
- routing;
- static build;
- content schemas;
- validation;
- publication-state filtering;
- evidence-visibility enforcement;
- deployment;
- structured data implementation.

Allowed areas may include:

```
src/
public/
config/
schemas/
scripts/
```

Should not:
- invent personal facts;
- invent project outcomes;
- rewrite domain content without review;
- publish `draft`, `review`, `private`, or `internal` content;
- decide which project is "most important" without Product Owner direction.

## 5. GitHub IP Agent

Owns:
- GitHub snapshots;
- repository statistics;
- GitHub growth timeline;
- GitHub learning path;
- repository governance evidence;
- PR / Release / CI evidence.

Primary content area:

```
content/journey/github/**
```

May propose verified GitHub evidence for project records through a defined workflow.

Should not:
- redesign pages;
- modify shared components;
- define overall personal identity;
- overwrite project narratives owned by Project Agents;
- publish evidence that is not explicitly public-safe;
- commit private/internal evidence or sensitive metadata into the public repository.

## 6. WeChat Agent

Owns:
- WeChat article records;
- WeChat growth journey;
- publishing milestones;
- publishing workflow evidence.

Primary content areas:

```
content/journey/wechat/**
content/writing/wechat/**
```

Should not:
- modify `content/writing/research/**`;
- modify `content/writing/essays/**`;
- modify `content/writing/talks/**`;
- modify Work project content outside the WeChat publishing project without approval;
- modify shared site UI.

## 7. Writing Owner

Owner:
Product Owner until a dedicated Writing Agent is explicitly assigned.

Owns:

```
content/writing/essays/**
content/writing/talks/**
```

Responsible for:
- essays;
- public talks / sharing records;
- outward-facing non-WeChat writing assets.

A future dedicated Writing Agent may maintain these paths, but Product Owner remains final publication authority.

## 8. Project Agents

Each Project Agent owns only its project content.

Example:

```
content/work/projects/feishu-retail-ops/**
content/work/projects/meeting-intelligence-agent/**
content/work/projects/investdesk/**
```

Responsible for:
- facts;
- context;
- key decisions;
- evolution;
- current state;
- lessons;
- evidence proposals.

Should not:
- modify other projects;
- modify shared UI;
- promote itself to homepage;
- invent impact or metrics;
- expose non-public evidence.

## 9. Reading Agent

Owns:

```
content/learning/reading/**
```

Responsible for:
- verified reading records;
- reflections;
- related topics;
- related projects.

Should not fabricate reading status, quotes, opinions, or dates.

## 10. Research Agent

Owns:

```
content/writing/research/**
```

Responsible for:
- research outputs;
- research questions;
- summaries;
- published or publication-ready research evidence.

Should not:
- modify WeChat, essay, or talk content;
- convert unverified drafts into public claims without Product Owner approval.

## 11. Personal IP / Journey

Owner:
Product Owner

Maintainer:
Personal IP / Journey Agent

Maintained content areas:

```
content/journey/overall/**
content/journey/personal-ip/**
content/journey/milestones/**
```

The Maintainer may organize cross-domain milestones and personal-IP evolution, but the Product Owner decides:
- which milestones matter;
- how personal evolution is framed;
- whether an item is public.

Journey should reference evidence and Source-of-Truth records from other domains rather than duplicate their detailed narratives.

## 12. Homepage Ownership

Homepage is editorial state.

Only the Product Owner or explicitly delegated Site/Product owner decides:
- featured projects;
- featured writing;
- section order;
- value proposition;
- CTA priority.

Domain Agents submit content.

They do not self-promote content onto the homepage.

## 13. Publication Ownership

Publication is a separate decision from content creation.

Rules:

- Domain Agents may create or update `draft` content.
- Reviewers may move content into `review` when it is ready for editorial review.
- Product Owner approval is required for `published` status on personal claims, positioning, featured content, and sensitive evidence.
- `archived` content should not be treated as current.
- Merge does not equal Publish.

## 14. PR Rules for Content Agents

A content Agent should:
1. modify only its owned content path;
2. keep each PR narrowly scoped;
3. include evidence references where appropriate;
4. classify evidence visibility;
5. never commit sensitive private/internal evidence to the public repository; use only a safe reference when needed;
6. avoid unrelated formatting or component changes;
7. pass schema validation;
8. pass site build;
9. preserve publication state;
10. request review before public publication.

## 15. Shared State / Single Source of Truth

Single Source of Truth rules:

- Personal identity → `content/profile/**`
- Project facts → that project's owned `content/work/projects/<project-id>/**`
- Learning / reading / learning notes → `content/learning/**`
- GitHub metrics and GitHub journey → `content/journey/github/**`
- WeChat journey → `content/journey/wechat/**`
- WeChat writing → `content/writing/wechat/**`
- Essays / talks → `content/writing/essays/**`, `content/writing/talks/**`
- Research outputs → `content/writing/research/**`
- Personal-IP / overall milestones → `content/journey/personal-ip/**`, `content/journey/overall/**`, `content/journey/milestones/**`
- Homepage editorial selection → dedicated config owned by Product Owner / Site Owner

Semantic boundary:

- Work = where it happened.
- Learning = what was learned.
- Journey = when meaningful change happened.
- Writing & Research = what was formed for public expression.

No duplicate manual truth should be maintained in multiple domains when it can be referenced through stable IDs.

## 16. Language Ownership

The Site Owner owns UI-language consistency.

Domain Agents may preserve the original language of their content.

Agents must not automatically translate content and overwrite the original Source of Truth.

Full bilingual localization is deferred until explicitly approved.
