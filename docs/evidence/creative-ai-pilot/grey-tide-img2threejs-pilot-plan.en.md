# Grey Tide img2threejs Pilot Plan

Track: Creative AI Production Pilot

Language: English

Review Status: Approved for planning

Pilot Execution Status: Not approved

Asset Generation: Not run

Game Code Changes: Not approved

## 1. Pilot Goal

Use the Grey Tide Three.js vertical slice to validate a real, controlled, and traceable AI-assisted hard-surface 3D production chain. The pilot is not intended to prove that `img2threejs` can replace a 3D artist.

The pilot must answer:

- Are procedural Three.js assets more readable and editable than the current low-poly placeholders?
- Can the output expose the pivots, sockets, colliders, and destruction groups required by gameplay?
- Does multi-view review detect failures hidden by the reference angle?
- Are token cost, elapsed time, human rework, and browser performance worth further investment?
- Can the same asset brief route to manual modeling or a mesh-native tool after failure?

## 2. Current Approval Boundary

This file approves the pilot design only. This round does not:

- Install or invoke `img2threejs`.
- Generate or download references, models, textures, or other assets.
- Modify `/Users/wiki/Documents/gamestudio-codex`.
- Upload Grey Tide IP or unreleased material to a third-party service.
- Describe a candidate as reviewed-demo or release-candidate.

Execution requires a separate design summary, file impact, cost ceiling, reference-source decision, and Review Status.

## 3. Pilot Assets

| Asset ID | Asset | Production risk | Capability under test | Initial target state |
|---|---|---|---|---|
| `GT-PORT-CRATE-01` | Port cargo crate / tactical cover | Low | Silhouette, proportion, collision, instancing, and gameplay-camera readability | `readable-prototype` |
| `GT-MECH-MODULE-01` | Mech shoulder or weapon module | Medium-high | Pivot, socket, replaceable nodes, hit response, and part-destruction interface | `readable-prototype` |
| `GT-PORT-MACHINE-01` | Port control console or machine | Medium | Compound parts, material zones, interaction state, and environment-family consistency | `readable-prototype` |

The first round excludes complete hero mechs, people, faces, clothing, large port environments, vegetation, animated characters, and release assets.

## 4. Input Strategy

Each asset must use a team-owned, newly produced and fully documented, or explicitly licensed reference. Record before tool use:

- File hash, dimensions, and version.
- Creator or generation tool.
- Prompt, model, settings, and human edits.
- Input ownership and allowed usage.
- Whether third-party upload is permitted.
- Front, side, rear, and detail-view coverage.
- Inference policy for hidden regions.

Reject references involving real-world brands, protected game skins, imitation of a living artist's style, or a real person.

## 5. Execution Order

1. Establish or approve shared art direction for the three assets.
2. Complete an asset brief and budget for each asset.
3. Pin an `img2threejs` version or commit and record installation and invocation.
4. Run `GT-PORT-CRATE-01` first; failure does not automatically unlock the next assets.
5. Record input, output, comparison sheet, review, and next action for each build pass.
6. Move a candidate into an isolated Three.js test scene only after multi-view review.
7. Run TypeScript, build, browser, WebGL 2 fallback, and gameplay-camera smoke checks.
8. Record cost, human rework, performance, and asset-state decision.
9. Conduct a Producer, Art, Technical Art, and QA review after all assets finish or a stop condition fires.

## 6. Acceptance Criteria

The pilot passes only when:

- At least two of three assets are `Approved for readable-prototype`.
- Evidence includes the reference view, gameplay view, and two orbit views.
- Silhouette, facing, faction/interaction state, and scale remain readable from the 45-degree tactical camera.
- Critical parts exist as real structure rather than projection-only or front-plane illusion.
- Runtime hierarchy satisfies each asset's predeclared interaction requirement.
- TypeScript, production build, and browser smoke checks pass.
- WebGL 2 fallback works; the WebGPU direction does not conceal fallback failures.
- There are no unresolved console errors, blank canvases, missing assets, or disposal problems.
- Every asset has provenance, cost, human-edit, review, and validation records.
- At least one `continue`, `refine-*`, `switch-tool`, or `stop` decision has documented reasoning.

## 7. Cost And Stop Conditions

Execution review must fill these values before any run:

- Maximum generation rounds per asset: TBD.
- Maximum tokens per asset: TBD.
- Maximum service cost per asset: TBD.
- Maximum elapsed time per asset: TBD.
- Maximum human-edit time per asset: TBD.

Immediate stop conditions:

- Input rights or third-party upload boundaries are unclear.
- A critical structure does not improve for two rounds.
- Cost exceeds the approved ceiling.
- The asset remains unreadable from the gameplay camera.
- Draw calls, memory, loading, or fallback behavior become unacceptable.
- Tool-version drift prevents reproduction.

## 8. Expected Evidence Structure

After execution approval, use an isolated structure in the Grey Tide repository:

```text
docs/evidence/creative-ai-pilot/
  inputs/
  briefs/
  provenance/
  comparisons/
  reviews/
  validation/
src/mech-slg/render/procedural-assets/
```

This is a proposed structure, not a structure created in this round. The final path must follow the reviewed Grey Tide execution plan.

## 9. Post-pilot Decision

The retrospective chooses one outcome:

- `adopt-for-threejs-hard-surface`
- `continue-limited-pilot`
- `compare-mesh-native-tools`
- `manual-or-kitbash-preferred`
- `reject-adapter`

No outcome from three prototype assets proves readiness for characters, complete environments, or cross-engine production.
