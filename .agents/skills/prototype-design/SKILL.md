---
name: prototype-design
description: Use before entering Godot, Unreal, gameplay coding, or engine automation when a game idea needs a higher-quality prototype design gate with prototype goal, playable promise, scope, readable prototype visuals, engine mapping, validation plan, and cut list.
---

# Prototype Design

## Use When

- The user wants to start a prototype after `mgw-init`, Game Start, game intake, core loop, or mechanic spec.
- The user asks to enter Godot, Unreal, gameplay coding, editor automation, or implementation.
- A prototype plan feels too shallow to hand to a Gameplay Programmer, Technical Designer, QA, or Art Director.
- A team needs a clear quality gate before creating engine files, code, assets, or test scenes.
- A playable prototype needs better visual readability than naked spheres, capsules, or cubes.

## Do Not Use When

- The user is only creating the first `docs/00-game-start.md`.
- The user only needs high-level ideation with no prototype intent.
- A detailed prototype design gate is already approved and the task is only execution.
- The request is only final art, release, marketing, or LiveOps planning.

## Inputs

- Game Start, pitch, or intake brief.
- Core loop draft.
- Mechanic spec or selected high-risk mechanic.
- Target genre and platform.
- Engine preference, if known.
- Team size and timebox.
- Known asset, UI, audio, or accessibility constraints.
- Prototype art direction, reference constraints, or asset licensing constraints if known.

## Outputs

- Prototype goal.
- Playable promise.
- Core mechanic readiness.
- Moment-to-moment flow.
- Content scope and explicit exclusions.
- Placeholder policy.
- Prototype Visual Quality Floor.
- Prototype asset state plan.
- Engine mapping.
- Validation plan.
- Cut list.
- Prototype Design Gate with review status.

## Workflow

1. Restate what the prototype must prove in one sentence.
2. Define the playable promise: what the player can do within 30 seconds and what feedback proves it is working.
3. Check core mechanic readiness: inputs, states, timing, parameters, feedback, failure cases, edge cases, and test criteria.
4. Map the moment-to-moment flow from start, input, feedback, success, failure, retry, and exit.
5. Define content scope: minimum actors, units, enemies, levels, items, skills, UI screens, audio cues, and what is explicitly out of scope.
6. Define placeholder policy: structural placeholders, readable prototype assets, reviewed demo assets, temp audio, and minimum readability requirements.
7. Define the Prototype Visual Quality Floor: silhouette, facing, faction, role, state, interactability, scale, and camera readability.
8. Decide whether the prototype needs a mannequin-style readable robot proxy or a small AI-generated 3D prototype asset kit.
9. Map the design to engine-neutral tasks and, if selected, Godot / Unreal surfaces.
10. Produce a validation plan: manual playtest script, pass criteria, fail criteria, screenshot/log needs, visual readability checks, and follow-up decision.
11. Create a cut list with must-keep, can-cut, and do-not-start items.
12. Stop at the review gate until the user marks `Review Status: Approved`.

## Prototype Design Gate

Before implementation, the prototype design must answer:

- **Prototype Goal**: What is being validated, and what is not being validated?
- **Playable Promise**: What can the player do within 30 seconds?
- **Core Mechanic Readiness**: Are inputs, states, parameters, feedback, edge cases, and tests specified?
- **Moment-to-Moment Flow**: Does the prototype have a start, action, response, failure, retry, and exit path?
- **Content Scope**: What is the smallest amount of content needed?
- **Placeholder Policy**: Which objects can stay structural placeholders, which need readable prototype assets, and which need reviewed demo assets?
- **Prototype Visual Quality Floor**: Can players and reviewers identify character role, faction, facing, state, interactable objects, and important feedback from gameplay camera distance?
- **Engine Mapping**: Which scenes/scripts/resources or actors/components/data assets are expected?
- **Validation Plan**: How will the team know the prototype succeeded or failed?
- **Cut List**: What gets cut first if time runs short?

## Prototype Asset States

- **Structural Placeholder**: graybox geometry, collision proxies, debug markers, and blockout shapes. These can use spheres, capsules, or cubes, but should not represent playable characters, enemies, NPCs, or key interactables in a playable prototype unless the game fantasy itself requires that shape.
- **Readable Prototype Asset**: temporary but readable gameplay asset. It must show silhouette, facing, faction, role, scale, and relevant state. Examples include a low-poly mannequin-style robot, standee, temporary sprite, kitbashed proxy, or AI-generated 3D prototype mesh with clear provenance.
- **Reviewed Demo Asset**: a prototype asset approved for recorded demos or external playtests. It needs brief, provenance, review status, license notes, human modification notes, and engine validation notes.

## Prototype Visual Quality Floor

- Player characters, enemies, NPCs, and key interactables cannot be represented by naked spheres, capsules, or cubes in playable prototypes.
- A mannequin-style readable robot proxy is acceptable when it is original, licensed for the intended engine and distribution, or generated under a recorded asset brief.
- Unreal sample mannequins can be used only when their license and project context allow it. Do not make Epic sample assets the default cross-engine Muse demo asset.
- AI-generated 3D assets can be used for demo quality if they pass `asset-brief`, provenance, `asset-review`, and engine validation.
- For tactics, RPG, Action, and similar prototypes, screenshots should clearly show player side, enemy side, move targets, attack targets, selected unit, blocked tiles or spaces, and current state.

## Quality Bar

- A Producer can decide whether the prototype is worth building.
- A Game Designer can see the core fun hypothesis and scope boundaries.
- A Technical Designer or Gameplay Programmer can map the work into engine tasks.
- QA can run the prototype test without guessing the expected result.
- Art, UI, and audio contributors can distinguish placeholder needs from production assets.
- Reviewers can understand core roles, teams, facing, interactables, and state feedback from prototype screenshots or short capture.
- The plan proves gameplay quality, not content quantity.
- No code, engine project, MCP automation, or asset import starts before review approval.

## Common Failure Modes

- Treating a vague feature list as a prototype design.
- Letting the prototype grow into a vertical slice too early.
- Missing failure, retry, feedback, or edge cases.
- Requiring final art, animation, or music before gameplay validation.
- Shipping a playable prototype where characters or enemies are naked spheres, capsules, or cubes.
- Copying sample mannequins or marketplace assets without checking license and distribution rights.
- Generating many AI 3D assets without brief, provenance, review, or engine validation.
- Writing engine-specific tasks before engine-neutral intent is clear.
- Forgetting QA, evidence, pass/fail criteria, or cut list.

## Next Skills

- `engine-portability`
- `godot-workflow`
- `unreal-workflow`
- `vertical-slice-planner`
- `art-direction`
- `asset-brief`
- `asset-review`
- `playtest-report`
