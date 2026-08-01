# ee0pdt/Godot-MCP Research Report

Research date: 2026-06-10

Language: English

Target: ee0pdt/Godot-MCP

Conclusion level: P1, reference for a basic Godot MCP command surface.

## 1. Conclusion

ee0pdt/Godot-MCP is a lightweight Godot MCP reference. Its value is not complex project understanding or product experience. Its value is a clear baseline command surface around project, scene, node, script, resource, and editor commands.

The most useful lessons for Muse are:

- A minimum Godot adapter can start with Project / Scene / Node / Script / Resource / Editor categories.
- A basic MCP command surface is useful for a minimum dry run before adopting the richer Godot AI or GodotIQ experience.
- A lightweight open-source project helps Muse define a baseline.
- It can act as the lower-bound reference for Godot AI: what is minimally useful, and what needs enhancement.

## 2. Project Positioning

ee0pdt/Godot-MCP is a Godot MCP server / adapter. Public documentation focuses on:

- Project access.
- Script modification.
- Scene and node operations.
- Resource handling.
- Editor commands.
- Two-way communication between AI and Godot.

It is a useful reference for Muse's basic adapter shape.

## 3. Command Surface Lessons

A minimum Godot MCP adapter does not need to cover all Godot features from day one. It can begin with:

| Category | Minimum Capability |
|---|---|
| Project | Read project path, Godot version, main scene, autoloads. |
| Scene | Open, save, create test scenes. |
| Node | Create nodes, move nodes, set properties, delete nodes. |
| Script | Create, read, edit, and attach scripts. |
| Resource | Create or reference Resources. |
| Editor | Run scenes, read logs, return errors. |

Muse can define this as Godot Adapter Level 1.

## 4. Borrowable Design For Muse

### 4.1 Baseline Capability

Godot-MCP works as a baseline capability reference:

```text
Level 1: Basic command surface
  Project, Scene, Node, Script, Resource, Editor command

Level 2: Live editor state and evidence
  Logs, screenshots, run scene, signal map

Level 3: Project understanding
  Dependency graph, flow tracing, impact analysis
```

This helps Muse distinguish "the tool can operate Godot" from "the tool understands the project."

### 4.2 Do Not Over-Complexify Commands Too Early

Lightweight MCP projects remind Muse that a minimum viable tool surface matters. Designing 100+ operations too early makes adapters hard to validate. Muse should first define 10-20 high-frequency commands, then expand.

### 4.3 Complement Godot AI And GodotIQ

Godot-MCP can be the execution lower bound, Godot AI can be the live editor control upper bound, and GodotIQ can be the project understanding layer. Muse does not need one tool to provide every capability; it needs a capability matrix.

## 5. Risks And Limits

| Risk | Meaning | Muse Response |
|---|---|---|
| Basic capability | It may lack deep project understanding, screenshots, or complex tests. | Treat it as Level 1, not the full solution. |
| Maintenance uncertainty | Smaller projects may change maintenance pace. | Re-verify repository status before implementation. |
| Scene edit risk | Basic commands without evidence can mis-edit scenes. | Bind them to review gates and runtime validation. |
| C# support may be limited | Focus may lean toward GDScript and scene operations. | Mark language support explicitly in Muse profiles. |

## 6. Follow-Up Questions

1. Which Project / Scene / Node / Script operations are covered in its command reference?
2. Does it support running scenes and reading logs?
3. Can it handle signal connections reliably?
4. How does it handle script parse errors?
5. Does it support C# projects?
6. Which parts of its schema and Godot AI's schema can map to shared Muse capabilities?

## 7. Muse Takeaway

ee0pdt/Godot-MCP should be Muse's reference for a basic Godot MCP command surface. It can help define:

- Godot Adapter Level 1 capability.
- Minimum Godot MCP dry-run scope.
- Basic scene/node/script command schema.
- Lower-bound adapter capability matrix.

It is not the strongest option, but it helps Muse avoid making the adapter layer too heavy too early.

## 8. Sources

- GitHub: https://github.com/ee0pdt/Godot-MCP
- Command reference: https://github.com/ee0pdt/Godot-MCP/blob/main/docs/command-reference.md
- Godot CLI official docs: https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html
