# Muse Game Workshop Vision

Version: v0.1

Language: English

## 1. Vision Statement

Muse Game Workshop should elevate AI from "a tool that can write code or generate assets" into a trusted **AI-assisted game production operating system** for indie developers and small teams.

It is not a game engine, not a one-click game generator, and not a plugin for one AI coding tool. It is a production workflow organized in language game teams understand: from concept, pre-production, prototype, vertical slice, production, playtest, QA, polish, and release into reusable workflow skills, templates, review gates, and evidence records across design, engineering, art, animation, environment, music, sound, UX, QA, and publishing.

One sentence:

> Muse Game Workshop is an AI tool-agnostic production operating system for indie games, making AI-assisted game development plannable, reviewable, traceable, and releasable.

## 2. North Star

Muse Game Workshop's north star is not "generate more content." It is:

> Help an indie game idea move steadily toward a playable, iterable, releasable version through clear production judgment, reviewable deliverables, and traceable evidence.

Every roadmap decision and version plan should return to these questions:

- Does this step clarify the game direction?
- Does this step produce the smallest verifiable output?
- Does this step reduce AI-related chaos instead of adding tool noise?
- Can a producer, designer, artist, programmer, audio owner, QA, or release owner continue from this output?
- Does this step leave a review gate and evidence instead of only chat context?

## 3. Why It Exists

AI can already produce prototype code, concept art, sound directions, level ideas, test scripts, and release copy quickly. The hard problem is no longer only whether something can be generated. The hard questions are:

- Does the generated work serve the same game direction?
- Is the game becoming more fun, or only receiving more content?
- Can art, animation, environment, music, sound, and UI assets enter one production pipeline?
- Can AI-generated or AI-assisted asset tools, prompts, model/service versions, licenses, human edits, and usage scope be traced?
- Can Codex, Claude Code, Kiro CLI, opencode, and other AI coding tools work under the same project rules?
- Can assets from creative AI tools be judged by producers, artists, technical artists, programmers, audio owners, and QA?
- Does every structural change start with design and planning before implementation, instead of drifting into uncontrolled vibe coding?

Indie teams do not need only more generated content. They need steady production judgment, executable iteration rhythm, and project memory that does not disappear. Muse Game Workshop exists to close that gap.

## 4. Target Users

The first stage prioritizes:

- Solo indie developers.
- Small 2-5 person game teams.
- Creative developers using AI coding tools for Godot or Unreal projects.
- Teams bringing image, audio, video, 3D, animation, UI, localization, or voice AI tools into asset production.
- Chinese indie developers and Chinese game-industry practitioners.
- English-speaking indie developers and small teams.

These users may not need a heavyweight production management suite, but they do need a lightweight, explicit, file-backed, reviewable production order.

## 5. Product Thesis

When AI enters game production, small teams do not need more isolated agents. They need a work system organized in the language of game production.

The system must continuously help teams answer three questions:

1. What game are we actually making?
2. What is the next smallest verifiable output?
3. Can every AI-assisted design, code, asset, test, and release decision be explained, traced, and approved by a human?

When these questions can be answered consistently, AI moves from being a temporary helper to becoming a real production multiplier.

## 6. What It Should Feel Like

For a solo developer, it should feel like a lightweight but reliable production partner: turning vague ideas into playable goals, turning playtest feedback into next tasks, and turning AI-generated content into reviewable production assets.

For a small team, it should feel like a shared production language: producers, designers, artists, programmers, audio owners, QA, and release owners can work around the same documents, workflow skills, templates, checklists, and evidence records instead of losing context across separate chat histories.

For AI coding tools, it should provide clear project rules: read the docs first, produce a design summary and execution plan first, wait for review approval, then implement. Every implementation should trace back to gameplay goals, engine constraints, asset provenance, and test evidence.

For creative AI tools, it should provide an asset workflow that can actually ship: define art direction and asset briefs first, generate and select candidates, record source and license metadata, perform human review, then import and validate assets in Godot or Unreal.

## 7. Core Principles

### 7.1 Industry Language, AI-Native Workflow

The external language must use terms game developers already understand: concept, pre-production, prototype, vertical slice, production, playtest, polish, QA, release, postmortem, and production disciplines such as producer, game designer, technical designer, art director, animator, technical artist, gameplay programmer, audio designer, QA, and release manager.

Workflow skills, tool adapters, review gates, evidence records, asset provenance, and dry runs can exist internally, but the product should not be positioned as a pile of unfamiliar agent roles. Game developers should first see a production process they recognize; the AI workflow features should still remain intact during delivery.

