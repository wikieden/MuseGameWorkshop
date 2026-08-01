---
name: creative-asset-pipeline
description: Use when art, animation, VFX, music, sound, UI, or other creative AI assets need a brief-to-review-to-engine-validation workflow.
---

# Creative Asset Pipeline

## Use When

- A project needs creative assets from human or AI-assisted tools.
- Asset work needs brief, provenance, review, and engine validation gates.
- A sample game needs a no-code creative asset plan.
- A prototype or demo needs a small reusable 3D asset kit with readable proxy characters and interactables.

## Do Not Use When

- The task is only gameplay spec with no asset dependency.
- The asset already has complete provenance and only needs final review.
- The user asks to generate final release assets before gameplay is validated.

## Inputs

- Slice or mechanic goal.
- Art direction or style constraints.
- Asset categories.
- Target engine or placeholder level.
- Tool, license, and platform constraints.

## Outputs

- Asset pipeline plan.
- Common 3D prototype asset kit plan, when needed.
- Required briefs.
- Provenance requirements.
- Review gates.
- Engine validation plan.
- Asset states and blockers.

## Workflow

1. Identify assets required for gameplay feedback first.
2. Require art direction or asset brief before generation or sourcing.
3. Define provenance fields: tool, prompt, model/service, version, references, license, human edits, usage scope.
4. Define review gates for style, readability, technical format, license, and disclosure.
5. Separate structural placeholder, readable prototype asset, reviewed demo asset, release-candidate, and rejected assets.
6. For demo quality, plan a small reusable set before generating volume: player proxy, enemy proxy, neutral/NPC proxy, interactable, obstacle, pickup, target marker, move/attack range marker, and simple VFX marker.
7. Require review approval before importing assets into an engine example.

## Quality Bar

- No asset enters the project without brief, provenance, and review status.
- Gameplay readability beats decorative asset volume.
- Playable prototypes use readable prototype assets for characters and key interactables, not naked spheres, capsules, or cubes.
- Mannequin-style robot proxies are acceptable when original, properly licensed, or AI-generated with recorded provenance.
- AI-assisted assets have license and disclosure status.
- In v0.1, this skill produces planning only and no asset files.

## Common Failure Modes

- Generating many assets without a brief.
- Confusing a pretty image with a usable game asset.
- Missing license, source, or prompt records.
- Importing assets before review.
- Treating third-party sample assets as redistributable demo assets without checking license and usage scope.

## Next Skills

- `art-direction`
- `asset-brief`
- `asset-review`
- `ux-flow`
