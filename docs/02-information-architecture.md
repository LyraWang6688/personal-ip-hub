# Personal IP Hub — Information Architecture v1

## 1. Top-Level Navigation

Primary navigation:

- Work
- How I Work
- Learning
- Writing & Research
- Journey
- About

Home is reached through the Lyra Wang brand / logo.

A `/now` page may exist as a supporting page but is not required in primary navigation.

## 2. Navigation Logic

The navigation is organized around how a person should understand Lyra, not around publishing platforms.

Do not use GitHub, WeChat, Reading, or other platforms as top-level navigation merely because content exists there.

Platforms are evidence channels.

Content domains are the information architecture.

## 3. Home

Home is a persuasion narrative, not a directory.

Recommended sequence:

### 01 Hero
Who I am + what value I create.

### 02 What I Bring
What kinds of problems I can help structure or solve.

### 03 Featured Work
Selected proof through real products and systems.

### 04 How I Work
A preview of how I frame problems, work with AI, review, verify, and iterate.

### 05 How I Learn
How reading, projects, research, and active practice shape learning.

### 06 Journey
A preview of growth across GitHub, public writing, projects, and personal IP.

### 07 Selected Writing & Research
Representative public thinking and research.

### 08 Now
What I am currently working on, learning, or exploring.

### 09 Connect
Clear next actions: explore, follow, contact, collaborate.

## 4. Work

Core question:

What has Lyra actually built?

Suggested structure:

### Flagship Products
Representative real-world products and systems.

Examples may include:
- Meeting Intelligence Agent
- Retail Operations System
- InvestDesk
- WeChat Publishing System

### AI Infrastructure
Reusable systems or infrastructure supporting AI-native work.

Examples may include:
- AI Capability Platform
- Project Memory Hub
- Personal IP Hub

Projects should not be treated as equal merely because they are GitHub repositories.

Selection and ordering are editorial decisions owned by the Product Owner.

## 5. How I Work

Core question:

How does Lyra actually solve problems and build things?

Possible themes:
- Problem Framing
- Product / Solution Architecture
- Contract Design
- State Ownership
- AI-assisted Implementation
- Multi-Agent Collaboration
- Independent Review / QA
- Runtime Verification
- Feedback
- Iteration
- Release and Governance

Each method should connect to real evidence wherever possible.

## 6. Learning

Core question:

How does Lyra learn?

Learning is broader than courses or certificates.

Suggested structure:
- How I Learn
- Currently Learning
- Learning Through Projects
- Reading
- Notes
- Questions I am exploring

Reading is a subdomain of Learning, not necessarily a top-level navigation item.

## 7. Writing & Research

Core question:

What is Lyra thinking, researching, and publishing?

Suggested structure:
- Essays
- WeChat Articles
- Research
- Talks / Public Sharing
- Notes

WeChat is a publishing channel, not the information architecture itself.

## 8. Journey

Core question:

How did Lyra become the person and builder she is today?

Suggested subdomains:

### Overall Journey
Cross-domain evolution.

### GitHub Journey
- By the Numbers
- Growth Timeline
- Learning Path
- Repository Governance
- Important engineering milestones

### WeChat Journey
- Why public writing started
- Evolution of writing and publishing
- Important milestones
- Selected highlights
- What changed in the publishing system

### Personal IP Journey
- From scattered activity to intentional public identity
- Important turning points
- High-signal milestones

### Milestones
Important events that shaped capability, judgment, or public identity.

## 9. About

Core question:

Who is the person behind the work?

About may include:
- personal path;
- current focus;
- values;
- interests;
- ways of thinking;
- why real problems matter;
- why learning in public matters;
- contact and verified public identities.

It should not simply duplicate a CV.

## 10. Evidence Channels

GitHub may appear in:
- Work;
- Journey;
- How I Work;
- About;
- project evidence.

WeChat may appear in:
- Writing & Research;
- Journey;
- Work;
- About.

The same source may support multiple contexts without becoming a top-level navigation item.

## 11. Route Direction

Expected route family:

```
/
 /work
 /work/:slug
 /how-i-work
 /learning
 /writing
 /writing/:slug
 /journey
 /journey/github
 /journey/wechat
 /journey/ip
 /about
 /now
```

Exact slugs may be refined during implementation, but domain boundaries should remain stable.
