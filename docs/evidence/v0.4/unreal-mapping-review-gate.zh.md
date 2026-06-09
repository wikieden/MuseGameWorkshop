# v0.4 Unreal Mapping Slice Review Gate

版本：v0.4

语言：中文

日期：2026-06-09

## 1. Review Gate

- Review Status: Approved
- Reviewer: User directive, 2026-06-09, "ok没问题"
- Scope Reviewed: v0.4 Unreal Mapping Slice design request
- Required Changes: None for the static Unreal mapping scaffold. PIE map and binary `.uasset` / `.umap` creation still require Unreal Editor availability.
- Notes: Approval permits a contained Unreal mapping scaffold under `examples/unreal-boss-rush/`, the v0.4 check entry, and v0.4 playtest evidence. It does not approve final art/audio assets, release packaging, store material, commercial creative-tool API integration, or a full Unreal game.

## 2. Approved Deliverables

v0.4 may create:

| Deliverable | Planned Path | Status |
|---|---|---|
| Unreal project fixture | `examples/unreal-boss-rush/CounterTrial.uproject` | Approved |
| PIE test map | `examples/unreal-boss-rush/Content/CounterTrial/Maps/M_CounterTrial_PIE.umap` | Approved, requires Unreal Editor |
| Character Blueprint | `BP_CounterTrialCharacter.uasset` | Approved, requires Unreal Editor |
| Boss Blueprint | `BP_CounterTrialBoss.uasset` | Approved, requires Unreal Editor |
| Combat Component Blueprint | `BP_CounterTrialCombatComponent.uasset` | Approved, requires Unreal Editor |
| Combat Data Asset | `DA_CounterTrialCombatData.uasset` | Approved, requires Unreal Editor |
| Debug UMG | `WBP_DebugCombatHUD.uasset` | Approved, requires Unreal Editor |
| Placeholder Animation Montages | `AM_Dodge_Placeholder.uasset`, `AM_Parry_Placeholder.uasset`, `AM_Counter_Placeholder.uasset` | Approved, requires Unreal Editor |
| v0.4 check entry | `tools/checks/check-v0.4-unreal` | Approved |
| v0.4 playtest report | `docs/evidence/v0.4/unreal-playtest-report.zh.md` | Approved |

## 3. Proposed Release Bar

| Requirement | Acceptance Signal |
|---|---|
| Same mechanic maps from Godot/GDD to Unreal | dodge、parry、counter、stamina、Boss phase 都能在 Unreal test slice 中识别。 |
| Data-driven parameters | Combat Data Asset contains stamina, timing, damage, and phase thresholds. |
| PIE test map exists | Manual PIE playtest can run the core loop. |
| Debug UMG exists | stamina、Boss health、phase、counter status 可读。 |
| Asset gate preserved | No placeholder/prototype asset bypasses brief/provenance/review. |
| Scope remains contained | No full game systems, release build, store material, or final assets. |

## 4. Still Blocked Without Unreal Editor

The following must not happen until Unreal Editor is available and the generated assets receive review evidence:

- Create `.uasset` or `.umap` files.
- Import final art, animation, music, SFX, VFX, or Marketplace assets.
- Add Unreal MCP/editor automation.
- Add packaging, store, trailer, or release scripts.

## 5. Review Options

The user should choose one:

- `Approved`: proceed within the planned scope.
- `Needs revision`: update this design plan before implementation.
- `Rejected`: stop the v0.4 Unreal mapping path.
