# Counter Trial Unreal Mapping Slice

Version: v0.4

This is the Muse Game Workshop v0.4 Unreal Mapping Slice fixture. It maps the Boss Rush / Counter Trial loop from the Godot prototype into Unreal-oriented classes, data assets, debug UI, and PIE validation planning.

## Scope

Included in this scaffold:

- `CounterTrial.uproject`
- C++ module under `Source/CounterTrial/`
- `UCounterTrialCombatData` data asset class
- `UCounterTrialCombatComponent` state and parameter bridge
- `ACounterTrialCharacter` placeholder third-person combat character
- `ACounterTrialBoss` placeholder boss actor
- `UCounterTrialDebugHUD` placeholder UMG bridge
- Empty `Content/CounterTrial/*` folders for reviewed editor-created assets

Not included yet:

- `.uasset` Blueprint assets
- `.umap` PIE test map
- final art, animation, music, SFX, or VFX
- packaging, store, trailer, or release build

## Unreal Editor Status

Unreal Editor was not found on this machine during v0.4 setup. The source scaffold and static checks can be validated now. PIE test-map creation and binary asset generation remain blocked until Unreal Editor is installed or available.

## Intended Editor Assets

After Unreal Editor is available, create reviewed placeholder assets only:

- `Content/CounterTrial/Blueprints/BP_CounterTrialCharacter.uasset`
- `Content/CounterTrial/Blueprints/BP_CounterTrialBoss.uasset`
- `Content/CounterTrial/Blueprints/BP_CounterTrialCombatComponent.uasset`
- `Content/CounterTrial/Data/DA_CounterTrialCombatData.uasset`
- `Content/CounterTrial/UI/WBP_DebugCombatHUD.uasset`
- `Content/CounterTrial/Maps/M_CounterTrial_PIE.umap`
- `Content/CounterTrial/Animation/AM_Dodge_Placeholder.uasset`
- `Content/CounterTrial/Animation/AM_Parry_Placeholder.uasset`
- `Content/CounterTrial/Animation/AM_Counter_Placeholder.uasset`

## Local Checks

```sh
../../tools/checks/check-v0.4-unreal
```
