# personal-ip-hub

Lyra Wang's public Personal IP / Digital Identity Hub — a static-first site presenting real work, working method, learning, writing, and journey to both people and machines.

## Current Status

- **Current phase:** Production baseline complete. Phase 2 (Content Architecture) is **deferred**.
- **Production:** deployed on Vercel → <https://lyrawang.bamamei.online>
- **CI:** CI Safety Gate runs `npm ci` → typecheck → build on every PR to `main`.
- **Phase 2 resume entry:** GitHub Issue #4 — Phase 2: Content Architecture.

## Current Implementation

Astro static site, with public content currently defined in typed local data (not a structured content system):

```
src/pages/**        routes
src/components/**   shared UI
src/layouts/**      page shell
src/data/**         current content data
```

- Public project inventory SSOT: [`src/data/projects.ts`](src/data/projects.ts)

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
