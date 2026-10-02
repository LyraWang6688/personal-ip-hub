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

## 3. Project Contract

Each major project should support:

- id
- title
- short_summary
- category
- status
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
- updated_at

### Evidence may include

- repository
- commit
- pull request
- release
- screenshot
- demo
- article
- document
- public reference

Do not invent metrics or outcomes.

## 4. Project Evolution Contract

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

## 5. Journey Contract

Journey content should support:

- id
- domain
- date / period
- milestone
- context
- what_changed
- why_it_mattered
- capability_gained
- evidence
- related_projects
- public_links

Domains may include:
- overall
- github
- wechat
- personal-ip
- learning
- research

## 6. GitHub Snapshot Contract

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

## 7. Reading Contract

Reading content may support:

- id
- title
- author
- type
- status
- why_now
- what_stayed_with_me
- related_topics
- related_projects
- source_link
- started_at
- finished_at

Do not fabricate reading history, ratings, quotes, or completion status.

Reading should communicate intellectual input and reflection, not consumption volume.

## 8. Writing & Research Contract

Each asset may support:

- id
- title
- type
- summary
- topic
- thesis_or_question
- why_it_matters
- published_at
- source
- canonical_url
- related_projects
- related_learning
- evidence

Types may include:
- essay
- wechat-article
- research
- paper
- talk
- note

## 9. Profile Contract

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
- last_updated

Only confirmed public facts should enter the profile.

## 10. Method Contract

How-I-Work content may support:

- method_id
- name
- problem_it_solves
- how_it_works
- when_to_use
- limitations
- evidence_projects
- related_writing
- last_updated

Methods must be grounded in actual practice, not abstract self-description.

## 11. Suggested Content Directory

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
│   ├── essays/
│   ├── research/
│   └── talks/
└── journey/
    ├── overall/
    ├── github/
    ├── wechat/
    └── milestones/
```

Markdown, MDX, JSON, YAML, or typed local content may be used.

The implementation choice must preserve:
- schema validation;
- simple editing;
- Git diff readability;
- stable IDs;
- low merge-conflict risk.

## 12. Editorial Selection

Content creation and homepage featuring are separate responsibilities.

A Domain Agent may create a valid project or article.

It does not automatically gain homepage placement.

Featured selection, ordering, and positioning are Product Owner decisions.
