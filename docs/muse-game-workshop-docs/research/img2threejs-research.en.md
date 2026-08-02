# img2threejs Independent Research Report

Version: Creative AI Production Pilot

Language: English

Research date: 2026-08-02

## 1. Decision

`img2threejs` is a strong candidate for Muse Game Workshop's first Three.js Procedural 3D Adapter, but it should not become Muse's general AI 3D production backend.

Recommended scope:

- Hard-surface props, mechanical modules, weapons, crates, building components, and small environment fixtures in Three.js projects.
- Prototype assets that benefit from reviewable TypeScript, versioned specifications, pivots, sockets, colliders, or destruction groups.
- Controlled reconstruction from one or more team-owned or licensed references, with explicit uncertainty for hidden geometry.

Not recommended yet:

- Release-quality characters, real-person likeness, complex organic creatures, or complete animated-character production.
- Treating procedural Three.js output as a Unity, Unreal, or Godot mesh deliverable.
- Unattended batch generation, final assets without human review, or final marketing art.

## 2. Product Position

`img2threejs` is not photogrammetry, a conventional image-to-mesh model, or an asset-download service. An AI coding agent rebuilds a reference as a procedural Three.js model and produces:

- An `ObjectSculptSpec` JSON document.
- A TypeScript factory returning a `THREE.Group`.
- A runtime hierarchy with components, pivots, sockets, colliders, and destruction groups.
- Renders, comparison sheets, and review history for staged build passes.

The project states support for Claude Code, Codex, and OpenCode. Its scripts use the Python 3.10+ standard library, with deterministic scripts enforcing rules and the model providing visual judgment.

## 3. Workflow Structure

```text
reference intake
  -> suitability and provenance check
  -> pre-spec assessment and quality contract
  -> ObjectSculptSpec
  -> strict-quality validation
  -> blockout
  -> structural pass
  -> form refinement
  -> material and surface passes
  -> lighting and interaction passes
  -> optimization
  -> multi-view render and comparison review
  -> continue / refine-spec / refine-code / request-input / stop
```

The most reusable ideas for Muse are not the image-to-3D claim itself:

1. Establish a quality contract before code generation.
2. Unlock one build pass at a time and repair only the spec or current implementation after failure.
3. Deliver one side-by-side comparison sheet as visual evidence for each review round.
4. Separate global similarity from critical-feature gates.
5. Record hidden regions, inferred regions, and approximations explicitly.
6. Emit diffable specifications and code for joint review by artists, technical artists, programmers, and AI coding tools.

## 4. Game-production Fit

| Asset type | Fit | Notes |
|---|---|---|
| Crates, cover, mechanical props | High | Clear silhouettes, component decomposition, collision, and destruction fit the output model |
| Weapons and mech modules | High | Hard-surface form, pivots, sockets, and replaceable parts map well |
| Building parts and small environment fixtures | Medium-high | Useful for procedural scenes, with draw-call, repetition, and material controls required |
| Complete mechs | Medium | Feasible for prototypes, but cost, animation interfaces, complexity, and multi-view requirements rise quickly |
| Characters, faces, and clothing | Low-medium | Better suited to stylized reconstruction than release-character production today |
| Large natural environments, vegetation, terrain | Low | The project's Environment Update remains future work |
| Final Unity, Unreal, or Godot assets | Low | The source of truth is Three.js code; cross-engine exporters remain roadmap items |

## 5. Technical Verification

The research checkout used the repository's latest `main` on 2026-08-02:

- Commit: `acd252c`.
- `SKILL.md` version: `1.4.3`.
- Python files: 78.
- Test-related files: 27.
- Recommended command executed: `python3 forge/tests/test_pipeline.py`.
- Result: 56 tests passed in approximately 21.7 seconds.

This demonstrates automated coverage for core specifications, generators, and gates. It does not prove that arbitrary references produce production-ready assets. Visual quality still depends on the input, AI model, human judgment, browser rendering, and iterative correction.

## 6. User-feedback Signals

Public feedback is early and anecdotal, so it is risk evidence rather than a benchmark:

- Positive examples cluster around buildings, city components, weapons, and other hard-surface subjects.
- One Codex user preferred the result to their previous Blender MCP attempt but still spent roughly half a day refining it.
- Negative reports focus on character quality, long-running loops, and token cost.
- Public cases include roughly 240k tokens for one asset, while other users still found simpler results expensive.

The Muse pilot must therefore record model, tokens, elapsed time, revision count, and final review verdict instead of showing only the best render.

## 7. License, Privacy, And Provenance

- The repository uses Apache License 2.0; adoption must retain its license and third-party notices.
- The code license does not grant rights to reference images, projected textures, brands, or the resulting asset by itself.
- A hosted converter may send references through its server, OpenRouter, and a downstream model. Unreleased IP requires a data-boundary review first.
- Muse should prefer the local skill workflow by default and record reference ownership, tool/model, prompt, settings, human edits, output license, and disclosure risk for every asset.
- Reconstructing protected game skins, trademarked products, or real people must not enter examples or releases merely because it is technically possible.

## 8. Muse Adapter Decision

Adopt it as an adapter candidate, not a core dependency.

Muse retains ownership of:

- Art direction.
- Asset brief and gameplay purpose.
- Reference and license admission.
- Asset state, cost budget, and human owners.
- Multi-view gameplay-readability review.
- Engine integration, performance, and release decisions.

The `img2threejs` adapter owns only:

- Controlled production of a procedural 3D spec and Three.js factory from references.
- Internal build-pass state.
- Tool-level comparison sheets and review records.
- Candidate runtime hierarchy output.

If the tool is unavailable, drifts in version, exceeds budget, or fails quality, the same upstream brief and acceptance criteria must route to manual modeling, Blender, a mesh-native AI tool, kitbashing, or licensed assets.

## 9. Recommended Validation Order

1. Validate the full delivery chain with a simple Grey Tide port crate.
2. Validate pivots and sockets with a mech weapon or shoulder module.
3. Validate a medium port machine and repetition optimization.
4. Only then decide whether to study complete mechs, environments, or a mesh-native adapter.

This round does not install the tool, generate assets, or change Grey Tide code. Pilot execution requires separate review approval.

## 10. References

- Repository and README: https://github.com/img2threejs/img2threejs
- Architecture: https://github.com/img2threejs/img2threejs/blob/main/docs/ARCHITECTURE.md
- Roadmap: https://github.com/img2threejs/img2threejs/blob/main/ROADMAP.md
- License: https://github.com/img2threejs/img2threejs/blob/main/LICENSE
- Codex experiment feedback: https://www.reddit.com/r/aigamedev/comments/1v169hl/img2threejs_and_codex_experiments/
- Community cost and character feedback: https://www.reddit.com/r/StableDiffusion/comments/1v4jd0a/img2threejs_rebuild_the_object_in_a_reference/
