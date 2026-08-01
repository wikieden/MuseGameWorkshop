# Tactics Track

Status: Draft  
Version scope: v0.8  
Review Status: Approved

## Player Promise

The player reads a tactical situation, chooses unit actions under spatial constraints, and wins through positioning, ability timing, and risk management.

## Core Loop Emphasis

```text
read map state -> select unit -> preview move / attack / skill -> commit action -> enemy responds -> update objective -> repeat
```

## Required Deliverables

- Tactics ruleset.
- Grid or spatial map spec.
- Unit matrix.
- Ability spec.
- Terrain and cover rules.
- Mission brief.
- Encounter table.
- Tactical AI brief.
- UI and readability spec.
- Tactics playtest checklist.
- Godot Prototype Asset Kit needs.

## Prototype Validation

The prototype must prove:

- Movement rules are clear.
- Attack and skill ranges are readable.
- Unit roles are distinguishable.
- Enemy response is understandable.
- Mission objective changes player decisions.
- Players can predict consequences before committing.

## Asset And UX Needs

Tactics prototypes require stronger readability than generic 3D prototypes. The minimum Godot asset needs are:

| Asset | Required readability |
|---|---|
| Player proxy | faction color, selected state, facing, role |
| Enemy proxy | hostile color, intent or threat state, facing |
| NPC / neutral proxy | non-hostile role and interaction state |
| Grid tile | walkable space and coordinate readability |
| Blocked tile | obstacle or invalid movement state |
| Move range marker | movement area without hiding unit state |
| Attack range marker | distinct from movement range |
| Selection ring | selected unit, target, and hover state |
| Facing arrow | orientation when facing affects rules |
| Objective marker | capture, defend, escape, or interact target |
| Simple VFX marker | hit, guard, heal, buff, debuff, or status feedback |

These are requirements for `Readable Prototype Asset`, not final art. Real `.glb` / `.gltf` files require a separate approved asset task.

## QA And Playtest Checks

- Can players identify allies, enemies, neutral units, objectives, and blocked spaces from the tactical camera?
- Can players preview movement, attack, skill, and facing consequences?
- Do range markers obscure important unit state?
- Does the mission objective create meaningful decisions?
- Does enemy behavior feel legible rather than arbitrary?

## Explicit Exclusions

- Full campaign.
- Full tactical AI.
- Final unit models.
- Generated or imported `.glb` / `.gltf` files.
- Engine implementation before review approval.
