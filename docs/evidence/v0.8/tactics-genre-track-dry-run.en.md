# Tactics Genre Track Dry Run

Status: Draft  
Review Status: Approved  
Version scope: v0.8  
Fixture: Counter Trial Tactics

This dry run does not create a Godot project, game code, or assets. It validates that a Tactics idea can move through the Muse workflow into a prototype-ready plan and Godot Prototype Asset Kit needs.

## 1. Game Start

Working title: Counter Trial Tactics  
Genre: Tactics / lightweight 3D Godot prototype candidate  
Player promise: win a small tactical encounter by using facing, guard, counter windows, and terrain to defeat stronger enemies.

## 2. Pitch

A compact tactics prototype where three player units survive an arena trial against a stronger boss unit and two support enemies. The player wins by controlling facing, baiting attacks, using guard/counter timing, and exploiting terrain.

## 3. Core Loop

```text
read grid state
  -> select unit
  -> preview move / facing / ability
  -> commit action
  -> resolve enemy intent
  -> update guard, counter window, and objective state
  -> repeat until boss defeated or party routed
```

## 4. Tactics Ruleset

This Tactics ruleset is intentionally small enough for a first Godot prototype plan.

- Grid: square grid, small arena, 8 x 8 target size.
- Turns: player phase, enemy phase.
- Actions per unit: move + one action.
- Facing: front, side, and back matter for counter and damage modifiers.
- Guard: reduces incoming front damage and opens a counter window if timing/position rules pass.
- Counter: can trigger after a guarded enemy attack if the target has stamina.
- Stamina: spent by guard and counter; recovered at turn start.
- Terrain: blocked tiles, cover tiles, hazard tiles, objective tiles.

## 5. Grid Map Spec

Minimum map:

- One central boss lane.
- Two side cover clusters.
- One hazard strip.
- Two objective tiles that force repositioning.
- Spawn zones for player and enemy sides.

Readability requirement: blocked tiles, cover, hazard, movement range, attack range, selected unit, facing, and objective state must remain visible from the tactical camera.

## 6. Unit Matrix

| Unit | Side | Role | Key stats | Prototype purpose |
|---|---|---|---|---|
| Vanguard | Player | Guard/counter tank | high guard, medium move | validates facing and counter |
| Striker | Player | Flanker | high damage, low guard | validates side/back attack choices |
| Support | Player | Heal/buff | low damage, support skill | validates support timing |
| Boss | Enemy | Heavy threat | high HP, telegraphed attack | validates threat reading |
| Skirmisher | Enemy | Flanker | high move | validates positioning pressure |
| Drone | Enemy | Objective pressure | low HP, ranged poke | validates target priority |

## 7. Ability Spec

| Ability | Owner | Range | Purpose | Readability need |
|---|---|---|---|---|
| Guard Stance | Vanguard | self | reduce front damage, enable counter | guard icon and facing arrow |
| Counter Strike | Vanguard | melee | punish guarded attack | counter VFX marker |
| Flank Slash | Striker | melee side/back | reward positioning | side/back preview marker |
| Rally Patch | Support | 2 tiles | restore stamina or small HP | support VFX marker |
| Heavy Swing | Boss | frontal cone | telegraphed high damage | attack range marker |
| Harass | Skirmisher | melee | pressure weak units | intent marker |

## 8. Mission Brief

Objective: defeat the Boss before three player units are routed.  
Secondary objective: hold at least one objective tile for two turns to gain stamina recovery.  
Failure: all player units defeated or boss rage timer reaches 6 turns.

## 9. Tactical AI Brief

Enemy AI should be legible:

- Boss prioritizes nearest front target and telegraphs Heavy Swing.
- Skirmisher prefers side/back attacks on low-guard units.
- Drone pressures objective tiles or weakened units.
- AI does not use hidden information.

## 10. Prototype Design Gate

Prototype goal: validate whether facing, guard, and counter create meaningful tactical decisions.  
Playable promise: within 30 seconds, the player can select a unit, preview movement, see facing, and understand one enemy threat.  
Content scope: one small map, three player units, three enemy units, six abilities.  
Placeholder policy: structural placeholders only for tiles and collision; units require readable prototype assets.  
Validation plan: one manual playtest script, one dry run checklist, screenshots for movement/attack/facing readability.  
Cut list: remove Support first, then hazard tiles, but keep facing, guard, counter, and player/enemy proxies.

## 11. Godot Prototype Asset Kit Needs

Required readable prototype assets:

- Player proxy: faction color, facing arrow, selected state.
- Enemy proxy: hostile color, intent marker, facing arrow.
- NPC / neutral proxy: optional for this dry run.
- Grid tile: walkable.
- Blocked tile.
- Cover tile.
- Hazard tile.
- Move range marker.
- Attack range marker.
- Selection ring.
- Facing arrow.
- Objective marker.
- Simple VFX marker for guard, counter, hit, and support.

Asset state target: `Readable Prototype Asset`.  
No `.glb` / `.gltf` file is generated or imported by this dry run.

## 12. Playtest Questions

- Did players understand facing before committing an action?
- Did guard/counter feel like a tactical decision rather than a hidden reaction?
- Did range markers hide any unit state?
- Did enemy intent feel readable?
- Did the objective tile change movement decisions?

## 13. Handoff

Next approved work may split into:

- Tactics mechanic spec.
- Godot scene/resource mapping plan.
- Godot Prototype Asset Kit asset briefs.
- Playtest checklist.

Each requires review approval before implementation, asset generation, or import.
