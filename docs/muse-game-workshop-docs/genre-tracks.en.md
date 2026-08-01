# Genre Tracks

Status: Draft  
Version scope: v0.8  
Review Status: Approved  
Audience: English-speaking indie developers and small game teams.

Genre Tracks define how Muse Game Workshop adapts the shared production workflow to different game types without turning the project into a rigid genre taxonomy. The core workflow remains the same:

```text
mgw-init
  -> game-intake
  -> core-loop
  -> mechanic-spec
  -> prototype-design
  -> review gate
  -> engine / asset / QA loop only after approval
```

The genre track adds production emphasis: what needs deeper design, which deliverables are required, how prototype validation differs, and what asset readability must prove.

## 1. Scope

v0.8 covers seven first tracks:

| Track | Purpose |
|---|---|
| Action | Moment-to-moment control, timing, feedback, combat feel |
| Roguelike | Run structure, procedural content, risk/reward, replayability |
| RPG | Character growth, party/role design, quests, world and progression |
| Puzzle | Rules, affordances, solution space, hinting, difficulty curve |
| Visual Novel | Branching narrative, character routes, dialogue, UI and localization |
| Tactics | Grid/space rules, units, abilities, encounters, tactical AI |
| Adventure / AVG | Exploration, investigation, inventory, dialogue, scene progression |

Tactics is the priority validation track because it stresses rules, units, maps, UI readability, AI behavior, and Godot prototype asset needs.

## 2. Shared Track Contract

Each genre track must define:

- Player promise.
- Core loop emphasis.
- Main production risks.
- Required design deliverables.
- Prototype validation method.
- Asset and UX readability needs.
- QA and playtest checks.
- Explicit exclusions.

Tracks do not bypass review gates. A genre track is a planning and handoff surface, not permission to create code, import assets, or open an engine project.

## 3. Deliverables

v0.8 creates:

- One overview: `genre-tracks.en.md` / `genre-tracks.zh.md`.
- Seven track specs under `genre-tracks/`.
- One Tactics dry run under `docs/evidence/v0.8/`.
- One v0.8 review gate and evidence record.
- One check entry point: `tools/checks/check-v0.8-genre-tracks`.

## 4. Godot Prototype Asset Kit Tie-In

When a track targets Godot, it must reference `godot-prototype-asset-kit.*.md` if prototype visuals matter. Playable prototypes cannot use naked spheres, capsules, or cubes for player characters, enemies, NPCs, or key interactables.

For Tactics, the minimum Godot asset needs are:

- Player proxy.
- Enemy proxy.
- NPC or neutral proxy.
- Grid tile.
- Blocked tile.
- Move range marker.
- Attack range marker.
- Selection ring.
- Facing arrow.
- Objective marker.
- Simple VFX marker.

Real `.glb` / `.gltf` asset generation or import is not part of v0.8. Assets must go through `art-direction`, `asset-brief`, provenance, `asset-review`, and Godot validation in a later approved task.

No real asset generation, engine file creation, MCP installation, or editor automation is approved by this genre-track package.

## 5. Track Files

- `genre-tracks/action.en.md`
- `genre-tracks/roguelike.en.md`
- `genre-tracks/rpg.en.md`
- `genre-tracks/puzzle.en.md`
- `genre-tracks/visual-novel.en.md`
- `genre-tracks/tactics.en.md`
- `genre-tracks/adventure-avg.en.md`

## 6. Release Bar

v0.8 is complete when:

- All seven tracks exist in Chinese and English.
- Tactics has a dry run from rules to Godot asset kit needs.
- The Godot prototype asset strategy is referenced where prototype readability matters.
- v0.8 evidence records that no real assets, engine projects, MCP tools, or game code were created.
- `check-v0.8-genre-tracks` passes.

## 7. Explicit Non-Goals

v0.8 does not:

- Cover every game genre.
- Generate or import real assets.
- Create `.glb`, `.gltf`, `.tscn`, `.gd`, `.tres`, `.uasset`, or `.umap` files.
- Install Godot AI, Godot-MCP, UE-MCP, or other MCP servers.
- Implement a real `mgw` CLI.
- Produce a playable Godot or Unreal project.
