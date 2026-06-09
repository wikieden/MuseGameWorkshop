# Muse Game Workshop PRD

Version: v0.1

Language: English

## 1. Product Overview

Muse Game Workshop is an AI-assisted production workflow system for indie game development with Godot and Unreal Engine. It is not a game engine and not a one-click game generator. Its purpose is to structure the full path from concept, pre-production, prototyping, vertical slice planning, production, playtesting, QA, polish, and release preparation into tool-neutral workflow skills, templates, project rules, checklists, examples, and AI tool adapters.

The long-term goal is to become an AI production layer for Godot and Unreal projects:

- Top layer: concept, GDD, mechanic specs, content matrices, balance, playtest feedback, release decisions.
- Middle layer: workflow core, production stages, production disciplines, templates, workflow rules, review gates, and project-stage detection.
- Adapter layer: prompts, rule files, briefs, commands, and review conventions for AI coding tools such as Codex, Claude Code, Kiro CLI, and opencode, plus image, audio, video, 3D, animation, and localization AI tools.
- Bottom layer: Godot/Unreal adapters, creative asset pipelines, editor automation, tests, builds, asset import, and validation.

One-line positioning:

> An AI tool-agnostic game design, content production, engineering, validation, and release workflow system for Godot and Unreal.

### 1.1 Vision

Muse Game Workshop should elevate AI from "a tool that can write code or generate assets" into a trusted AI-assisted game production operating model for indie developers and small teams. It uses familiar game-industry production stages, disciplines, and quality gates to organize work. It uses AI to extend design, engineering, art, animation, environment, music, sound, QA, and release capabilities while using review gates, evidence records, and asset provenance to keep human creative control intact.

It helps teams continuously answer three production questions: what game are we actually making; what is the next smallest verifiable output; and can every AI-assisted design, code, asset, test, and release decision be explained, traced, and approved by a human. It does not replace producers, designers, artists, programmers, audio specialists, QA, or release judgment. It helps those disciplines work with AI in a clearer, faster, and more reviewable way. A team should be able to move from a vague idea to playable specs, implementation plans, creative asset briefs, AI-generated asset records, Godot/Unreal integration plans, and a release-ready demo checklist.

## 2. Background and Problem

AI coding tools and creative AI tools can already help indie developers generate prototypes, code, and asset directions quickly. The real challenge in game development, however, is not only writing code. It is continuously judging whether the game is fun, managing content production, controlling technical debt, validating game feel, recording decisions, managing assets, and preparing for release.

Common problems in current tools:

- One-click game tools produce fast demos but often struggle to support real production.
- General coding agents can write code, and creative AI tools can generate assets, but they usually do not understand game design workflows, engine boundaries, asset licensing, or release constraints.
- Godot and Unreal workflows involve complex editor state, scenes, Blueprints, resources, tests, and packaging.
- Design documents, implementation tasks, playtest feedback, and balance changes often become disconnected.
- AI-generated code and assets can create comprehension debt and provenance debt, where the developer can no longer understand, maintain, source, license, or safely release the project.

This project addresses:

> How to make AI a controlled collaborator in indie game production, not just a temporary code generator.

## 3. Target Users

Initial target users:

- Solo indie game developers.
- Small 2-5 person game teams.
- Developers using Godot for 2D or lightweight 3D games.
- Developers using Unreal for 3D action, exploration, shooter, or high-fidelity prototypes.
- AI-assisted developers who want to move beyond vibe coding into maintainable production workflows.
- Creators with design ideas who need engineering structure, documentation, and validation discipline.
- Chinese indie developers and Chinese game-industry users who need terminology and production docs that feel natural to Chinese teams.
- English-speaking indie developers and small teams who need natural English game-production docs rather than translated Chinese copy.

Not prioritized initially:

- Full production pipelines for large studios.
- MMO, open-world, heavy networking, or heavy live-ops projects.
- Fully automated game generation platforms.
- Agent systems without human playtesting or design approval.

## 4. Product Goals

