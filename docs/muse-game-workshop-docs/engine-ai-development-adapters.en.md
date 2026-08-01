# Engine AI Development Adapters Research And Design

Research date: 2026-06-10

Language: English

Status: research and design input, not a final implementation specification.

## 1. Purpose

This document defines how Muse Game Workshop evaluates Godot / Unreal AI editor control, MCP projects, workflow skill packs, and official editor automation capabilities. It is not an integration plan for one specific tool, and it does not require Muse to adopt MCP immediately. Its goal is to create a consistent decision framework for deciding which external projects deserve deeper study and which design ideas should inform Muse's Engine AI Development Adapter layer.

Muse's boundary remains unchanged:

- Muse is not a game engine.
- Muse is not a one-click game generator.
- Muse keeps Design Specs, Review Gates, and Evidence before AI tools operate inside Godot or Unreal.
- Godot / Unreal automation belongs to the Tool Adapter Layer, not the Workflow Core.

## 2. Research Targets

This round studies seven projects first:

| Priority | Project | Role For Muse |
|---|---|---|
| P0 | Godot AI | Primary reference for Godot live editor control. |
| P0 | UE-MCP | Primary reference for broad Unreal editor automation, Blueprint, C++, and Data Asset tooling. |
| P0 | GodotPrompter | Primary reference for Godot-specific workflow skill organization. |
| P0 | GenOrca Unreal MCP | Reference for a Python-first lightweight Unreal adapter path. |
| P1 | GodotIQ | Reference for project understanding, spatial reasoning, signal flow, dependency graphs, and impact analysis. |
| P1 | Ziva | Reference for in-editor product experience and self-verifying loops. |
| P1 | ee0pdt/Godot-MCP | Reference for a basic Godot MCP command surface and Node / Script / Scene / Project categories. |

Official foundations remain important:

- Godot CLI, GdUnit4 / GUT.
- Unreal Editor Scripting, Python Editor Script Plugin, and Automation Test Framework.

## 3. Overall Judgment

The most useful lesson for Muse is not "which project generates more code." The important capabilities are:

1. Live editor state: the AI can see open scenes, selected nodes, play state, logs, and errors.
2. Scene tree / Actor graph: the AI can understand actual engine object relationships, not only files.
3. Text + binary boundary: code, config, and specs can be textual; `.uasset`, `.umap`, and similar binary assets require editor APIs or human confirmation.
4. Test and debug loop: run, inspect logs, capture screenshots, reproduce, patch, and run again.
5. Tool surface design: tool count, parameter schemas, batching, rollback, and error structures directly affect AI reliability.
6. Project understanding: dependency graphs, signal maps, call chains, asset references, and spatial layout matter more than one-off edits.
7. Role split: design specs, technical design mapping, gameplay implementation, and QA validation cannot be collapsed into one generic agent.
8. Evidence contract: every automation result should leave logs, screenshots, test results, impact scope, and human review decisions.

## 4. Muse Adapter Design Principles

### 4.1 Design Before Editor Control

AI editor control should only execute reviewed task packages. A task package needs:

- Design intent.
- Mechanic spec.
- Engine mapping.
- Files and assets affected.
- Validation plan.
- Rollback plan.

Without these inputs, AI should only research, inspect, diagnose, or plan. It should not directly create scenes, Blueprints, nodes, resources, or assets.

### 4.2 Shared Adapter Contract

Every engine adapter should produce comparable evidence:

| Evidence | Godot Example | Unreal Example |
|---|---|---|
| Project context | `project.godot`, autoloads, scene tree | `.uproject`, plugins, level outliner |
| Runtime state | running scene tree, debug console | PIE state, Output Log |
| Code validation | GDScript parse, C# build, GdUnit4/GUT | C++ build, Blueprint compile, Automation Test |
| Visual validation | editor/game screenshot | viewport/PIE screenshot |
| Asset validation | import status, resource references | asset registry, Data Asset, UMG compile |
| Review record | human approval / rejection | human approval / rejection |

### 4.3 Godot Adapter Focus

Godot adapters should cover:

- Scene.
- Node.
- Script, including GDScript and C#.
- Resource.
- Signal.
- Input Map.
- Autoload.
- Test scene.
- Godot CLI, GdUnit4 / GUT validation.
- Editor and game screenshots.

### 4.4 Unreal Adapter Focus

Unreal adapters should cover:

- Actor / Component / Pawn / Controller / GameMode / Subsystem.
- Blueprint.
- C++ gameplay modules.
- Data Asset.
- Data Table.
- UMG.
- Animation Blueprint / Montage.
- PIE test map.
- Automation Test / Functional Test.
- Editor Utility, Python automation, and official Editor Scripting.

### 4.5 Do Not Bind Muse To One Tool

Godot AI, UE-MCP, GodotPrompter, GenOrca Unreal MCP, GodotIQ, Ziva, and Godot-MCP are adapter candidates or reference samples. Muse documentation should not imply that a team must install one specific tool. The correct sequence is:

1. Define Muse task packages and evidence contracts.
2. Define generic Godot / Unreal adapter capabilities.
3. Let each concrete tool declare which capabilities it supports.
4. Maintain risk, license, maturity, and validation records per tool.

## 5. Reference Matrix

