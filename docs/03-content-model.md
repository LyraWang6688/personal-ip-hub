# Personal IP Hub — Content Model & Contracts v1

## 1. Principle

Content must be structured independently from page layout.

Domain Agents produce structured content.

The Site Owner renders that content into pages.

A content producer should not need to redesign UI to publish a new asset.

## 2. Common Content Contract

Every important content asset should try to preserve:

### Fact
What happened?

### Value
Why does it matter?

### Decision
What important judgment was made?

### Evidence
How can the claim be verified?

### Learning
What changed in Lyra's understanding?

### Relevance
Why should another person care?

Not every asset needs all six fields, but this is the default mental model.

## 3. Publication Lifecycle

Truth and publication are separate states.

A content asset may be accurate and useful without being ready for public display.

Public-facing content should support:

- publication_status
- published_at
- updated_at
- last_verified_at

Allowed publication states:

- draft
- review
- published
- archived

Rules:

- **Merge does not equal Publish.**
- Content merged into the repository may remain `draft` or `review`.
- The public website should render only `published` content by default.
- `archived` content remains part of history but should not appear as current public content unless a page explicitly supports archives.
- Product Owner approval is required before a personal claim, value proposition, or sensitive evidence becomes `published`.

## 4. Evidence Contract

Verified evidence and public evidence are not the same state.

An evidence object should support, where relevant:

- type
- source
- url
- verified
- visibility
- redaction_required
- public_url
- last_verified_at

Allowed visibility values:

- private
- internal
- public

Rules:

- **Verified Evidence ≠ Public Evidence.**
- Only evidence approved as `public` may be rendered publicly.
- If `redaction_required == true`, the public site must use a redacted artifact or public-safe representation.
- Private or internal evidence may support editorial verification without being exposed.
- Secrets, credentials, personal information, customer data, private repository data, internal URLs, and confidential business information must not be published.

## 5. Cross-Domain Source-of-Truth Contract

Use the following ownership of meaning:

- **Work** → where the real project activity happened.
- **Learning** → what was learned and how understanding changed.
- **Journey** → when an important change or milestone happened.
- **Writing & Research** → what was formed into an outward-facing idea, argument, research output, or public piece.

Cross-domain relationships should use references such as:

- related_projects
- related_learning
- related_writing
- related_journey
- evidence

Prefer references over copying the same narrative into multiple domains.

## 6. Project Contract

Each major project should support:

- id
- title
- title_zh / title_en when useful
- language
- short_summary
- category
- status
- publication_status
- problem
- real_context
- my_role
- what_i_built
- key_decisions
- evolution
- current_state
- result
- what_i_learned
- relevance
- evidence
- related_methods
- related_learning
- related_writing
- started_at
- published_at
- updated_at
- last_verified_at

Do not invent metrics or outcomes.

## 7. Project Evolution Contract

Evolution is a first-class field.

Represent meaningful product or capability changes, for example:

```
Initial manual workflow
→ structured data
→ product module
→ integration
→ multi-agent development
→ engineering governance
```

The purpose is to show how the project changed and what was learned.

## 8. Journey Contract

Journey content should support:

- id
- domain
- date / period
- milestone
- context
- what_changed
- why_it_mattered
- publication_status
- related_projects
- related_learning
- related_writing
- evidence
- public_links
- published_at
- updated_at
- last_verified_at

Domains may include:
- overall
- github
- wechat
- personal-ip
- milestones

Journey entries should reference detailed learning, project, or writing records rather than duplicate them.

## 9. GitHub Snapshot Contract

GitHub-derived content may include:

- joined_at
- repository_count_explored
- core_assets_retained
- archived_count
- deleted_count
- commit_count
- pull_request_count
- release_count
- selected_repositories
- timeline
- learning_path
- governance_events
- captured_at
- source

All numbers must have:
- a collection date;
- a source;
- a clear definition.

Avoid presenting historical snapshots as permanently current.

## 10. Reading Contract

Reading content may support:

- id
- title
- author
- type
- status
- language
- publication_status
- why_now
- what_stayed_with_me
- related_topics
- related_projects
- source_link
- started_at
- finished_at
- published_at
- updated_at
- last_verified_at

Do not fabricate reading history, ratings, quotes, or completion status.

Reading should communicate intellectual input and reflection, not consumption volume.

## 11. Writing & Research Contract

Each asset may support:

- id
- title
- title_zh / title_en when useful
- language
- type
- publication_status
- summary
- topic
- thesis_or_question
- why_it_matters
- source
- canonical_url
- related_projects
- related_learning
- evidence
- published_at
- updated_at
- last_verified_at

Types may include:
- essay
- wechat-article
- research
- paper
- talk

Learning notes are not a Writing type by default. They remain under Learning unless intentionally promoted into a distinct public writing asset.

## 12. Profile Contract

Profile content should support:

- name
- preferred_name
- short_identity
- value_proposition
- current_focus
- about
- values
- interests
- ways_of_working
- public_profiles
- contact
- language
- publication_status
- updated_at
- last_verified_at

Only confirmed public facts should enter the profile.

## 13. Method Contract

How-I-Work content may support:

- method_id
- name
- problem_it_solves
- how_it_works
- when_to_use
- limitations
- evidence_projects
- related_writing
- publication_status
- updated_at
- last_verified_at

Methods must be grounded in actual practice, not abstract self-description.

## 14. Suggested Content Directory

```
content/
├── profile/
├── work/
│   └── projects/
├── method/
├── learning/
│   ├── reading/
│   └── notes/
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

Markdown, MDX, JSON, YAML, or typed local content may be used.

The implementation choice must preserve:
- schema validation;
- simple editing;
- Git diff readability;
- stable IDs;
- low merge-conflict risk;
- publication-state filtering;
- evidence visibility controls.

## 15. Language Contract

MVP rules:

- UI / navigation: English-first.
- Personal, research, and writing content may remain in its original language.
- Project titles may support English and Chinese aliases.
- Automatic translation must not overwrite the original Source of Truth.
- Full bilingual localization is deferred.

## 16. Editorial Selection

Content creation and homepage featuring are separate responsibilities.

A Domain Agent may create a valid project or article.

It does not automatically gain homepage placement.

Featured selection, ordering, positioning, and public release are Product Owner decisions.
