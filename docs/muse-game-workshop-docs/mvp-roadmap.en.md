# MVP Roadmap

Version: v0.1

Language: English

## 1. Roadmap Purpose

This roadmap defines how Muse Game Workshop moves from documentation package to reusable workflow pack, Godot playable loop, creative asset production loop, Unreal mapping slice, and publishing readiness.

It is not a wish list. It is a tradeoff tool. Every version must answer:

- Which production problem does this version solve?
- Which deliverables may be created?
- What must not be done early?
- Which dry run, check, or engine validation proves completion?
- Which evidence lets the next version proceed?

v0.1 materialization must use `v0.1-manifest.zh.md` / `.en.md` as the single source of truth. The roadmap may describe larger goals, but it must not override the manifest or scaffold ahead of it.

## 2. MVP Definition

The Muse Game Workshop MVP is not a full platform and not a complete game. The MVP is a validated production chain:

> Start from a game idea, pass through intake, core loop, mechanic spec, engine mapping, asset brief, UX/level planning, playtest report, and release readiness, then move steadily toward a Godot playable loop while leaving reusable evidence for Unreal mapping and publishing preparation.

MVP success definition:

- Documents can guide new project setup.
- Workflow skills can guide AI coding tools such as Codex, Claude Code, Kiro CLI, and opencode through production stages.
- Templates can record design, mechanics, engine mappings, asset provenance, playtests, and release risks.
- Production stage and discipline mappings are understandable to game-industry users.
- P0 creative asset pipeline can record briefs, review, provenance, and engine integration.
- P1 release, localization, accessibility, and platform readiness have clear design entry points.
- One Godot example can complete the full loop.
- One Unreal example can validate the same mechanic's 3D presentation mapping.

## 3. Current State

Current state:

- `README.md` is the project entry point.
- `AGENTS.md` has landed under v0.1 rules.
- The documentation package exists in Chinese and English.
- `p0-skill-skeleton-plan.zh.md` / `.en.md` has an `Approved` review gate.
- `.agents/skills/`, `templates/`, `tools/checks/`, and Boss Rush dry-run evidence have been created according to the v0.1 manifest.
- The Godot Boss Rush Prototype exists under `examples/godot-boss-rush/` and passes v0.2 checks.
- v0.3 prototype visual/audio assets, provenance, asset review, and engine validation evidence have landed.
- Unreal game code has not been created.

The v0.4 review gate is Approved and the Unreal static mapping scaffold has landed. The next step is not to expand into a full 3D game; it is to generate the PIE test map, Data Asset, UMG, and animation placeholders after Unreal Editor is available, then add editor validation evidence.

## 4. Roadmap Layers

Muse Game Workshop uses three roadmap layers:

| Layer | Purpose | Main documents |
|---|---|---|
| Vision layer | Explains why the project exists, who it serves, and what remains non-negotiable long term | `vision.zh.md` / `.en.md` |
| Product layer | Defines users, scope, requirements, and success metrics | `prd.zh.md` / `.en.md` |
| Delivery layer | Defines versions, deliverables, acceptance, and exclusions | `delivery-plan.zh.md` / `.en.md`, `v0.1-manifest.zh.md` / `.en.md`, this roadmap |

When layers conflict:

1. v0.1 file creation follows `v0.1-manifest.*.md`.
2. Version order follows `delivery-plan.*.md` and this roadmap.
3. Long-term tradeoffs follow `vision.*.md`.

## 5. Version Map

