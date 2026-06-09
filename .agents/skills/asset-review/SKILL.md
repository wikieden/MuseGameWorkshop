---
name: asset-review
description: Use when a candidate asset needs review for style fit, gameplay readability, technical format, provenance, license, and release eligibility.
---

# Asset Review

## Use When

- A candidate asset is ready for review.
- AI-generated or AI-assisted asset provenance needs verification.
- A team must decide whether an asset can enter a prototype or release candidate state.

## Do Not Use When

- No asset brief exists.
- The task is broad art direction.
- The request is to generate new assets before review criteria are clear.

## Inputs

- Asset brief.
- Candidate asset description or file reference.
- Provenance record.
- Technical constraints.
- Target usage scope.

## Outputs

- Review verdict.
- Style and gameplay-readability notes.
- Technical-format notes.
- License/provenance status.
- Required changes.
- Asset state decision.

## Workflow

1. Compare the candidate against the asset brief.
2. Check gameplay readability and UX feedback value.
3. Check technical constraints and engine import readiness.
4. Check provenance, license, human edits, and platform disclosure status.
5. Assign state: placeholder, prototype, reviewed, release-candidate, or rejected.
6. Block engine entry if brief, provenance, or review is missing.

## Quality Bar

- The verdict is explicit and actionable.
- Release-candidate status requires provenance, license confidence, and human review.
- The review records risks instead of hiding them.
- Import or code changes require approved review gate and impact scope.

## Common Failure Modes

- Approving assets for visual appeal alone.
- Ignoring license or source uncertainty.
- Missing technical import constraints.
- Treating placeholder assets as release candidates.

## Next Skills

- `creative-asset-pipeline`
- `asset-brief`
- `godot-workflow`
- `unreal-workflow`
