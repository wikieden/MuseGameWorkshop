# MVP Roadmap

Version: v0.1

Language: English

## 1. Roadmap Purpose

This roadmap defines how Muse Game Workshop moves from documentation package to reusable workflow pack, Godot playable loop, creative asset production loop, Unreal mapping slice, research consolidation, game design systems, genre tracks, data loops, narrative, creative production expansion, release readiness, and post-launch operations.

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
- v0.5b AI art dry-run evidence has landed, without importing final or release-candidate assets.
- The Engine AI Development Adapters research pack has landed, covering Godot AI, UE-MCP, GodotPrompter, GenOrca Unreal MCP, GodotIQ, Ziva, ee0pdt/Godot-MCP, and user feedback scanning.
- The Godot integration decision is explicit: Godot AI first, GodotIQ as the second-layer reserve, and GodotPrompter as an internal skill-design reference.
- v0.6 Game Design & Systems has landed with system, combat, encounter, tuning, and playtest hypothesis templates and dry runs.
- v0.7 Product Entry & `mgw init` has landed as a guided initialization design, without implementing a real CLI.
- v0.8 Genre Tracks has landed with seven first genre branches, Tactics dry-run evidence, and the Godot Prototype Asset Kit plan.
- v0.9 Economy & Progression has landed with economy/progression docs, four templates, Tactics economy dry-run evidence, and `check-v0.9-economy-progression`.
- v0.9.1 Numerical Planning has landed with level curve, combat parameter table, system numerical plan templates, Tactics numerical dry-run evidence, and `check-v0.9.1-numerical-planning`.
- v0.9.2 Specialized Design Skills has landed with six specialist design skills, Agent Skill Composition docs, role-agent bundles, updated skill routing, and `check-v0.9.2-design-skills`.
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
| v0.5 | Roadmap Rebase & Research Consolidation | v0.5b AI art dry run, engine AI adapter research, user feedback scan, Godot integration decision, version-plan rebase | v0.5 consolidation evidence + static checks | Installing/integrating MCP, generating new assets, release-readiness implementation |
| v0.6 | Game Design & Systems | Game design deepening pack, system/combat/encounter/tuning specs | Complete: Boss Rush + Tactics design dry runs and v0.6 check | New engine features, complex economy systems |
| v0.7 | Product Entry & Project Initialization | Product Entry & `mgw init`, user journey, project workspace contract, adapter rules | `check-v0.7-product-entry` + review/evidence | Real CLI, MCP install, engine project creation, asset generation |
| v0.8 | Genre Tracks | Action, Roguelike, RPG, Puzzle, Visual Novel, Tactics, and Adventure / AVG tracks; Godot Prototype Asset Kit plan | Tactics track dry run + prototype asset kit validation plan | Covering every game genre, generating/importing real asset files |
| v0.9 | Economy & Progression | Economy model, progression map, resource/reward tables, tuning loop | Complete: Tactics economy/progression dry run and `check-v0.9-economy-progression` | Commercial backend, real payment, paid-content design, real telemetry service |
| v0.9.1 | Numerical Planning Addendum | Level curve, combat parameter table, system numerical plan | Complete: Tactics numerical dry run and `check-v0.9.1-numerical-planning` | Engine implementation, release balance approval, spreadsheet tooling |
| v0.9.2 | Specialized Design Skills | System design, combat design, numerical planning, level curve, combat parameters, system numerics, Agent Skill Composition | Complete: six specialist skills and `check-v0.9.2-design-skills` | Engine implementation, real telemetry, commercial backend, payment, assets, release balance approval |
| v0.10 | Telemetry & Playtest Analytics | Telemetry plan, playtest analytics, tuning decision log | Data fields and tuning reports feed design decisions | Real user-data platform, heavy privacy implementation |
| v0.11 | Narrative Design Pack | World bible, narrative flow, character/quest/dialogue briefs | Lore consistency check + narrative handoff review | Large-scale narrative content production |
| v0.12 | Creative Production Expansion | Art/animation/environment/music/SFX/UI asset expansion, tool adapter notes | Asset brief/provenance/review/engine validation are reusable across asset classes | Deep commercial-tool APIs, final/release-candidate asset production |
| v0.13 | Procedural Content | Procedural rules, seed/evidence records, content validation | Generated content is reproducible, reviewable, and reversible | Infinite content generation without human review |
| v0.14 | Publishing & Release Readiness | Release checklist, store/trailer brief, localization, accessibility, AI disclosure | Demo release readiness report | Automatic publishing, account system, LiveOps |
| v0.15 | LiveOps & Post-launch | Patch plan, hotfix flow, feedback triage, update roadmap | Released projects can keep updating with traceable risk | Slowing v1.0 workflow-pack stabilization |
| v1.0 | Reusable Production Pack | Stable docs, skills, templates, examples, checks | A new project can quickly complete intake, spec, and prototype path | Heavy platformization |

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