| Version | Positioning | Target deliverables | Main validation | Explicitly not doing |
|---|---|---|---|---|
| v0.0 | Documentation Foundation | Vision, PRD, architecture, workflow, skill spec, manifest, testing, roadmap | Link checks and bilingual doc pairing | Skill/template/check implementation |
| v0.1 | Workflow Pack MVP | `AGENTS.md`, 14 skills, 22 templates, 5 checks, Boss Rush no-code dry run | Static checks + dry-run evidence | Godot/Unreal game code, commercial APIs, P2 |
| v0.2 | Godot Playable Loop | Godot Boss Rush Prototype | Local launch, playable core mechanic, tests/checks, playtest report | Unreal example, release automation |
| v0.3 | Creative Production Ready | P0 creative pipeline, asset brief/review/provenance, UX/level gates | Complete: one visual prototype asset and one audio prototype asset passed engine validation | Large-scale asset production, deep commercial API integration |
| v0.4 | Unreal Mapping Slice | Unreal Third-person Combat Slice | In progress: static C++/config scaffold passes checks; PIE/editor validation waits for Unreal Editor | Full 3D game |
| v0.5 | Publishing Readiness | Release checklist, store/trailer brief, localization, accessibility, AI disclosure | Demo release readiness report | Automatic publishing, account system, LiveOps |
| v0.6 | Game Design Deepening | Game design deepening pack, system/combat/encounter/tuning specs | Boss Rush + Tactics design dry run | New engine features, complex economy systems |
| v0.7 | Narrative Design Pack | World bible, narrative flow, character/quest/dialogue briefs | Lore consistency check + narrative handoff review | Large-scale narrative content production |
| v0.8 | Genre Tracks | Action, Roguelike, RPG, Puzzle, Visual Novel, Tactics, and Adventure / AVG tracks | Tactics track dry run | Covering every game genre |
| v0.9 | Economy, Progression & Telemetry | Economy model, progression map, telemetry plan, playtest analytics | Data fields and tuning reports feed design decisions | Commercialization backend, real user-data platform |
| v0.10 | Procedural Content | Procedural rules, seed/evidence records, content validation | Generated content is reproducible, reviewable, and reversible | Infinite content generation without human review |
| v1.0 | Reusable Production Pack | Stable docs, skills, templates, examples, checks | A new project can quickly complete intake, spec, and prototype path | Heavy platformization |
| v1.1+ | LiveOps & Post-launch | Patch plan, hotfix flow, feedback triage, update roadmap | Released projects can keep updating with traceable risk | Slowing demo production before v1.0 |

## 6. v0.0: Documentation Foundation

Goals:

- Establish Muse Game Workshop's vision, product definition, technical architecture, production language, bilingual strategy, and testing strategy.
- Clarify P0/P1/P2 boundaries.
- Clarify the difference between full target and v0.1 subset.
- Make future AI coding tools understand that they must produce a design summary and execution plan first, then wait for review approval.

Done when:

- Core docs exist in Chinese and English pairs.
- Root README explains positioning, tool strategy, reading order, and current state.
- `AGENTS.md` exists and blocks premature game code.
- `p0-skill-skeleton-plan.*.md` defines the 14 P0 skill skeleton plan and exclusions.

## 7. v0.1: Workflow Pack MVP

v0.1 is not a game. Its goal is to turn Muse Game Workshop into a workflow pack usable by multiple AI coding tools.

### 7.1 v0.1a: Review Gate Baseline

Allowed outputs:

- `v0.1-execution-plan.*.md` review gate.
- `p0-skill-skeleton-plan.*.md` review gate.
- Aligned README, AGENTS, CLAUDE, and package index status.

Done when:

- Both review gates have an explicit decision on whether v0.1 can materialize.
- All docs state that v0.1 uses the manifest as the single source of truth.
- Exclusions are clear: no game code, no directories outside the manifest, no examples.

### 7.2 v0.1b: P0 Skill Skeletons

Allowed outputs:

- 14 P0 workflow skills under `.agents/skills/`.
- Each skill only contains a `SKILL.md` skeleton.
- Each `SKILL.md` includes Use When, Do Not Use When, Inputs, Outputs, Workflow, Quality Bar, Common Failure Modes, and Next Skills.

The 14 P0 skills:

- `game-intake`
- `core-loop`
- `mechanic-spec`
- `vertical-slice-planner`
- `engine-portability`
- `godot-workflow`
- `unreal-workflow`
- `playtest-report`
- `creative-asset-pipeline`
- `art-direction`
- `asset-brief`
- `asset-review`
- `ux-flow`
- `level-blockout`

Done when:

- Each skill can be read by AI coding tools as a stable workflow.
- Each skill maps to a game-production stage or discipline.
- No novel agent title replaces a game-industry production discipline.

### 7.3 v0.1c: Templates And Checks

Allowed outputs:

- The 22 templates listed in `v0.1-manifest.*.md`.
- The 5 check entry points listed in `v0.1-manifest.*.md`.
- Template metadata blocks.

Done when:

- Templates cover the first production memory for design, production, creative, UX, and publishing.
- Check entry points output `PASS <name>` or `FAIL <name>: <reason>`.
- Checks prevent Godot/Unreal game code from entering v0.1 early.

