---
name: art-direction
description: Use when a game or slice needs visual direction, readable style constraints, reject criteria, and asset brief guidance.
---

# Art Direction

## Use When

- A project needs a visual direction before asset briefs.
- Creative AI output is drifting in style or readability.
- A sample fixture needs visual constraints without final art production.

## Do Not Use When

- The task is only mechanic behavior or engine code.
- The asset already has an approved art direction and only needs review.
- The user wants to import assets before brief and provenance.

## Inputs

- Game pitch and player fantasy.
- Core loop and mechanic feedback needs.
- Reference images or style anchors.
- Target platform and engine constraints.
- Audience and locale.

## Outputs

- Visual direction summary.
- Readability goals.
- Do and do-not directions.
- Asset family priorities.
- Reject criteria.

## Workflow

1. Define the visual promise in relation to gameplay.
2. Identify readability needs for player, enemies, interactables, UI, and feedback.
3. Establish style anchors and forbidden directions.
4. Prioritize assets required for the current slice.
5. Define reject criteria before generation or sourcing.
6. Send asset-level work to `asset-brief`.

## Quality Bar

- The direction is usable by artists, AI tools, and reviewers.
- It protects gameplay readability.
- It includes explicit no-go directions.
- No asset generation, import, or finalization bypasses brief, provenance, and review.

## Common Failure Modes

- Describing mood without production constraints.
- Copying references too literally.
- Ignoring animation, UI, and level readability.
- Failing to define rejection criteria.

## Next Skills

- `asset-brief`
- `asset-review`
- `ux-flow`
- `level-blockout`
