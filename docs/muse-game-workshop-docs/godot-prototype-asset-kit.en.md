# Godot Prototype Asset Kit

Status: Draft  
Last source check: 2026-06-28  
Audience: English-speaking indie developers, technical artists, gameplay programmers, and AI-assisted asset creators.

This document defines the default prototype asset strategy for Godot projects using Muse Game Workshop. It does not approve importing any asset by itself. Every asset still needs an asset brief, provenance, review status, and Godot engine validation.

## 1. Purpose

The Godot Prototype Asset Kit exists to raise playable prototype readability without pretending to deliver final art. The kit should make a prototype readable in screenshots, short captures, and playtests while staying lightweight enough for rapid iteration.

The kit must solve these problems:

- Avoid naked spheres, capsules, and cubes as playable character or enemy proxies.
- Provide a reusable visual baseline for 2D, lightweight 3D, tactics, RPG, roguelike, and action prototypes.
- Keep Godot asset choices portable, licensed, and traceable.
- Give AI-generated 3D assets a controlled entry path.

## 2. Default Asset Decision

Muse should not use Unreal Manny / Quinn or other Epic sample assets as default Godot demo assets. Their role is useful as a reference pattern: a neutral, readable, animation-friendly proxy. Muse should instead use one of these safer routes:

1. Original Muse mannequin-style robot proxy assets.
2. AI-generated robot proxy assets with recorded brief, prompt/source, tool/model, license status, human edits, review status, and Godot validation.
3. External CC0 candidate assets only after the specific pack license and distribution scope are checked and recorded.

Default Godot import source format should be `glTF 2.0`, preferably `.glb` for compact distribution or `.gltf` when separate textures and text-reviewable scene data are useful.

## 3. Asset States

| State | Meaning | Godot use |
|---|---|---|
| Structural Placeholder | Graybox geometry, collision proxies, debug markers, blockout shapes | Allowed for layout and collision only |
| Readable Prototype Asset | Temporary but gameplay-readable asset | Required for playable characters, enemies, NPCs, and key interactables |
| Reviewed Demo Asset | Asset approved for external demos, screenshots, or videos | Requires brief, provenance, review, license notes, and engine validation |
| Release Candidate Asset | Candidate for shipping | Out of scope for prototype kit |
| Rejected Asset | Failed readability, license, performance, style, or validation | Must not enter example projects |

## 4. Minimum Kit

The first Godot prototype kit should stay small:

| Asset | Required readability |
|---|---|
| Player proxy | Silhouette, facing, faction color, selected state, hit state |
| Enemy proxy | Different silhouette or material from player, facing, attack-ready state |
| Neutral / NPC proxy | Non-hostile color and role distinction |
| Interactable | Clear affordance and active/inactive state |
| Obstacle | Blocking state and height/readability at gameplay camera distance |
| Pickup | Value type, collectable state, collected feedback |
| Goal marker | Objective destination, active/complete state |
| Move range marker | Tile or area highlight that does not hide units |
| Attack range marker | Distinct from movement range and readable under units |
| Selection ring | Current unit/target state |
| Facing arrow | Orientation for tactics and action prototypes |
| Simple VFX marker | Hit, counter, heal, buff, debuff, or interaction feedback |

## 5. Optional Animation Set

For humanoid or robot proxies:

- `idle`
- `walk`
- `attack`
- `hit`
- `death`
- `interact`
- `defend` / `guard`
- `selected` / `turn_start`

Do not block early prototypes on full animation coverage. The minimum playable bar is readable state feedback; animation can be staged.

## 6. Candidate Sources

Candidate sources are allowed only after per-asset review:

| Source | Why it is useful | Required caution |
|---|---|---|
| Muse original assets | Best default for redistribution and consistent style | Needs creation, source files, and license statement |
| AI-generated 3D assets | Fast custom proxy kit, can align to Muse visual direction | Requires prompt/source, tool/model, license/disclosure risk, human edits, and engine validation |
| Kenney | Broad public-domain game asset library | Verify the exact asset page and included license file before import |
| Quaternius | Low-poly 3D assets, many packs in glTF/FBX/OBJ and CC0-style licensing | Verify each pack's current license and source package |
| KayKit | Godot Asset Library lists multiple CC0 KayKit packs | Verify the specific Godot Asset Library entry and package license |

Do not import marketplace or sample assets as default Muse demo assets unless redistribution, modification, engine use, and public demo capture rights are explicit.

## 7. Godot Import Requirements

Required for every imported 3D prototype asset:

- Source asset path.
- Imported `.glb` or `.gltf` path.
- Godot wrapper scene path if used.
- Scale and pivot validation.
- Collision strategy.
- Material and faction color strategy.
- Animation availability.
- Camera-distance screenshot check.
- Performance note for triangle count, material count, texture size, and draw-call risk.
- Provenance record path.
- Review status.

Suggested structure:

```text
assets/prototype_3d/
  source/
  glb/
  textures/
  materials/
  scenes/
docs/assets/provenance/
```

## 8. Tactics-Specific Additions

Tactics prototypes need stronger readability than generic 3D prototypes:

- Player and enemy units must remain readable from the tactical camera.
- Move range and attack range cannot obscure faction or selected state.
- Tile ownership, blocked tiles, cover, hazard, and objective state must be visible.
- Facing arrows are required if facing affects rules.
- Selection, hover, target preview, and action confirmation must be visually distinct.

## 9. AI 3D Generation Workflow

AI-generated 3D assets may enter the kit only through this workflow:

```text
art-direction
  -> asset-brief
  -> generation or sourcing
  -> human cleanup
  -> provenance record
  -> asset-review
  -> Godot import validation
  -> reviewed demo asset decision
```

The default goal is not volume. The goal is a small readable set that makes gameplay validation and demo capture credible.

## 10. Validation Checklist

- No playable character, enemy, NPC, or key interactable is represented by a naked sphere, capsule, or cube.
- Assets are readable from gameplay camera distance.
- Player, enemy, neutral, interactable, obstacle, pickup, and objective roles are distinguishable.
- Tactics range markers do not hide unit state.
- `.glb` / `.gltf` imports without missing materials or broken scale.
- License and source are recorded for every external or AI-assisted asset.
- Asset state is recorded: structural placeholder, readable prototype asset, reviewed demo asset, release candidate, or rejected.
- Godot smoke test or manual editor validation is recorded before asset promotion.

## 11. Boundaries

This document does not:

- Generate assets.
- Import assets into a Godot project.
- Approve any external pack automatically.
- Convert prototype assets into release-candidate assets.
- Permit Epic sample assets as default Godot demo assets.

## 12. References

- Godot documentation: available 3D formats and glTF 2.0 import guidance.
- Kenney support: public-domain game asset licensing statement.
- Quaternius asset pages: CC0-style pack licensing and glTF/FBX/OBJ availability.
- Godot Asset Library: KayKit Game Assets entries and per-pack license listing.