### 7.4 v0.1d: Boss Rush No-Code Dry Run

Sample game:

> Boss Rush / Counter Trial: the player defeats a boss with clear phase changes through dodge, counter, and stamina management.

Allowed outputs:

- The 3 dry-run evidence files defined by the manifest.
- Consolidated evidence for intake, core loop, mechanic spec, vertical slice plan, engine mapping, creative asset plan, UX/level plan, and playtest planning.

Done when:

- No Godot or Unreal game code is written.
- The workflow skills and templates can move from one game idea to an implementation plan.
- The dry run records failure points, review decisions, and next steps.

### 7.5 v0.1 Release Bar

v0.1 is complete only when:

- 14 P0 skill skeletons exist.
- 22 templates exist.
- 5 check entry points exist and pass.
- Boss Rush no-code dry-run evidence exists.
- README, AGENTS, CLAUDE, manifest, testing strategy, and roadmap are aligned.
- No Godot or Unreal game code exists.

## 8. v0.2: Godot Playable Loop

Goals:

- Complete the Godot Boss Rush Prototype.
- Run the path from pitch, core loop, and mechanic spec to Godot test scene.
- Add basic Godot testing.
- Produce the first playtest report.

Delivery form:

- Godot project.
- Test scene.
- Data-driven mechanic parameters.
- Manual playtest script.
- Minimal automated or scripted checks.
- Playtest report.

Release bar:

- It launches locally.
- The core mechanic can be played repeatedly.
- Dodge/counter/stamina produces at least 10 observable interactions.
- Parameters are tunable.
- Minimal automated checks and manual playtest script exist.

## 9. v0.3: Creative Production Ready

Goals:

- Complete the P0 creative asset pipeline.
- Add art, animation, music, sound, asset provenance, and asset review templates.
- Establish an asset gate: assets without brief/provenance/review cannot enter examples.
- Add UX/onboarding/level blockout checks.

Delivery form:

- Art direction.
- Asset brief.
- Animation / music / SFX brief.
- Asset provenance record.
- Asset review.
- Engine import validation.
- Draft AI usage disclosure.

Release bar:

- Placeholder, prototype, reviewed, release-candidate, and rejected asset states are distinct.
- At least one visual asset and one audio asset go from brief to engine validation.
- Asset source, license, and AI usage disclosure records exist.
- Assets serve gameplay feedback rather than only presentation.

## 10. v0.4: Unreal Mapping Slice

Status: in progress. The v0.4 review gate is Approved and the static scaffold has landed; PIE/editor validation requires Unreal Editor.

Goals:

- Complete the Unreal Third-person Combat Slice.
- Map the same mechanic from engine-neutral spec to Unreal.
- Validate the minimal collaboration between Blueprint, C++, Data Asset, UMG, and Animation.

Delivery form:

- Unreal project.
- PIE test map.
- Character / test enemy.
- Dodge / counter mechanic mapping.
- Data Asset tuning.
- Placeholder Animation Montage.
- Debug UMG.
- Unreal check script or manual validation.

Release bar:

- It plays in a PIE test map.
- Data Asset parameters can be validated.
- Blueprint/C++ responsibilities are clear.
- The same mechanic can map from Godot/GDD specs to Unreal presentation.

## 11. v0.5: Publishing Readiness

Goals:

- Complete P1 release, localization, accessibility, and store readiness.
- Establish demo release checklist.
- Complete AI usage disclosure and platform checklist.

Delivery form:

- Store page brief.
- Trailer brief.
- Screenshot checklist.
- Localization readiness.
- Accessibility checklist.
- Platform checklist.
- AI usage disclosure.
- Demo package readiness report.

Release bar:

- The team can judge whether the demo is ready for a public playtest.
- Blocking release issues are visible.
- AI-assisted content usage and disclosure status are clear.
- A demo package readiness report can be produced.

## 12. v0.6: Game Design Deepening Pack

Goals:

- Expand design from pitch/core loop/mechanic spec into handoff-ready system, combat, level encounter, tuning, and playtest hypothesis specs.
- Clarify handoffs between Game Designer, Technical Designer, Combat Designer, Level Designer, and QA.
- Use Boss Rush and Tactics as validation cases to prove that one design workflow can serve different gameplay structures.

