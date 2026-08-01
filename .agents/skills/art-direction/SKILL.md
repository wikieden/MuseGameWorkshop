---
name: art-direction
description: Use when a game or slice needs visual direction, readable style constraints, reject criteria, and asset brief guidance.
---

# Art Direction

## Use When

- A project needs a visual direction before asset briefs.
- A playable prototype needs a visual quality floor before engine work.
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
- Prototype asset state target: structural placeholder, readable prototype asset, or reviewed demo asset.

## Outputs

- Visual direction summary.
- Readability goals.
- Do and do-not directions.
- Asset family priorities.
- Prototype visual quality floor.
- Prototype proxy or demo asset kit direction.
- Reject criteria.

## Workflow

1. Define the visual promise in relation to gameplay.
2. Identify readability needs for player, enemies, interactables, UI, and feedback.
3. Define the prototype visual quality floor: silhouette, facing, faction, state, scale, and camera readability.
4. Decide whether the prototype uses mannequin-style robot proxies, sprites, standees, kitbash assets, or an AI-generated 3D demo asset kit.
5. Establish style anchors and forbidden directions.
6. Prioritize assets required for the current slice.
7. Define reject criteria before generation or sourcing.
8. Send asset-level work to `asset-brief`.

## Quality Bar

- The direction is usable by artists, AI tools, and reviewers.
- It protects gameplay readability.
- It includes explicit no-go directions.
- Playable prototype characters and key interactables are not naked spheres, capsules, or cubes unless that is the intended game fantasy.
- Mannequin-style proxies are original or properly licensed; Epic sample assets are not treated as default cross-engine Muse assets.
- No asset generation, import, or finalization bypasses brief, provenance, and review.

## Common Failure Modes

- Describing mood without production constraints.
- Copying references too literally.
- Copying sample mannequins or marketplace assets without checking license and distribution rights.
- Ignoring animation, UI, and level readability.
- Failing to define rejection criteria.

## Next Skills

- `asset-brief`
- `asset-review`
- `ux-flow`
- `level-blockout`
