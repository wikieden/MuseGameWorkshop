---
name: creative-asset-pipeline
description: Use when art, animation, VFX, music, sound, UI, or other creative AI assets need a brief-to-review-to-engine-validation workflow.
---

# Creative Asset Pipeline

## Use When

- A project needs creative assets from human or AI-assisted tools.
- Asset work needs brief, provenance, review, and engine validation gates.
- A sample game needs a no-code creative asset plan.

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
5. Separate placeholder, prototype, reviewed, release-candidate, and rejected assets.
6. Require review approval before importing assets into an engine example.

## Quality Bar

- No asset enters the project without brief, provenance, and review status.
- Gameplay readability beats decorative asset volume.
- AI-assisted assets have license and disclosure status.
- In v0.1, this skill produces planning only and no asset files.

## Common Failure Modes

- Generating many assets without a brief.
- Confusing a pretty image with a usable game asset.
- Missing license, source, or prompt records.
- Importing assets before review.

## Next Skills

- `art-direction`
- `asset-brief`
- `asset-review`
- `ux-flow`