v0.1 goals:

- Provide a reusable Godot/Unreal dual-engine game workflow documentation package.
- Provide initial tool-neutral workflow skill specifications.
- Define game-industry-readable production stages and production discipline mappings.
- Provide design, mechanic, content, playtest, and engine mapping templates.
- Include P0 workflow design for creative assets, UX/UI, level design, and asset provenance.
- Provide a v0.1 manifest that defines the first skills, templates, checks, and dry-run evidence.
- Run one no-code Boss Rush / Counter Trial dry run.
- Clarify engine selection and migration strategy between Godot and Unreal.
- Define documentation entry points, terminology rules, and localization strategy for both Chinese-speaking and English-speaking users.

v0.2 goals:

- Complete the Godot Boss Rush playable loop.
- Run the path from pitch, core loop, and mechanic spec to a Godot test scene.
- Add basic Godot test commands and a manual playtest script.
- Produce the first playtest report.

v0.3 goals:

- Complete P0 creative asset pipeline engine validation.
- Add art, animation, music, sound, asset provenance, and asset review templates.
- Establish the asset gate: assets without brief/provenance/review cannot enter examples.

v0.4 goals:

- Complete the Unreal Third-person Combat mapping slice.
- Validate the cost of mapping the same mechanic from engine-neutral spec to an Unreal PIE test map.
- Record Blueprint, C++, Data Asset, UMG, Animation, and packaging risks.

v0.5 goals:

- Complete P1 release, localization, accessibility, and store readiness.
- Establish the demo release checklist.
- Complete AI usage disclosure and platform checklist.

v1.0 goals:

- Become an installable, reusable, extensible AI tool-agnostic game workflow pack.
- Support project-stage detection, task breakdown, QA, and release checks for Godot and Unreal.
- Integrate with AI coding tools such as Codex, Claude Code, Kiro CLI, and opencode, common creative generation/editing AI tools, plus Godot/Unreal MCP servers or official editor automation where practical.

## 5. Non-goals

This project will not build:

- A game engine.
- A game asset generation platform.
- A one-click full game generator.
- An autonomous agent that replaces a designer, producer, or creative director.
- A workflow that depends on one proprietary AI platform.
- Unity support in the first phase.

## 6. Core Principles

1. Humans decide the game direction; AI tools structure, decompose, validate, implement, and assist content production.
2. Write engine-neutral mechanic specs and execution plans, then get review approval before entering Godot or Unreal implementation.
3. Every mechanic must include input, states, parameters, feedback, edge cases, and test strategy.
4. All tunable values must be data-driven and not scattered across hot-path code.
5. Every implementation pass must include a minimal playable validation step.
6. Every playtest pass must turn feedback into issues, cause hypotheses, change options, and priorities.
7. AI-generated or AI-assisted assets must have briefs, provenance, license, version, and human review records.
8. AI may propose options, but it does not replace human playtesting, aesthetic judgment, or release judgment.
9. One workflow core, two user-facing surfaces: Chinese docs serve Chinese game-industry users, while English docs serve English-speaking game-production users.

## 7. Production Stages And Disciplines

Muse Game Workshop uses game-industry language externally instead of inventing a separate set of agent titles. AI tools only assist within familiar production disciplines.

This does not mean copying heavyweight studio production exactly. Muse should preserve AI workflow features: workflow skills, tool adapters, review gates, evidence records, asset provenance, dry runs, and automated checks. Externally, describe production stages, disciplines, deliverables, and quality gates. Internally, keep executable mechanisms such as skills, adapters, checks, provenance, and evidence.

See `production-language-guide.zh.md` / `production-language-guide.en.md` for naming rules, and `bilingual-audience-strategy.zh.md` / `bilingual-audience-strategy.en.md` for bilingual audience strategy.

### 7.1 Production Stages