Muse uses two-layer naming: document titles, user journeys, and production responsibilities use industry terms; directories, skill slugs, adapters, and test checks use stable AI workflow terms. This keeps the product understandable for game developers and executable by AI coding tools such as Codex, Claude Code, Kiro CLI, and opencode.

### 7.2 Human Creative Control

AI can suggest, decompose, code, summarize feedback, generate asset directions, and propose checks. It should not replace human creative judgment.

Critical decisions require review gates:

- Game direction.
- Core loop.
- Mechanic specs.
- Art direction.
- Whether an asset enters the project.
- Whether playtest feedback changes the direction.
- Whether the project is ready for release preparation.

### 7.3 Smallest Verifiable Output

Every work cycle should converge on the smallest verifiable output instead of expanding into more documents, more content, or more integrations.

Typical outputs include:

- A one-sentence pitch.
- A core loop.
- One mechanic spec.
- One playable prototype.
- One asset brief.
- One level blockout.
- One playtest report.
- One release checklist.

### 7.4 Tool-Agnostic By Design

Muse Game Workshop does not depend on one AI coding tool. Codex, Claude Code, Kiro CLI, opencode, and similar coding agents should be able to read the same project rules, document templates, and workflow skills.

It also does not depend on one creative AI tool. Image, audio, video, 3D, animation, material, UI, localization, and voice tools can all enter the workflow, but only through briefs, provenance records, human review, license checks, and engine validation.

### 7.5 Evidence Over Chat Memory

Game production cannot depend on context trapped in chat history. Important work must be written to the repository:

- Design decisions.
- Mechanic parameters.
- Asset sources.
- Prompts and tool records.
- License status.
- Playtest feedback.
- QA results.
- Release risks.

Project memory should live in documents and reviewable records.

### 7.6 Engine-Aware, Engine-Neutral

Godot and Unreal are the primary target engines, but early design and mechanic specifications should stay engine-neutral when possible.

The workflow should define gameplay intent first, then map it to engine concepts:

- Godot: scenes, nodes, signals, resources, input maps, animation, test scenes.
- Unreal: Actors, Components, Blueprints, C++, Data Assets, UMG, Animation Blueprints, test maps.

Engine implementation details should not swallow gameplay design too early.

### 7.7 Bilingual By Design

Muse Game Workshop serves both Chinese and English user groups. Chinese docs are not subordinate translations of English docs, and English docs are not literal translations of Chinese docs.

Core rules:

- Chinese-facing docs should use terminology that feels natural to Chinese game teams.
- English-facing docs should use natural English game-production language.
- Structure, decisions, version status, and acceptance criteria should stay aligned.
- Terminology differences belong in the terminology glossary, not repeated explanations in main copy.

## 8. Production Model

Muse Game Workshop organizes workflow around game production stages:

1. Concept: idea, player fantasy, target experience.
2. Pre-production: core loop, mechanic specs, technical risk, art direction.
3. Prototype: smallest playable validation.
4. Vertical Slice: a small slice near final quality.
5. Production: content, assets, levels, and systems.
6. Playtest & Iteration: feedback, hypotheses, tuning, and cuts.
7. Polish & QA: feel, presentation, stability, performance, accessibility.
8. Release: store, platform, build, release assets, risk checks.
9. Postmortem: learnings, reusable patterns, next-project memory.

Each stage should define:

- Inputs.
- Outputs.
- Responsible production discipline.
- Applicable workflow skills.
- Review gate.
- Definition of done.

## 9. Version Horizon

Vision must guide version tradeoffs. The current version horizon is:

| Version | Positioning | Main question | Success signal |
|---|---|---|---|
| v0.0 | Documentation Foundation | Can the idea be understood, reused, and reviewed? | Vision, PRD, architecture, roadmap, manifest, and testing strategy exist in pairs. |
| v0.1 | Workflow Pack MVP | Can multiple AI coding tools work under the same rules? | 14 P0 skills, 22 templates, 5 checks, and the Boss Rush no-code dry run pass. |
| v0.2 | Godot Playable Loop | Can mechanic specs become a Godot prototype? | Boss Rush Godot example is playable, with parameters, tests, and playtest report. |
| v0.3 | Creative Production Ready | Can AI-assisted assets move from brief to engine validation? | At least one visual asset and one audio asset complete brief, provenance, review, and engine validation. |
| v0.4 | Unreal Mapping Slice | Can the same mechanic map into 3D action presentation? | Unreal PIE test map is playable, with Data Asset, UMG, animation placeholder, and check entry points. |
| v0.5 | Publishing Readiness | Can the demo be judged for public playtest readiness? | Release checklist, store/trailer brief, localization, accessibility, and AI disclosure are complete. |
| v0.6 | Game Design Deepening Pack | Can core gameplay, systems, combat, levels, tuning, and playtest hypotheses become handoff-ready specs? | System design, combat design, encounter design, tuning plan, and playtest hypotheses can hand off to programmers, QA, and creative disciplines. |
| v0.7 | Narrative Design Pack | Can worldbuilding, narrative flow, characters, quests, and dialogue serve gameplay and level design? | World bible, narrative flow, character profile, quest brief, dialogue brief, and lore consistency check are reviewable. |
| v0.8 | Genre Tracks | Can the shared workflow adapt to different game genres? | First tracks support Action, Roguelike, RPG, Puzzle, Visual Novel, Tactics, and Adventure / AVG; Tactics is a priority validation track. |
| v0.9 | Economy, Progression & Telemetry | Can rewards, progression, resource loops, and playtest data support tuning? | Economy model, progression map, reward table, telemetry plan, and playtest analytics report work together. |
| v0.10 | Procedural Content Pack | Can stable rules generate controlled content variations? | Procedural rules, content validation, seed/evidence records, and human review gates are complete. |
| v1.0 | Reusable Production Pack | Can another project start from this pack? | A new project can complete intake, core loop, and mechanic spec quickly, then move toward a playable slice. |
| v1.1+ | LiveOps & Post-launch | How does a released project keep updating and responding to player feedback? | Patch plan, hotfix flow, feedback triage, update roadmap, and operations risk records are usable. |

## 10. P0 / P1 / P2 Scope

### P0: Current Design Must Cover

- Creative Asset Pipeline: art, animation, VFX, music, sound, and UI assets from brief to engine validation.
- Asset Provenance: AI tool, prompt, references, license, human review, and allowed usage.
- UX/UI & Onboarding: menus, HUD, settings, tutorial flow, feedback hierarchy, and basic accessibility.
- Level Design: blockout, encounters, pacing, navigation, sightlines, and level review.

### P1: Near-Term Design

- Game Design Deepening: design pillars, system design, combat design, level encounters, tuning, and playtest hypotheses.
- Narrative & Worldbuilding: world, narrative flow, characters, quests, dialogue, and text consistency.
- Genre Tracks: genre-specific workflow branches, first covering Action, Roguelike, RPG, Puzzle, Visual Novel, Tactics, and Adventure / AVG.
- Economy / Progression / Telemetry: economy systems, progression, and playtest analytics, entering in v0.9.
- Platform & Store Readiness: store page, trailer brief, screenshots, platform differences, and basic certification checks.
- Localization: externalized text, glossary, translation risks, fonts, and layout.
- Bilingual Audience Strategy: Chinese and English entry points, terminology style, template metadata, and bilingual tests.
- Accessibility: input, subtitles, color, difficulty assists, and readability.

### P2: Future Planning

- Community & Marketing.
- Monetization.
- LiveOps & Post-launch.
- Modding / UGC.
- Advanced procedural content tooling.
- Security & Privacy.

P2 should not slow down the first playable demo. Basic analytics/telemetry, economy, and progression begin in v0.9; complex commercialization, LiveOps, UGC, and security/privacy capabilities stay in v1.1+ or later.

## 11. Non-Negotiables

- Produce a design summary and execution plan first; implement only after review approval.
- During v0.1 delivery, `v0.1-manifest.zh.md` / `.en.md` is the single source of truth for created scope.
- Do not write Godot or Unreal game code early.
- Do not bypass asset briefs, provenance, license checks, or human review.
- Do not treat Chinese and English users as machine-translated copies of the same copy.
- Do not replace game-industry production disciplines with novel agent titles.
- Do not let P2 operations, commercialization, or community work slow the workflow pack and playable loop.

## 12. What This Is Not

Muse Game Workshop is not:

- A game engine.
- A one-click game generator.
- A plugin for a single AI coding tool.
- A heavyweight production management suite.
- A 49-agent organization simulator.
- A system that replaces producers, designers, artists, programmers, audio owners, QA, or release judgment.

It should stay lightweight, executable, file-backed, and reviewable.

## 13. Long-Term Success

If Muse Game Workshop succeeds, an indie team should be able to:

- Move from a vague idea to a playable prototype instead of staying in chat-based ideation.
- Let AI coding tools and creative AI tools collaborate through game-industry language.
- Bring AI-assisted art, animation, environment, music, and sound assets into a reviewable production pipeline.
- Reuse design, mechanics, QA, and release workflows across Godot and Unreal.
- Give Chinese users production docs that feel natural to Chinese game teams, and give English users natural English production docs.
- Ensure every AI-assisted change has a plan, a review, evidence, and a retrospective trail.
- Decide faster whether a game is worth continuing.

Ultimately, Muse Game Workshop should not make teams think less. It should help them make better production decisions in shorter cycles, with clearer project memory.
