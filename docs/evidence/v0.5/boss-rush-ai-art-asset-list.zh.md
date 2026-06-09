# Boss Rush v0.5b AI Art Asset List

版本：v0.5b

语言：中文

日期：2026-06-09

## 1. Asset List Goal

本清单用于 Boss Rush / 《反击试炼》AI 美术 dry run。它只定义资产需求和 review 范围，不代表已经生成或导入资产。

## 2. Asset Families

| Asset ID | Asset | Type | AI Role | Initial State | Target State | Engine Target |
|---|---|---|---|---|---|---|
| `BR-AIART-001` | Boss silhouette exploration | Character / Boss | Generate shape directions for human selection | `reference-only` | `reference-only` | None |
| `BR-AIART-002` | Arena moodboard | Environment | Explore mood, palette, material language | `reference-only` | `reference-only` | None |
| `BR-AIART-003` | Counter VFX direction | VFX | Explore readable counter feedback shapes | `reference-only` | `prototype` | Godot test scene |
| `BR-AIART-004` | HUD combat icons | UI | Explore parry, stamina, counter icon language | `reference-only` | `prototype` | Godot HUD |
| `BR-AIART-005` | Store capsule draft | Marketing art | Explore composition and promise only | `reference-only` | `reference-only` | None |

## 3. Excluded Assets

| Excluded Asset | Reason |
|---|---|
| Final player character sprite/model | Core feel and art direction are not mature enough. |
| Final Boss model | Requires modeling, rigging, animation, readability, and licensing review. |
| Final arena background | Needs level readability and performance validation first. |
| Final store capsule | Requires release readiness, platform disclosure, legal review, and final art direction. |
| Live-generated visual content | Out of near-term scope and requires runtime guardrails. |

## 4. State Rules

- `BR-AIART-001`, `BR-AIART-002`, and `BR-AIART-005` stay `reference-only` in this dry run.
- `BR-AIART-003` and `BR-AIART-004` may become `prototype` only after candidate files exist, provenance is recorded, and engine validation passes.
- No v0.5b asset may become `reviewed` or `release-candidate`.

## 5. Handoff Notes

- Art Director receives the full list and decides whether each asset family is worth production.
- Game Designer confirms gameplay purpose for each visual feedback asset.
- Technical Artist defines import constraints before any candidate file enters Godot or Unreal.
- Release Manager reviews disclosure risk before any player-facing or store-facing use.

