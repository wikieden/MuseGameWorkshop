# Muse Game Workshop Deliverables And Handoff Contracts

Version: v0.1

Language: English

## 1. Goal

This document defines deliverables, delivery forms, and acceptance rules between production disciplines, production stages, and AI workflows in Muse Game Workshop.

The goal is not to turn indie teams into heavyweight production organizations. The goal is to make every handoff clear:

- Who hands off to whom.
- What is being handed off.
- What file or evidence form it uses.
- When it is acceptable.
- How downstream work can continue.

## 2. Standard Handoff Contract

Every handoff should fit the same contract:

| Field | Meaning |
|---|---|
| Upstream | Role, process, or AI tool producing the deliverable. |
| Downstream | Role, process, or AI tool receiving it. |
| Trigger | Why the handoff is needed now. |
| Deliverable | Name of the deliverable. |
| Delivery Form | Markdown, table, diagram, engine asset, media asset, evidence record, task package, etc. |
| Required Fields | Fields the downstream owner needs to continue. |
| Acceptance Gate | Conditions required before downstream can accept it. |
| Evidence | Screenshot, log, test result, review record, provenance, etc. |
| Next Workflow | Next skill, template, or test to run. |
| Owner | Person or discipline responsible for maintaining it. |

A handoff is not a chat conclusion. It must be file-backed, reviewable, and usable by downstream work.

## 3. Delivery Form Types

| Delivery Form | Purpose | Examples |
|---|---|---|
| Markdown Spec | Records design, specs, plans, and retrospectives | pitch, core loop, mechanic spec, playtest report |
| Structured Table | Records parameters, content matrices, task breakdowns | parameter table, content matrix, bug list |
| Diagram | Shows states, flows, and dependencies | mermaid state diagram, flowchart |
| Task Package | Execution package for an AI coding tool or developer | design summary, execution plan, acceptance criteria |
| Engine Asset | Verifiable asset inside Godot/Unreal | test scene, PIE map, Data Asset, Resource |
| Creative Asset | Art, animation, music, sound, UI, video | png, wav, fbx, blend, sprite sheet |
| Provenance Record | Tracks AI asset source and license | tool, prompt, reference, license, human edits |
| Evidence Record | Tracks validation results | screenshot, build log, test output, playtest notes |
| Release Package | Release preparation material | release checklist, store page brief, AI usage disclosure |

## 4. Stage-To-Stage Deliverables

| Upstream Stage | Downstream Stage | Core Deliverables | Delivery Form | Acceptance Gate |
|---|---|---|---|---|
| Concept | Pre-production | Pitch, player fantasy, risk hypotheses | Markdown spec | The team can describe the game in one sentence and knows the first validation target. |
| Pre-production | Prototype | Core loop, mechanic spec, engine choice, art direction | Markdown spec + table + diagram | Mechanic is implementable, tunable, and testable. |
| Prototype | Vertical Slice | Prototype findings, cut list, vertical slice plan | Playtest report + task package | Core fun is proven, or the needed direction change is clear. |
| Vertical Slice | Production | Approved slice scope, asset list, implementation plan | Task package + asset briefs | Scope is frozen and key assets/mechanics have briefs. |
| Production | Playtest & Iteration | Playable build, test scene/map, known issues | Engine asset + evidence record | It launches, plays, and contains enough repetitions of the core mechanic. |
| Playtest & Iteration | Polish & QA | Playtest report, priority fixes, regression list | Report + bug list | Issues have hypotheses, priority, and validation method. |
| Polish & QA | Release Readiness | Stable build, release checklist, risk list | Build + checklist + evidence | No blocking issues remain; known risks are acceptable. |
| Release Readiness | Postmortem | Release notes, player feedback, decision log | Release package + retrospective | The team can decide whether to continue, redo, expand, or pause. |

## 5. Discipline Handoff Matrix