Delivery form:

- Game pillars.
- System design brief.
- Combat design brief.
- Encounter design brief.
- Tuning plan.
- Playtest hypothesis.
- Design review gate.

Release bar:

- Mechanics, systems, levels, tuning, and playtest hypotheses can hand off to engineering, QA, art, and audio.
- Tunable parameters do not scatter into implementation.
- Playtest feedback can return to explicit design hypotheses.
- Tactics completes at least one dry run covering rules, grid, units, abilities, and mission objectives.

## 13. v0.7: Narrative Design Pack

Goals:

- Add worldbuilding, narrative flow, characters, quests, dialogue, and environmental storytelling to the formal workflow.
- Make narrative deliverables serve gameplay, level design, art, audio, and localization instead of staying as inspiration text.
- Record source, canon status, reference boundary, and cultural/platform risk when AI assists narrative design.

Delivery form:

- World bible.
- Narrative flow.
- Character profile.
- Faction design.
- Quest brief.
- Dialogue brief.
- Environmental storytelling brief.
- Lore consistency check.

Release bar:

- Major lore has canon status.
- Key characters have motivation, conflict, gameplay role, and voice.
- Quest and level goals explain each other.
- Dialogue, text, and environmental storytelling carry localization and spoiler-risk tags.

## 14. v0.8: Genre Tracks

Goals:

- Add genre-specific workflow branches on top of the shared main workflow.
- First support Action, Roguelike, RPG, Puzzle, Visual Novel, Tactics, and Adventure / AVG.
- Treat Tactics as a priority track to validate the handoff chain across rules, maps, units, abilities, missions, and AI.

Tactics delivery form:

- Tactics ruleset.
- Grid map spec.
- Unit matrix.
- Ability spec.
- Terrain rules.
- Mission brief.
- Encounter table.
- Tactical AI brief.
- Tactics balance report.
- Tactics playtest checklist.

Release bar:

- Genre tracks reuse review gates, handoffs, evidence, and provenance.
- Genre tracks explain which design priorities, testing methods, and asset needs differ.
- Tactics can move from rules and mission briefs into map/unit/ability validation plans.

## 15. v0.9: Economy, Progression & Telemetry

Goals:

- Add economy, progression, and telemetry after a playable loop and content matrix exist.
- Support sources/sinks, rewards, progression, level/quest payouts, and playtest analytics.
- Give tuning evidence instead of relying only on subjective feel.

Delivery form:

- Economy model.
- Resource flow table.
- Progression map.
- Reward table.
- Telemetry event plan.
- Playtest analytics report.
- Tuning decision log.

Release bar:

- Every key data point maps to a design question.
- Data collection has privacy and platform boundaries.
- Tuning reports explain observation, hypothesis, change, and next validation.

## 16. v0.10: Procedural Content Pack

Goals:

- Design procedural content only after mechanics, level rules, and content matrices are stable.
- Support controlled randomness for maps, encounters, loot, and quest variations.
- Avoid using infinite generation to hide weak rules.

Delivery form:

- Procedural content rules.
- Seed/evidence record.
- Content validation checklist.
- Rejection rules.
- Human review gate.
- Rollback plan.

Release bar:

- Generated content is reproducible.
- Generated outputs can be reviewed by humans.
- Randomness does not break difficulty, rewards, narrative, or asset constraints.

## 17. v1.0: Reusable Production Pack

Goals:

- The workflow pack can be reused by other Godot/Unreal projects.
- README, docs, skills, templates, examples, and checks are stable.
- At least one Godot example and one Unreal mapping example pass acceptance.

Release bar:

- A new project can complete intake and core loop in 30 minutes.
- A first mechanic spec can be completed in one day.
- A playable slice can be reached in seven days.
- AI-assisted assets, code, tests, and release decisions all have evidence records.
- Chinese and English entry points are natural, clear, and executable.

## 18. v1.1+: LiveOps & Post-launch

Goals:

- Support post-launch operations, patches, hotfixes, update plans, and player feedback triage.
- Keep community, marketing, monetization, UGC, and security/privacy as post-release capabilities rather than early-demo blockers.

Delivery form:

- Patch plan.
- Hotfix flow.
- Update roadmap.
- Feedback triage.
- Known issues policy.
- Community risk record.

Entry criteria:

- v1.0 reusable production pack is stable.
- At least one demo or small release has entered public playtest/release.
- Telemetry, release readiness, and feedback triage already have basic evidence.

## 19. Future Planning: P2

P2 is not part of the first implementation batch; preserve it as research and roadmap direction:

- Community & Marketing: devlogs, community feedback, and update cadence.
- Monetization: pricing, demo strategy, DLC, and paid-content boundaries.
- LiveOps / Post-launch: patches, hotfixes, update roadmap, and player feedback triage, entering in v1.1+.
- Modding / UGC: editors, user content, moderation, and copyright boundaries.
- Security / Privacy: online features, third-party SDKs, data collection, and security risk.

Entry criteria:

- v0.6-v0.10 design, narrative, genre, economy/progression/telemetry, and procedural-content tracks have proved necessary.
- The project is truly entering release, growth, operations, or community phases.
- Privacy, compliance, and maintenance ownership are clear.

## 14. Milestones

| Milestone | Name | Version | Completion signal |
|---|---|---|---|
| M0 | Documentation Ready | v0.0 | Documentation package can guide repo and workflow pack delivery. |
| M1 | Workflow Pack Ready | v0.1 | Skills, templates, checks, and dry-run evidence are complete. |
| M2 | Godot Loop Ready | v0.2 | Boss Rush Godot prototype is playable. |
| M3 | Creative Production Ready | v0.3 | Asset brief/provenance/review/engine validation runs end to end. |
| M4 | Unreal Mapping Ready | v0.4 | The same mechanic maps to an Unreal 3D action slice. |
| M5 | Publishing Readiness Ready | v0.5 | Demo release readiness can be judged. |
| M6 | Game Design Deepening | v0.6 | System, combat, encounter, tuning, and playtest hypotheses can hand off. |
| M7 | Narrative Design Ready | v0.7 | World, characters, quests, dialogue, and lore consistency can be reviewed. |
| M8 | Genre Tracks Ready | v0.8 | The seven first genre tracks complete dry runs, including Tactics and Adventure / AVG. |
| M9 | Economy Progression Telemetry Loop | v0.9 | Economy, progression, and telemetry feed tuning decisions. |
| M10 | Procedural Content Ready | v0.10 | Generated content is reproducible, reviewable, and reversible. |
| M11 | Reusable Production Pack | v1.0 | Other projects can reuse the full workflow. |
| M12 | LiveOps Ready | v1.1+ | Released projects can keep updating and handling player feedback. |

## 15. Recommended First Project Initialization Prompt

After creating the project, enter the first project initialization prompt in the selected AI coding tool:

```text
We are creating Muse Game Workshop. Target language: English. Target audience: English-speaking indie developers and small game teams. Locale: en-US unless otherwise stated. First read README, overall project plan, Vision, PRD, technical architecture, workflow, skill spec, production language guide, bilingual audience strategy, terminology glossary, handoff contracts, templates, delivery plan, v0.1 execution plan, P0 skill skeleton plan, v0.1 manifest, testing strategy, and roadmap. First produce the design summary and execution plan for the repo skeleton, AGENTS.md, workflow skills directory, template files, and test checks. Wait for review approval before making changes. Do not implement game code yet.
```

## 16. Risk Control

Risks:

- Writing example game code too early and neglecting the workflow pack.
- Adding MCP or commercial tool APIs too early and expanding scope.
- Making the Unreal example too heavy.
- Writing workflow skills as long prompts instead of stable workflows.
- Using too much AI-agent terminology in external docs, making the project harder for game-industry users to understand.
- Treating Chinese and English users as translated copies of the same copy, making Chinese docs unnatural for Chinese teams and English docs unnatural for English-speaking teams.
- Letting the creative asset pipeline become "generate many images/songs" without briefs, review, or license records.
- Starting P2 operations/commercialization too early and slowing down the playable demo.

Controls:

- Docs first, skills second, templates/checks third, dry run fourth, examples fifth.
- v0.1 uses the manifest as the single source of truth.
- The Godot example starts in v0.2.
- Keep the Unreal example to one small test map.
- Defer MCP and commercial tool APIs until the workflow is stable.
- For P0/P1, build docs, templates, and review gates first; do not rush into commercial tool APIs.
- Start P2 only when the demo and release-prep workflow actually need it.