## 11. v0.5: Roadmap Rebase & Research Consolidation

Goals:

- Close the v0.5b AI art dry run and clarify that it validates the asset workflow without entering formal asset production.
- Bring Godot / Unreal AI editor control, MCP, project understanding, user feedback scanning, and the Godot integration decision into research evidence.
- Rebase versioning from the old `v0.10 -> v1.0` jump into `v0.10 -> v0.11 -> v0.12 -> v0.13 -> v0.14 -> v1.0`.
- Make the next sequence explicit: design, systems, genre, economy, progression, and telemetry come before broader creative asset expansion, release readiness, and LiveOps.

Delivery form:

- v0.5 AI art dry-run evidence.
- Engine AI Development Adapters overview.
- Seven independent project research reports.
- One user feedback scan.
- Godot integration decision: Godot AI, GodotIQ, and GodotPrompter three-layer strategy.
- v0.5 consolidation evidence.
- v0.5 check entry point.

Release bar:

- v0.5 generates no new assets, imports no engine assets, integrates no commercial API, and installs no MCP.
- The v0.5 research pack has bilingual entry points and local link validation.
- The Godot integration direction is clear, while still requiring a future dry-run review.
- Version planning is aligned across roadmap, delivery plan, overall plan, and README.
- `check-v0.5-consolidation` passes.

## 12. v0.6: Game Design & Systems Pack

Status: complete. v0.6 adds the Game Design & Systems overview, five design templates, Boss Rush Action dry run, Tactics dry run, review gate, completion evidence, and check entry point.

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
- v0.6 completion evidence.
- `check-v0.6-game-design-systems`.

Release bar:

- Mechanics, systems, levels, tuning, and playtest hypotheses can hand off to engineering, QA, art, and audio.
- Tunable parameters do not scatter into implementation.
- Playtest feedback can return to explicit design hypotheses.
- Tactics completes at least one dry run covering rules, grid, units, abilities, and mission objectives.
- v0.6 creates no new engine files, installs no MCP, and generates or imports no assets.

## 13. v0.7: Product Entry & mgw init

Goals:

- Move Muse's user entry from "read the workflow pack repository" to "initialize my own game production workspace."
- Define the `mgw init` command contract, safe defaults, profiles, `muse.project.yaml`, project structure, and user journey.
- Define adapter boundaries for Codex, Claude Code, Kiro CLI, opencode, and generic AI tools.
- Define optional Godot/Unreal MCP and editor automation enablement rules.

Delivery form:

- `product-entry-and-mgw-init.zh.md` / `.en.md`.
- `user-journey.zh.md` / `.en.md`.
- v0.7 review gate and evidence.
- `check-v0.7-product-entry`.

Release bar:

- README, docs index, roadmap, delivery plan, and testing strategy point to the new product entry.
- `mgw init` is defined as a workspace initializer, not a one-click game generator.
- Default `--mcp none`; no MCP installation, engine project creation, or asset generation.
- The v0.7 plan clearly hands off to v0.8 Genre Tracks; v0.9 Economy & Progression, v0.9.1 Numerical Planning, and v0.9.2 Specialized Design Skills are complete, and v0.10 Telemetry & Playtest Analytics is next.

## 14. v0.8: Genre Tracks

Status: complete. v0.8 adds Genre Tracks, seven first genre branch docs, a Tactics dry run, Godot Prototype Asset Kit planning, review/evidence records, and `check-v0.8-genre-tracks`.

Goals:

- Add genre-specific workflow branches on top of the shared main workflow.
- First support Action, Roguelike, RPG, Puzzle, Visual Novel, Tactics, and Adventure / AVG.
- Treat Tactics as a priority track to validate the handoff chain across rules, maps, units, abilities, missions, and AI.
- Add the Godot Prototype Asset Kit plan as the default readable proxy strategy for Godot prototypes.
- Keep real asset generation, import, and package distribution behind a separate asset review gate.

Tactics delivery form:

- Tactics ruleset.
- Grid map spec.
- Unit matrix.
- Ability spec.
- Terrain rules.
- Mission brief.
- Encounter table.
- Tactical AI brief.
- Godot prototype asset needs: player proxy, enemy proxy, NPC proxy, terrain/tile markers, move/attack ranges, selection/facing markers, and simple VFX markers.
- Tactics balance report.
- Tactics playtest checklist.

Release bar:

- Genre tracks reuse review gates, handoffs, evidence, and provenance.
- Genre tracks explain which design priorities, testing methods, and asset needs differ.
- Tactics can move from rules and mission briefs into map/unit/ability validation plans.
- Godot asset planning uses `godot-prototype-asset-kit.*.md`; no naked spheres/capsules/cubes are accepted as playable unit proxies.
- External CC0 candidates and AI-generated 3D assets require brief, provenance, review, license notes, and Godot validation before import.
- `check-v0.8-genre-tracks` passes.

## 15. v0.9: Economy & Progression

Status: complete. v0.9 adds Economy & Progression, four design templates, a Tactics no-code dry run, review/evidence records, and `check-v0.9-economy-progression`.

Goals:

- Add economy and progression after a playable loop and content matrix exist.
- Support sources/sinks, rewards, progression, level/quest payouts, and tuning.
- Give tuning evidence instead of relying only on subjective feel.
- Keep commercial backend, payment, monetization, real telemetry services, engine implementation, and asset production out of scope.

Delivery form:

- Economy model.
- Progression map.
- Resource/reward table.
- Tuning loop.
- Economy/progression review gate.
- Tactics economy/progression dry run.
- v0.9 completion evidence.
- v0.9 static check.

Release bar:

- Resource sources and sinks form a closed loop.
- Progression explains player goals, pacing, and rewards.
- Tuning reports explain observation, hypothesis, change, and next validation.
- Tactics dry run covers action points, stamina, cooldowns, mission rewards, secondary objective rewards, failure compensation, unit level, and skill unlocks.
- No commercial backend, payment, paid-content design, real telemetry service, engine files, or new assets are created.
- `check-v0.9-economy-progression` passes.
- The next addendum is v0.9.1 Numerical Planning, and the next major version remains v0.10 Telemetry & Playtest Analytics.

### 15.1 v0.9.1: Numerical Planning

Status: complete. v0.9.1 adds Numerical Planning, three design templates, a Tactics no-code numerical dry run, review/evidence records, and `check-v0.9.1-numerical-planning`.

Goals:

- Turn level, combat, and system numbers into reviewable production records.
- Add level curve, combat parameter table, and system numerical plan templates.
- Connect TTK, EHP, DPR, action economy, rewards, costs, and progression pacing.
- Keep engine implementation, real telemetry, commercial backend, payment, asset production, and release balance approval out of scope.