| Upstream Discipline | Downstream Discipline | Deliverables | Delivery Form | Acceptance Criteria |
|---|---|---|---|---|
| Producer | Game Designer | Project brief, scope, constraints, milestone intent | Markdown brief | Goal, scope, time, and risks are clear. |
| Game Designer | Technical Designer | Core loop, mechanic spec, content matrix | Spec + table + diagram | Rules, parameters, feedback, and edge cases are clear. |
| Technical Designer | Gameplay Programmer | Implementation brief, state model, test cases | Task package + spec | Tasks can be split without guessing design intent. |
| Gameplay Programmer | QA | Playable build, test scene, known issues | Engine asset + test notes | Core mechanic can be reproduced through a minimal test path. |
| Art Director | Concept / Environment Artist | Art direction, style rules, asset priorities | Art bible slice + asset brief | Style direction, references, and forbidden directions are clear. |
| Concept / Environment Artist | Technical Artist | Reviewed visual assets, source files, import notes | Creative asset + provenance | Asset has source, specs, license, and review decision. |
| Animator | Technical Artist / Programmer | Animation brief, timing notes, export files | Motion spec + media asset | Timing, trigger points, and import format are clear. |
| Composer / Sound Designer | Audio Implementer | Music/SFX brief, audio files, trigger intent | Audio brief + media asset | Loop, trigger, volume hierarchy, and usage scope are clear. |
| Level Designer | Gameplay Programmer / QA | Level blockout, encounter table, navigation notes | Blockout + diagram + table | Route, encounter, pacing, and validation method are clear. |
| QA | Producer / Game Designer | Bug list, playtest report, regression risk | Evidence record + report | Issues are reproducible, prioritized, and convertible into next tasks. |
| Release Manager | Team / Platform | Release checklist, store/trailer/localization/accessibility status | Release package | Demo release status has an explicit conclusion. |

## 6. AI Workflow Handoffs

### 6.1 Human To AI Coding Tool

Deliverables:

- Design summary.
- Execution plan.
- Relevant template paths.
- Acceptance criteria.
- Non-goals.

Delivery forms:

- Markdown task package.
- Issue/task.
- Prompt.

Acceptance:

- The AI coding tool can state which files it would change.
- The AI coding tool can list verification steps.
- The AI coding tool does not modify code or structure before review approval.

### 6.2 AI Coding Tool To Human

Deliverables:

- Draft design plan.
- File change summary.
- Test results.
- Open items.
- Risks and next steps.

Delivery forms:

- Markdown summary.
- Patch/diff.
- Command output summary.
- Evidence record.

Acceptance:

- A human can decide whether to approve.
- Results can be written back to a decision log or evidence record.

### 6.3 Human To Creative AI Tool

Deliverables:

- Art direction.
- Asset brief.
- Forbidden directions.
- Technical specs.
- Usage scope.

Delivery forms:

- Brief.
- Prompt.
- Reference set.
- Style constraints.

Acceptance:

- Generation target is clear.
- Copyright, style, and usage scope constraints are explicit.

### 6.4 Creative AI Tool To Team

Deliverables:

- Candidate assets.
- Prompt/tool record.
- Provenance.
- License/risk note.

Delivery forms:

- Media file.
- Provenance record.
- Review package.

Acceptance:

- Assets cannot directly become release candidates.
- Assets require art/audio/technical review and engine validation.

## 7. Delivery Statuses

| Status | Meaning | Allowed Downstream Action |
|---|---|---|
| Draft | Exploratory draft | Comment only; do not implement. |
| Review Ready | Ready for review | Review allowed; not production-ready. |
| Approved | Approved | Implementation, production, or import may begin. |
| Implemented | Implemented or produced | Testing may begin. |
| Validated | Passed test or human review | May enter next stage. |
| Release Candidate | Candidate for release | May enter release readiness. |
| Rejected | Rejected | Must not enter downstream; reason must be recorded. |

## 8. Recommended Paths

Future implementation should use these directories for deliverables:

```text
docs/design/
docs/production/
docs/creative/
docs/ux/
docs/publishing/
docs/evidence/
docs/evidence/dry-runs/
docs/evidence/playtests/
docs/evidence/asset-reviews/
docs/evidence/engine-checks/
docs/evidence/release-checks/
```

Recommended templates:

```text
templates/production/handoff-record.md
templates/production/review-gate.md
templates/production/acceptance-checklist.md
templates/production/milestone-plan.md
```

## 9. Boss Rush Example Handoff Chain

```text
Producer
  -> Project brief
Game Designer
  -> Core loop + dodge/counter mechanic spec
Technical Designer
  -> State model + parameters + test cases
Gameplay Programmer
  -> Godot test scene / Unreal PIE map
Art Director
  -> Boss visual direction + animation brief
Sound Designer
  -> Counter hit SFX brief
QA
  -> Playtest report + regression list
Producer
  -> Continue / pivot / cut decision
```

Each step must answer:

- Can downstream continue from this?
- Can a human review it?
- Can an AI tool execute it?
- Where is the test or evidence?
