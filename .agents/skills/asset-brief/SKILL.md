---
name: asset-brief
description: Use when a specific creative asset needs purpose, constraints, AI tool inputs, provenance fields, review criteria, and engine validation notes.
---

# Asset Brief

## Use When

- A visual, animation, audio, UI, VFX, 3D, material, or localization asset needs a production brief.
- AI tools need clear prompt, reference, license, and usage constraints.
- A prototype asset needs to be reviewed before project entry.
- A common 3D prototype asset kit needs reusable demo-quality proxies.

## Do Not Use When

- There is no approved art direction or gameplay need.
- The task is only broad creative brainstorming.
- The asset has already been rejected and needs a new direction.

## Inputs

- Art direction or asset pipeline plan.
- Asset purpose.
- Gameplay feedback requirement.
- Technical format constraints.
- Tool and license constraints.

## Outputs

- Asset purpose and usage scope.
- Style and readability requirements.
- Technical constraints.
- Prompt/reference guidance.
- Asset state: structural placeholder, readable prototype asset, reviewed demo asset, release-candidate, or rejected.
- Provenance fields.
- Review criteria and owner.

## Workflow

1. State why the asset exists in gameplay or UX terms.
2. Define required and forbidden qualities.
3. Specify size, format, loop, timing, naming, or engine constraints when known.
4. Assign the asset state and target review level.
5. Define AI tool inputs and provenance fields.
6. Define acceptance and rejection criteria.
7. Route the asset to `asset-review` after production or candidate selection.

## Quality Bar

- The brief is specific enough for a human or AI-assisted creator.
- It makes license and usage scope explicit.
- It distinguishes placeholder, prototype, reviewed, and release-candidate states.
- Readable prototype assets specify silhouette, facing, faction, role, scale, state feedback, and camera readability.
- AI-generated 3D assets include tool, model/service, prompt/source description, references, generation settings when available, license, and human modification notes.
- No asset can become release-candidate without provenance and review.

## Common Failure Modes

- Asking for style without gameplay purpose.
- Omitting format, timing, or engine constraints.
- Forgetting license and prompt provenance.
- Treating a naked sphere, capsule, or cube as a playable character proxy.
- Accepting AI output because it looks impressive but fails readability.

## Next Skills

- `asset-review`
- `creative-asset-pipeline`
- `godot-workflow`
- `unreal-workflow`