| Dimension | Godot AI | UE-MCP | GodotPrompter | GenOrca Unreal MCP | GodotIQ | Ziva | ee0pdt/Godot-MCP |
|---|---|---|---|---|---|---|---|
| Live editor control | Strong | Strong | None | Strong | Strong | Strong | Medium |
| Skill / process organization | Medium | Medium | Strong | Medium | Medium | Medium | Weak |
| Project understanding | Medium | Medium | Medium | Medium | Strong | Medium | Weak |
| Test / debug loop | Strong | Strong | Medium | Medium | Strong | Strong | Weak to medium |
| Godot GDScript | Strong | N/A | Strong | N/A | Medium | Strong | Medium |
| Godot C# | Medium | N/A | Strong | N/A | Weak to medium | Medium | Weak |
| Unreal Blueprint | N/A | Strong | N/A | Strong | N/A | N/A | N/A |
| Unreal C++ | N/A | Strong | N/A | Medium | N/A | N/A | N/A |
| Commercial / license risk | Low | High | Low | Medium-low | Medium | High | Low |
| Muse reference value | High | High | High | High | High | Medium-high | Medium |

This matrix is a 2026-06-10 snapshot. Versions, licenses, and capabilities move quickly; any implementation review must refresh the evidence.

## 6. Version Placement

These reports should not change the principle that game design and systems come before art expansion and deep tool integration. Suggested placement:

- Near term: keep them as research notes and adapter design input.
- Mid term: after Godot / Unreal baseline workflows stabilize, add an `engine-ai-development-adapter` skill or adapter spec.
- Later: if Muse actually integrates MCP, run one Godot dry run and one Unreal dry run first; do not make a tool a default dependency.

## 7. Godot Integration Decision

The Godot direction uses a three-layer strategy:

| Order | Tool | Muse Role | Near-Term Action |
|---|---|---|---|
| 1 | Godot AI | First integration target for Godot live editor control. | Design a `Godot AI Adapter Dry Run` to validate scene tree, node operations, signals, GDScript/C#, run, logs, and screenshot evidence. |
| 2 | GodotIQ | Reserved second-layer capability for project understanding. | Study context tools, especially dependency graphs, signal flow, spatial reasoning, impact analysis, and playtest evidence enhancement. |
| 3 | GodotPrompter | Internal Godot workflow skill design reference, not a runtime integration tool. | Borrow its skill organization, GDScript/C# parity, Godot version awareness, and validator ideas. |

This decision only sets the priority for Godot research and future dry runs. It does not make Muse depend on these tools. Integration principles:

- Godot AI validates the execution adapter layer, but only after a review gate.
- GodotIQ is a context adapter candidate and should not replace Godot AI's editor execution role.
- GodotPrompter is a workflow skill design reference for strengthening Muse's own Godot skill pack.
- Ziva remains a product-experience and beginner-loop reference for now.
- ee0pdt/Godot-MCP remains a Level 1 baseline command-surface fallback for now.

The minimum Godot AI Adapter Dry Run should verify:

1. Read the project and current scene tree.
2. Create or modify one node in a test scene.
3. Create or modify one GDScript or C# script.
4. Connect one signal.
5. Run the test scene and return logs.
6. Capture a screenshot or equivalent runtime evidence.
7. Produce a human review record and rollback note.

## 8. Independent Reports

This overview links to:

- [Godot AI Research Report](research/godot-ai-research.en.md)
- [UE-MCP Research Report](research/ue-mcp-research.en.md)
- [GodotPrompter Research Report](research/godotprompter-research.en.md)
- [GenOrca Unreal MCP Research Report](research/genorca-unreal-mcp-research.en.md)
- [GodotIQ Research Report](research/godotiq-research.en.md)
- [Ziva Research Report](research/ziva-research.en.md)
- [ee0pdt/Godot-MCP Research Report](research/ee0pdt-godot-mcp-research.en.md)
- [Engine AI Tool User Feedback Scan](research/engine-ai-user-feedback-scan.en.md)

## 9. Main Sources

- Godot AI: https://github.com/hi-godot/godot-ai
- Godot AI tools: https://github.com/hi-godot/godot-ai/blob/main/docs/TOOLS.md
- UE-MCP: https://github.com/db-lyon/ue-mcp
- UE-MCP architecture: https://github.com/db-lyon/ue-mcp/blob/main/docs/architecture.md
- GodotPrompter: https://github.com/jame581/GodotPrompter
- GenOrca Unreal MCP: https://github.com/GenOrca/unreal-mcp
- GodotIQ tools: https://godotiq.com/tools/
- Ziva: https://ziva.sh/
- ee0pdt/Godot-MCP: https://github.com/ee0pdt/Godot-MCP
- Godot CLI: https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html
- GdUnit4: https://github.com/godot-gdunit-labs/gdUnit4
- Unreal Editor Scripting: https://dev.epicgames.com/documentation/en-us/unreal-engine/scripting-and-automating-the-unreal-editor
- Unreal Python: https://dev.epicgames.com/documentation/unreal-engine/scripting-the-unreal-editor-using-python
- Unreal Automation Test Framework: https://dev.epicgames.com/documentation/unreal-engine/automation-test-framework-in-unreal-engine
