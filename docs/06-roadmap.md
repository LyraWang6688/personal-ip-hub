# Personal IP Hub — Roadmap v1

## Phase 0 — Architecture Freeze

Status: current.

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

Reuse useful work from existing PR #1 where appropriate:
- Astro foundation;
- responsive layout;
- typography;
- design tokens;
- accessibility baseline;
- reusable components.

Adjust old IA to the new navigation:

- Work
- How I Work
- Learning
- Writing & Research
- Journey
- About

Home should become a shell for the new persuasion narrative.

Do not fill pages with fabricated placeholder content.

Exit criteria:
- navigation matches IA v1;
- shared page shells exist;
- build succeeds;
- mobile works;
- deployment strategy is consistent;
- design system is reusable.

## Phase 2 — Content Architecture

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

Start parallel content work after contracts are stable.

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

Deploy:

GitHub → Vercel or Cloudflare Pages → CDN → lyrawang.bamamei.online

No traditional server is required for the MVP.

## Phase 7 — Continuous Content Operations

After launch:

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

1. Merge Architecture Pack v1 after contract-hardening review passes.
2. Re-scope existing PR #1 from old Home implementation to Site Foundation.
3. Update navigation and page shells.
4. Introduce content architecture and publication controls.
5. Begin parallel Domain Agent content production.
6. Build pages from real content.
7. Add discoverability layer.
8. QA and launch custom domain.

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
