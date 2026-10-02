# Personal IP Hub — Agent Ownership v1

## 1. Principle

Agents own content domains, not arbitrary pages.

No Agent should modify shared UI, site architecture, or another domain's source of truth unless explicitly assigned.

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
- release approval.

The Product Owner is the final authority for personal facts and editorial priority.

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

May contribute verified GitHub evidence to project content through a defined workflow.

Should not:
- redesign pages;
- modify shared components;
- define overall personal identity;
- overwrite project narratives owned by Project Agents.

## 6. WeChat / Public Writing Agent

Owns:
- WeChat article records;
- WeChat growth journey;
- publishing milestones;
- representative writing assets;
- publishing workflow evidence.

Primary content areas:

```
content/journey/wechat/**
content/writing/**
```

Should not:
- modify Work project content outside the WeChat publishing project without approval;
- modify shared site UI.

## 7. Project Agents

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
- evidence.

Should not:
- modify other projects;
- modify shared UI;
- promote itself to homepage;
- invent impact or metrics.

## 8. Reading Agent

Owns:

```
content/learning/reading/**
```

Responsible for:
- verified reading records;
- reflections;
- related topics;
- related projects.

Should not fabricate reading status, quotes, or opinions.

## 9. Research Agent

Owns:

```
content/writing/research/**
```

Responsible for:
- research outputs;
- research questions;
- summaries;
- published or public evidence.

Should not convert unverified drafts into public claims without approval.

## 10. Personal IP / Journey Agent

May own:

```
content/journey/overall/**
content/journey/personal-ip/**
content/journey/milestones/**
```

Responsible for cross-domain milestones and personal-IP evolution.

Should reference evidence from source domains rather than duplicate facts manually where avoidable.

## 11. Homepage Ownership

Homepage is editorial state.

Only the Product Owner or explicitly delegated Site/Product owner decides:
- featured projects;
- featured writing;
- section order;
- value proposition;
- CTA priority.

Domain Agents submit content.

They do not self-promote content onto the homepage.

## 12. PR Rules for Content Agents

A content Agent should:
1. modify only its owned content path;
2. keep each PR narrowly scoped;
3. include evidence;
4. avoid unrelated formatting or component changes;
5. pass schema validation;
6. pass site build;
7. request review before merge.

## 13. Shared State

Single Source of Truth rules:

- Personal identity → `content/profile/**`
- Project facts → that project's owned content directory
- GitHub metrics → `content/journey/github/**`
- Writing metadata → `content/writing/**`
- Reading records → `content/learning/reading/**`
- Homepage editorial selection → dedicated config owned by Product Owner / Site Owner

No duplicate manual truth should be maintained in multiple domains when it can be referenced.
