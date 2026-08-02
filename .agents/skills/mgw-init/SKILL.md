---
name: mgw-init
description: Use when a user says `mgw-init`, `continue mgw-init`, asks to initialize a Muse Game Workshop project, or wants to create a game from zero to one through a guided AI coding workflow.
---

# mgw-init

## Use When

- The user says `mgw-init` in an empty or early game project.
- The user says `continue mgw-init` after running a CLI initializer.
- A user wants to start a new game project with Muse Game Workshop.
- A project needs the minimal Muse workspace before design, art, programming, QA, or release loops.

## Do Not Use When

- The user is asking to implement gameplay code directly.
- The project already has an approved implementation plan and only needs engine work.
- The request is only asset generation, asset review, playtest analysis, or release planning.
- The user expects a one-click full game generator.

## Core Rule

`mgw-init` creates a minimal, reviewable production workspace. It does not create a complete game.

Default output:

```text
README.md
muse.project.yaml
docs/00-game-start.md
docs/evidence/README.md
```

Optional output:

```text
AGENTS.md
CLAUDE.md
```

Do not create engine projects, MCP config, generated assets, final assets, or large directory trees by default.

## Workflow

### 1. Detect State

Check whether the current directory already has:

- `muse.project.yaml`
- `docs/00-game-start.md`
- `README.md`

If `muse.project.yaml` exists, treat the request as `continue mgw-init`.

### 2. Ask Only Blocking Questions

Ask at most five questions before proposing files:

1. What game do you want to make?
2. Target language and audience?
3. Genre or reference games?
4. Target platform?
5. First playable target and final production target: Three.js Web, Unity, Unreal, Godot, or undecided?

If the user already gave enough information, do not ask again. State assumptions instead.

### 3. Propose Minimal Files

Before writing files, show a compact plan:

- Project name.
- Language and locale.
- Genre.
- Engine choice or undecided.
- Files to create or update.
- What will not be created.

Ask for review status:

```text
Review Status: Approved / Needs revision / Rejected
```

If the user invoked `mgw-init` and already explicitly asked to initialize, a concise confirmation is enough. Do not proceed after `Needs revision` or `Rejected`.

### 4. Create Minimal Workspace

After approval, create or update only the minimal files:

```text
README.md
muse.project.yaml
docs/00-game-start.md
docs/evidence/README.md
```

Create `AGENTS.md` only for Codex or generic AI coding tools. Create `CLAUDE.md` only when the user selects Claude Code.

### 5. Write muse.project.yaml

Use this shape:

```yaml
project:
  name: project-name
  language: zh-CN
  target_audience: chinese-indie-devs
  locale: zh-CN
  stage: concept
  genre: undecided
  first_playable: undecided
  production_target: undecided
  target_platforms: []

muse:
  workflow_version: v0.9.4
  init_state: game-start-created
  init_entry: ai-editor
  next_action: continue-mgw-init
  review_gate_required: true
  evidence_dir: docs/evidence

tools:
  coding_tool: generic
  creative_tools: []
  mcp:
    enabled: false
    adapter: none

profiles:
  active:
    - docs-only
```

Set `init_entry` to `cli` if the project was started by an external CLI and the user says `continue mgw-init`.

### 6. Write docs/00-game-start.md

Use this shape:

```markdown
# Game Start

## Game Idea

## Target Player And Platform

## Player Fantasy

## Core Loop Draft

## First Prototype Goal

## Main Risks

## Next Questions

## Next Step
```

Keep it short. This is a day-one anchor, not a full design document.

### 7. Continue Into Production Loops

After the minimal workspace exists, ask which loop to enter next:

- Design Loop: pitch, core loop, mechanic spec.
- Narrative Loop: world bible, characters, narrative flow.
- Art Loop: art direction, asset briefs, provenance, asset review.
- Programming Loop: engine mapping, technical breakdown, prototype tasks.
- QA / Playtest Loop: playtest checklist, bug reports, tuning notes.
- Release Loop: demo readiness, localization, AI asset disclosure.

If the user asks to enter Three.js, Unity, Godot, Unreal, gameplay coding, editor automation, or prototype implementation, run `prototype-design` first. `mgw-init` stays light; `prototype-design` raises the quality bar before production-target work.

For each loop:

```text
ask questions
  -> generate stage deliverables
  -> user reviews
  -> proceed only after Approved
```

## Quality Bar

- The user can start from a single game idea without understanding the full Muse document tree.
- The first output is small enough to review in one sitting.
- `muse.project.yaml` records language, audience, stage, genre, first playable target, production target, init state, next action, and review gate.
- No Godot / Unreal project is created by default. The same boundary applies to Unity project scaffolds and Three.js runtime packages.
- No MCP server is installed by default.
- No assets are generated or imported by default.
- The next action is clear.
- Requests to start prototype implementation route to `prototype-design` before engine or code work.

## Common Failure Modes

- Asking too many questions before creating `docs/00-game-start.md`.
- Creating a large directory tree too early.
- Treating `mgw-init` as a game generator.
- Writing engine code before a review gate.
- Installing MCP or editor automation by default.
- Skipping evidence records.

## Next Skills

- `game-intake`
- `core-loop`
- `mechanic-spec`
- `prototype-design`
- `engine-portability`
- `threejs-workflow`
- `unity-workflow`
- `art-direction`
- `asset-brief`
- `playtest-report`
