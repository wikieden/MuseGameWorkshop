# Product Entry & mgw init

Version: v0.7

Language: English

## 1. Product Positioning

Muse Game Workshop should move from "read this workflow pack repo" to "initialize a game production workspace."

The updated product positioning is:

> Muse Game Workshop is an AI-assisted Game Production Workspace for indie game teams. Users start with `mgw-init` or `mgw init`, then use guided conversation, tool-neutral workflow skills, templates, review gates, evidence, and production-target adapters for Three.js WebGPU, Unity, Unreal, and Godot.

This does not change the project boundary:

- Muse is not a game engine.
- Muse is not a one-click game generator.
- Muse does not replace the producer, designer, artist, programmer, audio, QA, or release judgment.
- `mgw-init` / `mgw init` does not write game code for any production target by default.
- `mgw-init` / `mgw init` does not install MCP servers, editor plugins, or commercial creative AI tools by default.
- Structural changes still require a design summary, execution plan, and review gate.

## 2. Why mgw init Exists

The repository already has documentation, skills, templates, checks, and examples. New users still face a practical question:

> How do I apply this workflow to my own game project?

`mgw-init` / `mgw init` solves the project-entry problem, not the automatic-production problem. It should copy, configure, or reference Muse's workflow core inside the user's own game repository so Codex, Claude Code, Kiro CLI, opencode, and other AI coding tools can work under the same production rules.

## 3. Product Shape

Recommended shape: two entries, one guide state.

```text
Entry A: inside an AI editor
User creates a folder
  -> opens Codex / Claude Code / Kiro CLI / opencode
  -> types mgw-init
  -> AI runs guided initialization
  -> minimal project workspace is created

Entry B: CLI
User runs mgw-init
  -> CLI collects basic information
  -> minimal project workspace is created
  -> user opens an AI coding tool
  -> user types continue mgw-init
  -> AI continues guided initialization
```

The user's active surface is their own game project, not the Muse source repository forever.

## 4. Initialization Command Design

v0.7 defines the command contract only. It does not implement a real CLI.

Naming relationship:

| Name | Form | Meaning |
|---|---|---|
| `mgw-init` | User command and future standalone CLI | Can be typed in AI tools or run as a CLI command. |
| `mgw init` | Future standard CLI subcommand or alias | Fits a broader `mgw` command family later. |
| `continue mgw-init` | AI tool continuation command | Used after the CLI creates the minimal project and the AI tool continues initialization. |

Suggested commands:

```sh
mgw-init
mgw-init --lang zh-CN
mgw-init --tool codex
mgw-init --first-playable threejs-web
mgw-init --production-target unity
mgw-init --genre tactics
mgw-init --profile docs-only
mgw init my-game
mgw init my-game --lang zh-CN
mgw init my-game --tool codex
mgw init my-game --tool claude
mgw init my-game --first-playable threejs-web
mgw init my-game --production-target godot
mgw init my-game --production-target unreal
mgw init my-game --production-target unity
mgw init my-game --production-target threejs-webgpu
mgw init my-game --genre tactics
mgw init my-game --profile docs-only
mgw init my-game --profile threejs-web-production
mgw init my-game --profile unity-production
mgw init my-game --profile godot-prototype
mgw init my-game --profile unreal-mapping
mgw init my-game --production-target godot --mcp godot-ai
mgw init my-game --production-target unreal --mcp ue-mcp
```

Default behavior:

```sh
mgw init my-game --lang en-US --tool generic --first-playable none --production-target undecided --genre none --profile docs-only --mcp none
```

Defaults must be safe:

- `--mcp none`.
- Do not install external tools.
- Do not generate game code.
- Do not generate final / release-candidate assets.
- Do not create engine binary assets.
- Only create the minimal production workspace and guide state.

## 5. Minimal Initialized Project Structure

By default, `mgw-init` creates only the minimal structure:

```text
my-game/
  README.md
  muse.project.yaml
  docs/
    00-game-start.md
    evidence/
      README.md
```

Optional output:

```text
AGENTS.md                   # Codex / generic AI coding tools
CLAUDE.md                   # Claude Code adapter
```

Expand later only after user confirmation:

```text
docs/design/
docs/production/
docs/creative/
templates/
tools/checks/
game/godot/
game/unreal/
game/unity/
game/web/
assets/
```

`game/godot/`, `game/unreal/`, `game/unity/`, and `game/web/` do not contain real projects in the default profile. Project creation or integration begins only after the user selects a production-target profile and passes the review gate.

## 6. muse.project.yaml Contract

Suggested fields:

```yaml
project:
  name: my-game
  language: zh-CN
  target_audience: chinese-indie-devs
  locale: zh-CN
  stage: concept
  genre: tactics
  first_playable: threejs-web
  production_target: unity
  target_platforms: [web, pc]

muse:
  workflow_version: v0.9.4
  init_state: started
  init_entry: cli
  next_action: continue-mgw-init
  review_gate_required: true
  evidence_dir: docs/evidence
  terminology_source: docs/terminology-glossary.md

tools:
  coding_tool: codex
  creative_tools: []
  mcp:
    enabled: false
    adapter: none

profiles:
  active:
    - docs-only
    - threejs-web-prototype
```

This file is project-level production context, not a build system. AI tools should read it before deciding language, stage, engine, and the next workflow skill.

Initialization state fields:

