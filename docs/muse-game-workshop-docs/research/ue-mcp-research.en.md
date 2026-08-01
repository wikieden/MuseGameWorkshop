# UE-MCP Research Report

Research date: 2026-06-10

Language: English

Target: UE-MCP / `db-lyon/ue-mcp`

Conclusion level: P0, primary reference for broad Unreal editor automation.

## 1. Conclusion

UE-MCP is the most important Unreal-side project for deeper study in this round. Its value is not just MCP. It exposes a broad Unreal Editor automation surface covering Blueprint, C++, Actors, levels, materials, UMG, animation, VFX, Gameplay Ability System, PIE, logs, and builds.

The most valuable lessons for Muse are:

- An Unreal adapter must coordinate Blueprint, C++, Data Asset, UMG, Level, PIE, and Automation Test. It cannot only write C++.
- AI editor control needs rollback, flow orchestration, and structured errors.
- `.uasset`, `.umap`, and similar binary assets must go through Editor APIs or plugins; AI should not edit them as text.
- The Unreal adapter must separate design intent, technical mapping, editor execution, and runtime validation.

## 2. Project Positioning

UE-MCP combines an MCP server and Unreal Editor plugin. Public documentation describes a TypeScript MCP server and C++ Unreal Editor plugin that connect AI tools to Unreal Editor.

Its role is close to:

- Unreal Editor automation bridge.
- Blueprint and asset operation layer.
- PIE validation executor.
- Flow-based editor workflow runner.

This kind of tool is best treated as an execution-layer reference for a future Muse Unreal adapter, not as part of the current Workflow Core.

## 3. Architecture Observations

UE-MCP is closer to an engine toolchain than a file-only coding agent:

1. The MCP server receives AI tool requests.
2. The Unreal Editor plugin executes operations inside the editor.
3. Tool groups cover Blueprint, levels, materials, UMG, animation, GAS, VFX, logs, and PIE.
4. Flow support composes multiple editor actions into reusable tasks.
5. Rollback / transaction ideas reduce automation damage risk.

Muse should borrow its execution-layer protocol ideas, not copy command names. Unreal complexity sits in assets, editor state, and runtime validation, not merely in generated code.

## 4. Unreal Tool Surface Lessons

UE-MCP shows that an Unreal adapter needs to cover:

- Actor / Component: actual level objects and component structure.
- Blueprint: the implementation layer used by technical designers and non-programmers.
- C++: performance-sensitive, core systems, and complex gameplay logic.
- Data Asset / Data Table: parameters, configuration, abilities, enemies, items, and tuning tables.
- UMG: HUD, menus, and debug UI.
- Animation Blueprint / Montage: character states and action feedback.
- Material / VFX / Niagara: presentation.
- PIE / Play In Editor: minimum runtime validation.
- Output Log / Message Log: error diagnosis.
- Automation Test / Functional Test: repeatable validation.

Muse's `unreal-workflow` should eventually define:

- Which logic belongs in C++.
- Which tuning and connections belong in Blueprint.
- Which values belong in Data Asset / Data Table.
- Which checks must pass in PIE.
- Which assets require human or editor automation handling.

## 5. Borrowable Design For Muse

### 5.1 Blueprint / C++ Responsibility Split

UE-MCP proves that an Unreal adapter must treat Blueprint and C++ as shared production surfaces. Muse can define:

| Type | Default Owner | Reason |
|---|---|---|
| Core state machine | C++ or Blueprint Component | Stable and testable. |
| Tunable parameters | Data Asset / Data Table | Designer-friendly tuning. |
| Character presentation wiring | Blueprint / AnimBP | Art, animation, and technical design can participate. |
| HUD / debug UI | UMG | Fast validation. |
| Level validation | PIE test map | Confirms runtime interaction. |

### 5.2 Flow And Review Gate

UE-MCP's flow concept can map to Muse reviewed task packages:

```text
Design Spec
  -> Unreal Mapping
  -> Editor Action Plan
  -> Execute In Editor
  -> PIE / Compile / Test Evidence
  -> Human Review
```

The key is not that AI chooses the flow independently. The flow executes an already approved production task.

### 5.3 Rollback And Risk Boundary

Unreal automation is riskier than Godot automation because many assets are binary. Muse should define:

- Record affected assets before every editor automation task.
- Do not let AI bulk-delete assets unless the review gate explicitly approves it.
- Compile / load / PIE-validate generated Blueprint, UMG, and Data Asset work.
- Record Output Log, screenshots, and changed assets for every automation.

## 6. Risks And Limits

| Risk | Meaning | Muse Response |
|---|---|---|
| License / commercial risk | UE-MCP's license and commercial boundary must be rechecked before implementation. | Use it as a research sample only; do not copy code or command structure. |
| Tool surface bloat | Broad tool coverage can expand scope too early. | Define minimal adapter capabilities first. |
| Unreal version sensitivity | UE versions, plugin APIs, and Blueprint behavior change. | Adapter profiles must record Unreal versions. |
| Binary asset risk | `.uasset` / `.umap` cannot be fully understood through normal text diff. | Use editor validation and human review. |
| Presentation too early | Unreal 3D presentation can hide weak mechanics. | Preserve engine-neutral specs and prototype-first validation. |

## 7. Follow-Up Questions

1. How does UE-MCP represent Blueprint graph nodes, pins, and links?
2. Is rollback based on Unreal transactions, file backup, or a custom layer?
3. How does it handle Blueprint compile errors?
4. Can it reliably create and modify Data Asset / Data Table objects?
5. What structured information can PIE validation return?
6. How does it handle complex systems such as multiplayer, GAS, animation, and Niagara?
7. Does its license allow Muse to reference design and tool-call patterns in an open project?

## 8. Muse Takeaway

UE-MCP should be Muse's first deep-dive sample for Unreal advanced adaptation. Muse should not make UE-MCP a default dependency; it should abstract:

- Unreal adapter capability matrix.
- Blueprint / C++ / Data Asset responsibility template.
- Unreal editor automation review gate.
- PIE evidence record.
- Binary asset boundary guide.

If Muse later runs an Unreal MCP dry run, UE-MCP can be the upper-bound capability reference, while GenOrca Unreal MCP can be the lightweight implementation reference.

## 9. Sources

- GitHub: https://github.com/db-lyon/ue-mcp
- Documentation: https://github.com/db-lyon/ue-mcp/tree/main/docs
- Architecture: https://github.com/db-lyon/ue-mcp/blob/main/docs/architecture.md
- Unreal Editor Scripting: https://dev.epicgames.com/documentation/en-us/unreal-engine/scripting-and-automating-the-unreal-editor
- Unreal Python: https://dev.epicgames.com/documentation/unreal-engine/scripting-the-unreal-editor-using-python
- Unreal Automation Test Framework: https://dev.epicgames.com/documentation/unreal-engine/automation-test-framework-in-unreal-engine
