---
name: ux-flow
description: Use when menu, HUD, tutorial, settings, feedback hierarchy, localization, or accessibility flow needs a game-production plan.
---

# UX Flow

## Use When

- A slice needs menus, HUD, tutorial, settings, or feedback hierarchy defined.
- A mechanic needs player-facing feedback and onboarding.
- UX risks affect playtest clarity.

## Do Not Use When

- The task is only internal engine architecture.
- No core loop or mechanic exists yet.
- The request is only visual art direction.

## Inputs

- Core loop or mechanic spec.
- Target player and locale.
- Platform controls.
- HUD and feedback needs.
- Accessibility and localization constraints.

## Outputs

- UX flow.
- HUD and feedback hierarchy.
- Tutorial/onboarding notes.
- Settings and accessibility notes.
- Localization and layout risks.

## Workflow

1. Define what the player must understand before, during, and after play.
2. Map menu, HUD, tutorial, pause/settings, and failure/retry flows.
3. Prioritize feedback for core mechanic readability.
4. Identify accessibility, localization, controller, and text overflow risks.
5. Define playtest questions for UX clarity.
6. Require review before implementing UI files or assets.

## Quality Bar

- UX supports the core loop instead of explaining everything.
- HUD elements do not obscure key action.
- Localization and accessibility risks are visible early.
- No UI code or asset import happens in v0.1.

## Common Failure Modes

- Creating a menu before the play loop is clear.
- Overloading the HUD.
- Treating tutorial text as a substitute for readable feedback.
- Ignoring localization and controller constraints.

## Next Skills

- `level-blockout`
- `playtest-report`
- `asset-brief`
- `godot-workflow`
