# Personal IP Hub — Roadmap v1

## Phase Status Summary

| Phase | Name | Status |
| --- | --- | --- |
| Phase 0 | Architecture Freeze | **COMPLETE** — Architecture Pack v1 complete |
| Phase 1 | Site Foundation | **COMPLETE** — site built, CI Safety Gate active, production baseline deployed |
| Phase 2 | Content Architecture | **DEFERRED** — resume via GitHub Issue #4 |
| Phase 3 | Domain Content Population | Planned — not started |
| Phase 4 | Core Pages | Planned — not started |
| Phase 5 | Discoverability Foundation | Planned — baseline metadata + sitemap present; full layer future |
| Phase 6 | QA & Launch | Partially reached: production baseline is live; full publish-readiness QA is future |
| Phase 7 | Continuous Content Operations | Future — depends on Phase 2 |

Current implementation is `src/pages/**`, `src/components/**`, `src/data/**`, with
`src/data/projects.ts` as the public project SSOT. Phase 2 target capabilities are **not**
implemented. See [`AGENTS.md`](../AGENTS.md) for the current entry point.

## Phase 0 — Architecture Freeze

**Status: COMPLETE.**

Architecture Pack v1 is merged and the contracts are frozen. The goals below were the
freeze checklist and are all satisfied by `docs/01`–`docs/06`.

Goals:
- freeze Product Charter;
- freeze top-level IA;
- freeze content domains;
- freeze content contracts;
- freeze Agent Ownership;
- freeze Source-of-Truth boundaries;
- freeze Publication Lifecycle;
- freeze Evidence Safety / Visibility rules;
- freeze the minimum Language Contract;
- freeze Discoverability / Conversion principles.

Deliverable:
Architecture Pack v1.

Exit criteria:
- the team can explain what every page and Agent owns without ambiguity;
- no two Agents own the same content path;
- Work / Learning / Journey / Writing boundaries are explicit;
- Merge and Publish are separate states;
- evidence visibility is explicit;
- content-language rules are explicit enough for parallel Agent work.

## Phase 1 — Site Foundation

**Status: COMPLETE.**

Site Foundation is built against IA v1, the CI Safety Gate is active
(`.github/workflows/ci.yml`: `npm ci` → typecheck → build), and the production baseline is
deployed on Vercel at `https://lyrawang.bamamei.online`.

The notes below record how Phase 1 was executed. They are historical, not pending work.

Reused useful work from the earlier PR #1 where appropriate:
- Astro foundation;
- responsive layout;
- typography;
- design tokens;
- accessibility baseline;
- reusable components.

Navigation was adjusted to the new IA:

- Work
- How I Work
- Learning
- Writing & Research
- Journey
- About

Home became a shell for the persuasion narrative.

No fabricated placeholder content was added.

Exit criteria (all met):
- navigation matches IA v1;
- shared page shells exist;
- build succeeds;
- mobile works;
- deployment strategy is consistent;
- design system is reusable.

## Phase 2 — Content Architecture

**Status: DEFERRED.**

Phase 2 is **not started** and must not be started implicitly. Resume entry:
GitHub Issue **#4** (`Phase 2: Content Architecture`), only after an explicit Product Owner
decision. Everything below is **target architecture** for that phase — none of it exists in
the current implementation, and none of these paths may be treated as current paths.

Goal:
Move from developer-owned hard-coded page content to Agent-friendly structured content.

Target direction:

```
content/
├── profile/
├── work/
├── method/
├── learning/
├── writing/
│   ├── wechat/
│   ├── essays/
│   ├── research/
│   └── talks/
└── journey/
    ├── overall/
    ├── github/
    ├── wechat/
    ├── personal-ip/
    └── milestones/
```

Implement:
- schema validation;
- stable IDs;
- content loading;
- clear ownership paths;
- publication lifecycle;
- public rendering filter for `published`;
- evidence visibility rules;
- redaction-aware evidence handling;
- safe external referencing for private/internal evidence so sensitive artifacts never enter the public repository;
- homepage editorial config;
- language metadata where relevant.