| Field | Purpose |
|---|---|
| `init_state` | Tracks progress such as `started`, `game-start-created`, `design-loop`, or `prototype-ready`. |
| `init_entry` | Records the entry source, such as `ai-editor`, `cli`, or `manual`. |
| `next_action` | Tells the AI coding tool to continue with `continue-mgw-init` or enter a production loop. |

## 7. Initialization Profiles

Recommended profiles:

| Profile | Purpose | Default output | Exclusions |
|---|---|---|---|
| `docs-only` | Create the minimal production workspace | README, `muse.project.yaml`, `docs/00-game-start.md`, evidence README | Engine project, MCP, asset generation, large directory tree |
| `p0-workflow-pack` | Copy core skills/templates/checks | `.agents/skills/`, templates, checks | Game code, binary assets |
| `game-design-systems` | Support game design and systems work | System/combat/encounter/tuning/playtest docs | Engine implementation |
| `threejs-web-prototype` | Prepare the first browser-playable | Three.js mapping, browser tests, and evidence plan | Unapproved release assets and online services |
| `threejs-web-production` | Prepare a Three.js WebGPU release | WebGPU/WebGL2 fallback, performance, and release plan | Skipping browser matrix or release gate |
| `unity-production` | Prepare a Unity production workspace | Unity mapping, EditMode/PlayMode/build plan | Unreviewed Unity project or binary assets |
| `godot-prototype` | Prepare a Godot prototype workspace | Godot plan, checks, empty directory notes | Automatic playable content |
| `unreal-mapping` | Prepare an Unreal mapping workspace | Unreal mapping docs, PIE/test-map plan | `.uasset` / `.umap` generation |
| `creative-production` | Prepare the creative asset workflow | Briefs, provenance, review directories | Final asset generation/import |
| `genre-tracks` | Prepare genre branches | Genre templates and dry-run plan | Covering every genre |
| `full-workshop` | Advanced combined installation | Optional modules above | Skipping the review gate |

## 8. Tool Adapter Rules

The workflow core is the source of truth. Tool adapters only translate that workflow into surfaces each AI coding tool can execute.

| Tool | Adapter form | Must preserve |
|---|---|---|
| Codex | `AGENTS.md`, `.agents/skills/`, checks | Review gate, templates, evidence records |
| Claude Code | `CLAUDE.md`, skills, commands, hooks | Must not bypass Muse workflow core |
| Kiro CLI | Steering/spec/task style rules | Output must return to Muse deliverables |
| opencode | Project instructions, commands, tool config | Must not create a tool-specific source of truth |
| Generic tools | README + rules + templates | Read `muse.project.yaml` and the review gate first |

Adapters must not change:

- Production stages.
- Production disciplines.
- Mechanic-spec fields.
- Asset provenance records.
- Review gate.
- Evidence directory.
- Bilingual audience strategy.

## 9. Editor MCP Adapter Rules

Godot, Unity, and Unreal MCP or official editor automation are optional capabilities, not the workflow core. Three.js normally uses shell, browser, and Playwright validation without editor MCP.

Default policy:

- `--mcp none`.
- Do not install MCP servers automatically.
- Do not modify editor settings automatically.
- Do not open Godot, Unity, or Unreal automatically.
- Do not create binary assets automatically.

Before MCP is enabled, the task must have:

- Target engine.
- Target MCP adapter.
- Exact editor version.
- Editor action list.
- Rollback plan.
- Log, screenshot, or test evidence plan.
- Review Status: Approved.

Recommended mapping:

| Engine | Preferred direction | Design reason |
|---|---|---|
| Godot | Godot AI as the first live editor control candidate | Suitable for editor operations, scene work, and validation loops |
| Godot | GodotIQ as the project-understanding layer | Useful before editing project structure and scripts |
| Godot | GodotPrompter as internal skill inspiration | Useful for finer Godot-specific workflow skills |
| Unreal | UE-MCP as the deep editor automation research target | Covers Blueprint, Actor, Data Asset, UMG, PIE, and related flows |
| Unreal | GenOrca Unreal MCP as a lightweight Python-first reference | Useful for a thinner adapter path |
| Unreal | Unreal Editor Scripting / Python / Automation Test as official foundation | Validation and automation must map back to official capabilities |

## 10. Review Gate

Any structural operation after `mgw init` must first produce:

- Design summary.
- Execution plan.
- Impact scope.
- Files or directories to create or modify.
- Decisions that need review.
- Validation plan.

Valid review statuses:

- `Approved`: proceed within the reviewed scope.
- `Needs revision`: update the design or plan first.
- `Rejected`: stop that path.

## 11. v0.7 Scope

v0.7 only defines the product entry and initialization design. It does not implement a real CLI.

Allowed:

- Add product-entry documentation.
- Add user-journey documentation.
- Define the `mgw init` command contract.
- Define the initialized project structure.
- Define tool adapter and MCP adapter rules.
- Update README, docs index, roadmap, delivery plan, and testing strategy.
- Add a static check entry point.

Not allowed:

- Implement the real `mgw` CLI.
- Install MCP.
- Create new Godot/Unreal projects.
- Generate or import assets.
- Create `.uasset`, `.umap`, or other engine binary assets.

In short: v0.7 does not implement a real CLI, does not install MCP, and does not create new Godot/Unreal projects or generate/import assets.
