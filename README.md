# personal-ip-hub

Lyra Wang's public Personal IP / Digital Identity Hub — a static-first site presenting real work, working method, learning, writing, and journey to both people and machines.

## Current Status

- **Current phase:** Production baseline complete. Phase 2 (Content Architecture) is **deferred**.
- **Production:** deployed on Vercel → <https://lyrawang.bamamei.online>
- **CI:** CI Safety Gate runs `npm ci` → typecheck → build on every PR to `main`.
- **Phase 2 resume entry:** GitHub Issue #4 — Phase 2: Content Architecture.

## Current Implementation

Current implementation is an Astro static site.

Public content is currently split between:

- page-authored copy in `src/pages/**`
- typed local data in `src/data/**`

```
src/pages/**        routes (page-authored copy)
src/components/**   shared UI
src/layouts/**      page shell
src/data/**         typed local data
```

The current public project inventory SSOT is:
[`src/data/projects.ts`](src/data/projects.ts)

This is not yet the Phase 2 structured content system.

`content/**`, `publication_status`, the draft/review/published/archived rendering lifecycle,
Agent-owned content paths, and schema validation are **Phase 2 target architecture** and are
**not implemented yet**. Do not treat Target Architecture as current.

## Documentation

- Agent entry point (read first): [`AGENTS.md`](AGENTS.md)
- Architecture Pack v1: [`docs/01-product-charter.md`](docs/01-product-charter.md),
  [`docs/02-information-architecture.md`](docs/02-information-architecture.md),
  [`docs/03-content-model.md`](docs/03-content-model.md),
  [`docs/04-agent-ownership.md`](docs/04-agent-ownership.md),
  [`docs/05-discoverability-and-conversion.md`](docs/05-discoverability-and-conversion.md),
  [`docs/06-roadmap.md`](docs/06-roadmap.md)
- Phase status and critical path: [`docs/06-roadmap.md`](docs/06-roadmap.md)

## Validation

```
npm ci
npm run typecheck
npm run build
git diff --check
```

## Governance

- Product Owner decides public claims, positioning, featured content, and publication.
- Merge does not equal Publish.
- Private/internal evidence must not be committed to this public repository.
- Phase 2 starts only after an explicit Product Owner decision on Issue #4.