Exit criteria:
A Domain Agent can add or update owned content without touching shared UI, and a merged draft cannot accidentally become public.

## Phase 3 — Domain Content Population

**Status: Planned — not started (blocked by Phase 2).**

Start parallel content work after Phase 2 contracts are stable.

Potential parallel workstreams:
- GitHub IP Agent → `content/journey/github/**`
- WeChat Agent → `content/journey/wechat/**` + `content/writing/wechat/**`
- Meeting Agent → its Work project directory
- Retail Agent → its Work project directory
- InvestDesk Agent → its Work project directory
- Reading Agent → `content/learning/reading/**`
- Research Agent → `content/writing/research/**`
- Product Owner / future Writing Agent → `content/writing/essays/**` + `content/writing/talks/**`

Each Agent works through narrow PRs.

Exit criteria:
At least the core homepage and key detail pages have real, reviewable content with publication state and public-safe evidence.

## Phase 4 — Core Pages

**Status: Planned — not started (blocked by Phase 2).**

Build full public pages from real content.

Priority:
1. Home
2. Work
3. Key Project Detail Pages
4. How I Work
5. Journey
6. About
7. Learning
8. Writing & Research

The exact order may change based on content readiness.

## Phase 5 — Discoverability Foundation

**Status: Planned — baseline metadata + sitemap present; full layer future.**
The current site has baseline metadata and a sitemap integration; the full list below is future work.

Implement and verify:
- canonical URLs;
- sitemap.xml;
- robots.txt;
- metadata;
- Person / ProfilePage structured data;
- Article / project structured data where appropriate;
- identity links;
- stable internal linking;
- language metadata where useful;
- exclusion of non-published content from normal indexing.

Goal:
Make the site understandable to both search engines and AI systems without exposing unapproved content.

## Phase 6 — QA & Launch

**Status: Partially reached.**
The production baseline is live on Vercel at `https://lyrawang.bamamei.online`.
The full review list below is future work for the post-Phase-2 content site.

Review:
- Product / UX
- Visual consistency
- Mobile
- Accessibility
- Content truthfulness
- Publication state
- Evidence visibility / redaction
- Broken links
- Build / deployment
- Structured data
- Indexability
- Performance

Deployment path (current, already in production):

GitHub → Vercel → CDN → lyrawang.bamamei.online

No traditional server is required.

## Phase 7 — Continuous Content Operations

**Status: Future — depends on Phase 2.**

After Phase 2 and the content migration:

```
Domain Agent
→ structured content update
→ draft / review
→ PR
→ validation
→ build / preview
→ human review
→ merge
→ deployment
→ public rendering only when publication_status == published
```

Important:

**Merge does not equal Publish.**

A merged `draft` or `review` remains non-public.

The website becomes a continuously maintained public evidence and identity system with human-controlled publication.

## Current Critical Path

1. Maintain the current production baseline (Vercel + `lyrawang.bamamei.online`) and keep the CI Safety Gate green.
2. Resume GitHub Issue #4 only when the Product Owner explicitly decides to start Phase 2.
3. Implement Phase 2 Content Architecture (structured `content/**`, contracts, publication controls).
4. Pilot structured content with one domain / project before any broad migration.
5. Validate **Merge ≠ Publish** end to end — a merged `draft` or `review` item stays non-public.
6. Only then expand to multi-Agent content operations.

No Phase 2 work is in flight today. Steps 3–6 are gated on step 2.

## Explicitly Deferred

Do not add yet unless a real requirement appears:
- database;
- CMS;
- admin backend;
- user login;
- comments;
- personalization;
- AI chatbot;
- complex analytics platform;
- traditional VPS / server management;
- full bilingual localization.

Smallest Sufficient Architecture remains the default.
