---
name: level-blockout
description: Use when a level, arena, encounter, sightline, pacing, or navigation plan needs graybox-level structure before art pass.
---

# Level Blockout

## Use When

- A slice needs a test arena, graybox, encounter space, or navigation plan.
- A mechanic needs spatial validation.
- The team needs to review level flow before art production.

## Do Not Use When

- The task is only narrative, asset provenance, or final environment art.
- No core mechanic or encounter goal exists.
- The user wants final level art before graybox review.

## Inputs

- Core loop or mechanic spec.
- Encounter goal.
- Camera and control assumptions.
- UX and feedback requirements.
- Engine constraints, if known.

## Outputs

- Blockout goal.
- Space layout notes.
- Encounter beats.
- Navigation, sightline, and pacing notes.
- Review checklist and playtest questions.

## Workflow

1. Define what the space must prove.
2. Map player start, enemy/boss placement, hazards, boundaries, and retry flow.
3. Identify sightlines, readability, pacing, and navigation constraints.
4. Mark what should stay graybox until playtest evidence exists.
5. Define review and playtest questions.
6. Require review before creating level files or environment assets.

## Quality Bar

- The blockout validates gameplay before art pass.
- It is small enough to test repeatedly.
- Encounter beats are tied to the mechanic spec.
- No Godot/Unreal level files are created during v0.1.

## Common Failure Modes

- Decorating before validating movement and combat.
- Building too large a level.
- Forgetting camera, retry, and navigation constraints.
- Treating blockout as final environment design.

## Next Skills

- `playtest-report`
- `ux-flow`
- `creative-asset-pipeline`
- `godot-workflow`
