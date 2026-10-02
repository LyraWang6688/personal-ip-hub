# AGENTS.md — Current Agent Entry

This file is the single Current Agent Entry for this repository.

Read this file first. It describes what is true **now**. Anything not described here
as current is either Target Architecture (planned) or Historical Truth (superseded).

## Repository Identity

- Canonical repo: `LyraWang6688/personal-ip-hub`
- Product: public Personal IP / Digital Identity Hub
- Owner / final authority: Product Owner (Lyra Wang)

## Current State

- Architecture Pack v1 — **complete** (`docs/01`–`docs/06`)
- Site Foundation — **complete** (`src/pages`, `src/components`, `src/layouts`)
- CI Safety Gate — **active** (`.github/workflows/ci.yml`: `npm ci` → typecheck → build)
- Production — **deployed on Vercel**
- Custom domain — `https://lyrawang.bamamei.online`
- Phase 2 Content Architecture — **DEFERRED**
- Phase 2 resume entry — GitHub Issue **#4** (`Phase 2: Content Architecture`)

Phase 2 does not start until Issue #4 is explicitly resumed by the Product Owner.

## Current Architecture

The implemented architecture today is:

```
src/pages/**        public routes (Astro pages)
src/components/**   shared UI components
src/layouts/**      page shell
src/data/**         typed local data used by the pages
```

- Current public project SSOT: `src/data/projects.ts`
- Current data files: `src/data/projects.ts`, `method.ts`, `now.ts`, `navigation.ts`, `evidence-channels.ts`
- There is **no** `content/**` runtime, no content schema validation, and no publication-status
  runtime enforcement in the current implementation.

## Current vs Target Truth

`docs/03-content-model.md`, `docs/04-agent-ownership.md`, and the Phase 2 sections of
`docs/06-roadmap.md` describe **Phase 2 Target Architecture**. None of the following exists
in the current implementation and none of it may be treated as current paths or current runtime:

- `content/**` as a structured content source
- `publication_status` (`draft` / `review` / `published` / `archived`)
- publication lifecycle and public rendering filter
- Agent-owned content directories (`content/journey/github/**`, `content/writing/wechat/**`, …)
- schema validation for structured content
- evidence visibility / redaction runtime enforcement
- stable-ID cross-domain references

These files are valid contracts for Phase 2. They are **not** current execution instructions.

## Current Truth Priority

When sources disagree, trust them in this order:

1. Actual code on current `main`
2. `AGENTS.md` (this file)
3. Current-state documents (`README.md`, status sections of `docs/**`)
4. Architecture Pack (`docs/01`–`docs/06`) as design contracts
5. Historical PRs, issues, and older phase wording

Current code plus this Current Agent Entry win over older prose. If a conflict is found,
**report it and fix the document** — never silently ignore it, and never "fix" it by
changing public content or code scope without approval.

## Ownership / Safety

- Product Owner decides public claims, positioning, featured content, and publication.
- Agents must not publish unapproved personal facts or value claims.
- Private / internal evidence must not be placed in this public repository.
- Do not start Phase 2 work without an explicit Product Owner decision on Issue #4.
- Do not treat Target paths as existing paths, and do not create them "to match the docs".
- Do not modify shared UI, deployment config, or another domain's Source of Truth in a
  docs-scoped change.
- Archived / retired items are history: do not delete historical evidence, and do not
  re-publish a retired project merely because it appears in an architecture example.
- Merge ≠ Publish (a Phase 2 principle, preserved here as a governance rule).

## Validation

Run before claiming work is done:

```
npm ci
npm run typecheck
npm run build
git diff --check
```

Also confirm `git diff --name-status main...HEAD` matches the intended write scope.

## Phase 2

Phase 2 — Content Architecture is deferred. Resume only via GitHub Issue #4, after an
explicit Product Owner decision. Until then, the current production baseline is maintained
as-is and no structured content system is introduced.

See `docs/06-roadmap.md` for the phase status table and the current critical path.