| Stage | Goal | Main Outputs |
|---|---|---|
| Concept | Decide whether the direction is worth pursuing | Pitch, player fantasy, references, risk hypotheses |
| Pre-production | Turn the direction into executable specs | Core loop, mechanic specs, content matrix, engine choice |
| Prototype | Validate core fun at low cost | Prototype scope, test scene, cut list |
| Vertical Slice | Prove the full experience loop works | Slice tasks, acceptance criteria, playtest checkpoints |
| Production | Build from the reviewed and approved plan | Gameplay, content, asset integration, test commands |
| Playtest & Iteration | Use evidence to drive the next pass | Playtest report, issue categories, change hypotheses |
| Polish & QA | Remove release-blocking issues | Bug list, regression checks, performance and feel polish |
| Release | Prepare an external demo or release | Build, store assets, version notes, AI-use disclosure |
| Postmortem | Feed lessons back into the workflow | Retrospective, template updates, next-stage risks |

### 7.2 Production Discipline Mapping

| Discipline | Responsibilities | Related Workflow Skills |
|---|---|---|
| Producer | Scope, milestones, risk, and review gates | `game-intake`, `vertical-slice-planner`, `postmortem` |
| Game Designer | Player experience, rules, mechanics, and content pacing | `core-loop`, `mechanic-spec`, `content-matrix` |
| Technical Designer | Turn design into state machines, parameters, data structures, and test points | `mechanic-spec`, `implementation-bridge`, `engine-portability` |
| Gameplay Programmer | Implement input, states, interactions, feedback, and validation after review approval | `implementation-bridge`, `godot-workflow`, `unreal-workflow` |
| Engine Specialist | Handle Godot/Unreal scenes, assets, Blueprints, scripts, and build constraints | `godot-workflow`, `unreal-workflow`, `engine-portability` |
| Art Director | Visual direction, style consistency, and asset review standards | `art-direction`, `asset-review` |
| Concept Artist | Character, creature, weapon, prop, and UI concept exploration | `asset-brief`, `asset-review` |
| Environment Artist | Blockout, mood, lighting, terrain, and environment assets | `level-blockout`, `asset-brief` |
| Animator | Movement, attack, hit, and interaction timing | `animation-brief`, `asset-review` |
| Technical Artist | Materials, shaders, VFX, import specs, and performance budgets | `asset-integration`, `asset-review` |
| Composer | Themes, combat, exploration, menu, and cinematic music | `music-brief`, `asset-review` |
| Sound Designer | UI, footsteps, attacks, impacts, ambience, and feedback sounds | `sfx-brief`, `asset-review` |
| Audio Implementer | Audio events, mix rules, triggers, and engine integration | `asset-integration`, `release-checklist` |
| QA | Design tests, reproduce issues, and run regressions | `playtest-report`, `release-checklist` |
| Release Manager | Manage builds, versions, platform checklists, store assets, and disclosures | `release-checklist`, `postmortem` |

### 7.3 Creative & Publishing Production Coverage

P0 must be included in the current design:

- Creative Asset Pipeline: art, animation, VFX, music, SFX, and UI assets from brief, generation, human review, library storage, engine integration, and in-game validation.
- Asset Provenance: every AI-generated or AI-assisted asset must record tool, prompt, model/service, version, license, human edits, commercial-use risk, and platform disclosure status.
- UX/UI and Onboarding: menus, settings, tutorial flow, first-time user experience, readability, feedback hierarchy, and basic accessibility switches.
- Level Design: blockout, encounter design, sightline guidance, pacing, navigation, difficulty curve, and level review.

P1 should enter v0.3-v0.5 design:

- Narrative / Worldbuilding / Quest: world premise, character motivation, dialogue, quest structure, text style, and narrative consistency.
- Platform & Store Readiness: Steam/itch demo, capsule art, screenshots, trailer brief, build branches, controller support, crash logs, and platform disclosures.
- Localization: text keys, fonts, UI overflow, translation workflow, cultural risk, and localization regression.
- Accessibility: subtitles, color/contrast, remapping, vibration toggle, difficulty assists, and text size.

P2 belongs in future planning:

- Analytics / Telemetry: playtest data, death points, funnels, retention, and privacy boundaries.
- Community & Marketing: devlogs, community feedback, and update cadence.
- Monetization: pricing, demo strategy, DLC, and paid-content boundaries.
- LiveOps / Post-launch: patches, hotfixes, update roadmap, and player feedback triage.
- Modding / UGC: editors, user content, moderation, and copyright boundaries.
- Security / Privacy: online features, third-party SDKs, data collection, and security risk.

## 8. Core User Journeys

### 8.1 From vague idea to testable direction

Input:

- One-line idea.
- Reference games.
- Target platform.
- Engine preference.
- Available time.

AI tool-assisted work:

- Use `game-intake` to ask focused questions.
- Generate pitch, target player, and core player verbs.
- Generate 3 design hypotheses that must be validated.
- Recommend Godot or Unreal.

Output:

- `docs/design/00_pitch.md`
- `docs/design/01_core_loop.md`
- First risk list.

### 8.2 From gameplay description to mechanic spec

Input:

- Gameplay description, for example "perfect dodge counterattack".

AI tool-assisted work:

- Use `mechanic-spec` to define state machine, input, timing windows, parameters, feedback, and edge cases.
- Use `engine-portability` to generate Godot and Unreal implementation differences.

Output:

- Engine-neutral mechanic spec.
- Godot implementation tasks.
- Unreal implementation tasks.

### 8.3 From mechanic spec to vertical slice

Input:

- Core loop.
- Mechanic spec.
- Content matrix.

AI tool-assisted work:

- Use `vertical-slice-planner` to constrain a 7-14 day scope.
- Use `godot-workflow` or `unreal-workflow` to generate engine-specific implementation plans.
- Generate test maps, playtest checkpoints, and cut-list.

Output:

- Vertical slice task list.
- Engine implementation plan.
- Playtest acceptance criteria.

### 8.4 From playtest feedback to next iteration

Input:

- Playtest notes.
- Screenshot or video observations.
- Bugs and game-feel issues.
- Balance data.

AI tool-assisted work:

- Use `playtest-report` to classify feedback.
- Use `balance-check` to diagnose value and experience problems.
- Generate low-cost next changes.

Output:

- Playtest report.
- Next iteration task list.
- Decision log.

## 9. Functional Requirements

### 9.1 Document Templates

The product-level target should provide these template directions. v0.1 scaffolding follows the 22 templates listed in `v0.1-manifest.en.md`:

- Pitch template.
- Player fantasy template.
- Core loop template.
- Mechanic spec template.
- Content matrix template.
- Engine mapping template.
- Playtest log template.
- Balance report template.
- Release checklist template.
- Decision log template.
- Art direction template.
- Asset brief template.
- Animation brief template.
- Music brief template.
- SFX brief template.
- Asset provenance template.
- Asset review template.
- UX flow template.
- Level blockout template.
- Narrative brief template.
- Localization readiness template.
- Accessibility checklist template.

### 9.2 Workflow Skills

The product-level baseline workflow skills include:

- `game-intake`
- `core-loop`
- `mechanic-spec`
- `content-matrix`
- `vertical-slice-planner`
- `implementation-bridge`
- `godot-workflow`
- `unreal-workflow`
- `engine-portability`
- `playtest-report`
- `balance-check`
- `release-checklist`
- `postmortem`

P0/P1 extension directions include:

- `creative-asset-pipeline`
- `art-direction`
- `asset-brief`
- `animation-brief`
- `music-brief`
- `sfx-brief`
- `asset-review`
- `asset-integration`
- `ai-asset-disclosure`
- `ux-flow`
- `tutorial-design`
- `settings-accessibility`
- `ui-review`
- `level-blockout`
- `encounter-design`
- `level-review`
- `narrative-brief`
- `character-brief`
- `dialogue-pass`
- `quest-design`
- `store-page-brief`
- `trailer-brief`
- `platform-cert-check`
- `localization-readiness`
- `accessibility-check`

### 9.3 Godot Support

MVP must support:

- GDScript first, C# optional.
- Scene, Script, Resource, Autoload, and Signal boundaries.
- Input mapping.
- HUD/UI scene decomposition.
- Test scene and minimal reproduction design.
- Headless export and script check guidance.
- GdUnit4 or GUT test recommendations.

### 9.4 Unreal Support

MVP must support:

- Blueprint and C++ responsibility split.
- Actor, Component, Pawn, Controller, GameMode, and Subsystem boundaries.
- Enhanced Input mapping.
- Data Asset and Data Table design.
- UMG, Animation Blueprint, Montage, Niagara, and Sound Cue requirements.
- PIE test maps.
- Automation Test Framework and Functional Testing guidance.
- Packaging, cooking, and performance budget checks.

### 9.5 QA and Release

MVP must support:

- Human playtest logs.
- Automated test recommendations.
- Build checks.
- Performance checks.
- Save-system checks.
- Input-device checks.
- AI-use disclosure records.
- itch/Steam demo release checks.

### 9.6 Creative Asset Pipeline

P0 must support:

- Art direction and art bible summaries.
- Asset briefs for art, animation, VFX, music, SFX, and UI.
- AI generation tool, prompt, model/service, and version records.
- Human review, licensing risk, and platform disclosure status.
- Asset format, size, naming, compression, import path, and performance budget.
- Godot/Unreal in-engine validation checkpoints.

### 9.7 UX, Level Design, Narrative, Localization, And Accessibility

P0/P1 must support:

- Menus, settings, tutorials, onboarding, and UI review.
- Level blockout, encounter design, navigation, sightline guidance, and difficulty curve.
- Worldbuilding, characters, dialogue, quest structure, and text style.
- Text keys, fonts, UI overflow, translation workflow, and cultural risk.
- Subtitles, contrast, input remapping, vibration toggle, difficulty assists, and text size.

### 9.8 Future Planning

P2 should stay in roadmap rather than the first implementation batch:

- Analytics / Telemetry.
- Community & Marketing.
- Monetization.
- LiveOps / Post-launch.
- Modding / UGC.
- Security / Privacy.

## 10. Success Metrics

Short-term metrics:

- Turn a vague idea into pitch and core loop within 30 minutes.
- Produce the first mechanic spec within 1 day.
- Complete a playable vertical slice within 7-14 days.
- Every mechanic has Godot and Unreal mappings.
- Every playtest produces a structured retrospective.

Long-term metrics:

- Lower new-project setup cost.
- Lower AI-generated code rework.
- Keep design documents and implementation tasks synchronized.
- Reuse the same mechanic specs across Godot and Unreal.
- Developers can explain and maintain AI-generated code and engine structure.

## 11. Risks

Main risks:

- The workflow becomes too heavy for solo developers.
- Skills remain too generic to guide real Godot/Unreal work.
- Unreal is introduced too early and slows down prototype validation.
- MCP/editor automation is unstable.
- AI-generated assets and code create licensing, disclosure, or quality risks.

Mitigation:

- Keep v0.1 focused on high-frequency core skills.
- Keep templates short, explicit, and executable.
- Default to engine-neutral specs first.
- Use Godot for systems validation and Unreal for presentation validation.
- Require human playtest, test, or review evidence for every AI-produced change.

## 12. Reference Projects and Tools

- Claude Code Game Studios: https://github.com/Donchitos/Claude-Code-Game-Studios
- GodotPrompter: https://github.com/jame581/GodotPrompter
- funplay MCP: https://gamebooom.ai/en
- Godot command line docs: https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html
- GdUnit4: https://github.com/godot-gdunit-labs/gdUnit4
- Unreal Editor Scripting: https://dev.epicgames.com/documentation/en-us/unreal-engine/scripting-and-automating-the-unreal-editor
- Unreal Automation Test Framework: https://dev.epicgames.com/documentation/unreal-engine/automation-test-framework-in-unreal-engine
- mcp-unreal: https://github.com/remiphilippe/mcp-unreal