Delivery form:

- Numerical Planning docs.
- Level curve template.
- Combat parameter table template.
- System numerical plan template.
- Tactics numerical dry run.
- v0.9.1 review gate and evidence.
- v0.9.1 static check.

Release bar:

- Anchor points exist before full curve filling.
- Combat parameters include TTK, EHP, DPR, action economy, cooldown, stamina, and threat range.
- System numbers connect rewards, costs, progression, combat, and failure compensation.
- No release balance values are approved.
- `check-v0.9.1-numerical-planning` passes.
- The next addendum is v0.9.2 Specialized Design Skills, and the next major version remains v0.10 Telemetry & Playtest Analytics.

### 15.2 v0.9.2: Specialized Design Skills

Status: complete. v0.9.2 adds six specialist design skills, Agent Skill Composition docs, role-agent bundles, updated skill routing, and `check-v0.9.2-design-skills`.

Goals:

- Move system design, combat design, level curve, combat parameter, and system-number work into dedicated skills.
- Let users speak in familiar production roles while AI tools execute composable skills.
- Keep design work reviewable before engine implementation, telemetry services, commercial backend, payment, asset generation, or release balance approval.

Delivery form:

- `system-design` skill.
- `combat-design` skill.
- `numerical-planning` skill.
- `level-curve` skill.
- `combat-parameters` skill.
- `system-numerics` skill.
- Agent Skill Composition docs.
- v0.9.2 static check.

Release bar:

- The six specialist skills use the standard `SKILL.md` structure.
- Agent Skill Composition defines Producer, Game Designer, Technical Designer, Combat Designer, Numerical Designer, and QA / Playtest role-agent bundles.
- Existing core skills route to the new specialist skills through `Next Skills`.
- No engine implementation, real telemetry, commercial backend, payment, asset generation, or release balance approval is created.
- `check-v0.9.2-design-skills` passes.
- The next major version remains v0.10 Telemetry & Playtest Analytics.

## 16. v0.10: Telemetry & Playtest Analytics

Goals:

- Add telemetry and playtest analytics after economy and progression specs stabilize.
- Connect playtest data back to design hypotheses.
- Clarify privacy, platform, data minimization, and local dry-run boundaries.

Delivery form:

- Telemetry event plan.
- Playtest analytics report.
- Tuning decision log.

Release bar:

- Every key data point maps to a design question.
- Data collection has privacy and platform boundaries.
- Tuning reports explain observation, hypothesis, change, and next validation.

## 17. v0.11: Narrative Design Pack

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

## 18. v0.12: Creative Production Expansion

Goals:

- Expand art, animation, environment, music, SFX, and UI production after design, genre, systems, economy, data, and narrative specs are more stable.
- Extend the brief, provenance, review, and engine validation patterns proven in v0.3 / v0.5b across more asset classes.
- Research creative AI tool adapters without rushing production APIs.

Delivery form:

- Art production plan.
- Animation brief.
- Environment asset brief.
- Music brief.
- SFX brief.
- UI asset brief.
- Creative tool adapter notes.
- Expanded provenance and review evidence.

Release bar:

- Every asset class starts from a brief, not open-ended generation.
- Assets need provenance, review, and engine validation before entering examples.
- Creative AI tools remain adapter candidates and cannot bypass human art/audio review.

## 19. v0.13: Procedural Content Pack

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

## 20. v0.14: Publishing & Release Readiness

Goals:

- Complete release, localization, accessibility, and store readiness.
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

## 21. v0.15: LiveOps & Post-launch

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

- v0.14 release readiness has basic evidence.
- At least one demo or small release has entered public playtest/release.
- Telemetry, release readiness, and feedback triage already have basic evidence.

## 22. v1.0: Reusable Production Pack

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

## 23. Future Planning: P2

P2 is not part of the first implementation batch; preserve it as research and roadmap direction:

- Community & Marketing: devlogs, community feedback, and update cadence.
- Monetization: pricing, demo strategy, DLC, and paid-content boundaries.
- LiveOps / Post-launch: patches, hotfixes, update roadmap, and player feedback triage, entering in v0.15.
- Modding / UGC: editors, user content, moderation, and copyright boundaries.
- Security / Privacy: online features, third-party SDKs, data collection, and security risk.

Entry criteria:

- v0.6-v0.15 design, systems, product entry, genre, economy, progression, telemetry, narrative, creative production, procedural content, release, and operations tracks have proved necessary.
- The project is truly entering release, growth, operations, or community phases.
- Privacy, compliance, and maintenance ownership are clear.

## 24. Milestones

| Milestone | Name | Version | Completion signal |
|---|---|---|---|
| M0 | Documentation Ready | v0.0 | Documentation package can guide repo and workflow pack delivery. |
| M1 | Workflow Pack Ready | v0.1 | Skills, templates, checks, and dry-run evidence are complete. |
| M2 | Godot Loop Ready | v0.2 | Boss Rush Godot prototype is playable. |
| M3 | Creative Production Ready | v0.3 | Asset brief/provenance/review/engine validation runs end to end. |
| M4 | Unreal Mapping Ready | v0.4 | The same mechanic maps to an Unreal 3D action slice. |
| M5 | v0.5 Consolidation Ready | v0.5 | Research pack, user feedback, Godot integration decision, and version rebase all have evidence. |
| M6 | Game Design & Systems | v0.6 | System, combat, encounter, tuning, and playtest hypotheses can hand off. |
| M7 | Product Entry Ready | v0.7 | `mgw init`, user journey, adapter rules, and safe boundaries are defined. |
| M8 | Genre Tracks Ready | v0.8 | The seven first genre tracks complete dry runs, including Tactics and Adventure / AVG. |
| M9 | Economy Progression Loop | v0.9 | Economy and progression feed system design and tuning decisions through a Tactics dry run. |
| M9.1 | Numerical Planning Ready | v0.9.1 | Level, combat, and system numbers can be reviewed before implementation. |
| M9.2 | Specialized Design Skills Ready | v0.9.2 | System, combat, numerical, level curve, combat parameter, and system numeric skills can be composed under production roles. |
| M10 | Telemetry Playtest Loop | v0.10 | Telemetry and playtest analytics feed tuning decisions. |
| M11 | Narrative Design Ready | v0.11 | World, characters, quests, dialogue, and lore consistency can be reviewed. |
| M12 | Creative Production Expansion Ready | v0.12 | Multiple asset classes can pass brief/provenance/review/engine validation. |
| M13 | Procedural Content Ready | v0.13 | Generated content is reproducible, reviewable, and reversible. |
| M14 | Publishing Readiness Ready | v0.14 | Demo release readiness can be judged. |
| M15 | LiveOps Ready | v0.15 | Released projects can keep updating and handling player feedback. |
| M16 | Reusable Production Pack | v1.0 | Other projects can reuse the full workflow. |

## 25. Recommended First Project Initialization Prompt

After creating the project, enter the first project initialization prompt in the selected AI coding tool:

```text
We are creating a game project with Muse Game Workshop. Target language: English. Target audience: English-speaking indie developers and small game teams. Locale: en-US unless otherwise stated. First read README, overall project plan, Vision, PRD, Product Entry & mgw init, User Journey, technical architecture, workflow, skill spec, production language guide, bilingual audience strategy, terminology glossary, handoff contracts, templates, delivery plan, v0.1 execution plan, P0 skill skeleton plan, v0.1 manifest, testing strategy, and roadmap. First produce the design summary and execution plan for the `mgw init` project workspace, including project workspace, muse.project.yaml, tool adapter, review gate, and validation plan. Wait for review approval before making changes. Do not implement game code and do not install MCP yet.
```

## 26. Risk Control

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
