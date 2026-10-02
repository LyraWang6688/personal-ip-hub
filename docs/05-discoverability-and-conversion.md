# Personal IP Hub — Discoverability & Conversion v1

## 1. Two-Sided Product Goal

The website must work for both:
- machines;
- people.

Every major page should be evaluated through both lenses.

## 2. Discoverability

Goal:

Can AI systems, search engines, and agents find and accurately understand Lyra Wang?

### Requirements

#### Stable public identity
Maintain a canonical About / Profile page describing Lyra Wang.

#### Stable URLs
Important projects, writing, research, and journey pages should have durable URLs.

#### Clear page titles and descriptions
Each important page should clearly identify:
- entity;
- topic;
- relationship to Lyra.

#### Semantic HTML
Use meaningful headings, landmarks, article structure, links, and metadata.

#### Structured data
When appropriate, implement Schema.org / JSON-LD such as:
- Person
- ProfilePage
- Article
- CreativeWork
- SoftwareSourceCode or other suitable project entities

Use only accurate, supportable structured data.

#### Identity linking
Use `sameAs` or equivalent links for confirmed public profiles such as GitHub.

#### Crawlability
Provide:
- sitemap.xml
- robots.txt
- canonical URLs
- internal links
- accessible static content

Do not hide core facts behind client-only rendering when avoidable.

## 3. First-Party Fact Source

The official website should gradually become the clearest first-party public source for:
- identity;
- current focus;
- projects;
- methods;
- writing;
- journey;
- public profiles.

Claims should link to supporting evidence.

## 4. Evidence Strategy

Prefer evidence such as:
- GitHub repository;
- PR;
- Release;
- public demo;
- screenshot;
- published article;
- public research output;
- official external reference.

Evidence should support the claim rather than merely decorate the page.

### Evidence Safety Contract

Evidence is evaluated on two separate dimensions:

1. **Verification** — does it support the claim?
2. **Visibility** — is it safe and appropriate to publish?

Rule:

**Verified Evidence ≠ Public Evidence.**

Visibility values:

- private
- internal
- public

Before evidence becomes public, check for:
- secrets and tokens;
- credentials;
- private URLs;
- private repository information;
- personal email / phone / addresses;
- customer or user data;
- internal business data;
- confidential project information;
- screenshots requiring redaction;
- third-party material that should not be republished.

If redaction is required, publish only the redacted or public-safe representation.

The Product Owner is the final authority for public publication of sensitive evidence.

## 5. Publication & Indexability

Only content with `publication_status == published` should be part of normal public rendering and indexing.

Rules:

- `draft` → not public.
- `review` → not public.
- `published` → eligible for public rendering and indexing.
- `archived` → not treated as current; may be exposed only through an intentional archive view.

Merge does not equal Publish.

A content change can exist in the repository without being discoverable by search engines or visitors.

## 6. Conversion

Goal:

When a human finds Lyra, do they understand her value and want to continue?

Target path:

Find → Understand → Trust → Prefer → Act

## 7. Human Persuasion Layers

### Understand
Clearly answer:
- who she is;
- what she does;
- what problems she cares about.

### Trust
Show:
- real projects;
- evidence;
- decisions;
- evolution;
- learning;
- limitations where relevant.

### Prefer
Help visitors feel:
- her way of working is distinctive;
- her thinking is useful;
- her values and approach fit the visitor's needs.

### Act
Give appropriate next steps:
- explore a project;
- read an article;
- view GitHub;
- follow public writing;
- contact;
- collaborate.

## 8. Value Proposition

Avoid generic claims such as:
- "AI expert"
- "innovative thinker"
- "passionate learner"

Prefer outcome-oriented statements grounded in real work.

Possible value themes must be validated by evidence before public use, for example:
- turning ambiguous real-world problems into structured product paths;
- integrating AI into real workflows rather than treating it as a chat interface;
- turning project practice into reusable knowledge and systems.

The final value proposition remains a Product Owner decision.

## 9. Page-Level Test

For every major public page, ask:

### Machine Test
- What entity is this page about?
- What facts are stated?
- Which are current?
- What evidence supports them?
- What related entities exist?
- Is the URL stable?
- Is this content actually approved for public indexing?

### Human Test
- Why should I care?
- What did Lyra actually do?
- What makes this credible?
- What did she learn?
- What value might this create for me?
- What should I do next?

## 10. Content Quality Rule

Do not optimize for AI search by producing low-value keyword content.

Prioritize:
- original first-party information;
- clear facts;
- useful analysis;
- durable pages;
- evidence;
- external references when appropriate;
- consistent identity across public channels.

## 11. Launch Baseline

Before public launch, verify:
- custom domain works;
- HTTPS works;
- canonical URLs are correct;
- sitemap exists;
- robots.txt is valid;
- core pages are indexable;
- only `published` content is included in normal public rendering;
- private / internal evidence cannot leak into the public build;
- About/Profile page is complete;
- key projects have independent URLs;
- structured data validates;
- public identity links are consistent;
- no visible placeholders remain on important pages.
