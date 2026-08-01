# ECC / Everything Claude Code Research Note

Version: v0.1

Language: English

Research date: 2026-06-09

Status: Research note, not a core source of truth for Muse Game Workshop.

## 1. Research Target

This note reviews the current `Everything Claude Code` project under the `affaan-m/ECC` repository. The older `everything-claude-code` URL redirects to `ECC`.

As of this review, ECC has evolved from a Claude Code configuration collection into a cross-harness workflow distribution for AI coding tools:

- GitHub source repo: `affaan-m/ECC`
- npm package: `ecc-universal`
- Claude plugin identifier: `ecc@ecc`
- Current public package reviewed: `2.0.0-rc.1`
- Main-branch commit observed in a local shallow clone: `edebcc89efa09dc2705748151d98286ff3bb6023`

The goal is not to import ECC into Muse directly. The goal is to extract useful lessons for Muse Game Workshop's tool-agnostic architecture, skill pack design, adapters, validation gates, and installation boundaries.

## 2. ECC's Current Shape

ECC's central idea is to treat reusable agentic workflow assets as the shared substrate, while Claude Code, Codex, OpenCode, Cursor, Gemini, Zed, and similar tools are execution surfaces.

Its durable workflow units include:

- `skills/*/SKILL.md`
- `rules/`
- `commands/`
- `hooks/hooks.json`
- `scripts/hooks/`
- MCP reference configs
- install manifests
- session and observability contracts

Its cross-harness architecture document treats `SKILL.md` as the most portable unit. Hooks, commands, tool loading, event shapes, and platform limits are handled through harness adapters.

Local shallow-clone observations:

- 64 agents.
- 261 skills.
- 84 legacy command shims.
- 104 rule markdown files.
- 163 test files.
- 32 install modules.
- 76 install components.

These numbers show that ECC is now a large workflow distribution, not a small prompt library.

## 3. Patterns Worth Reusing In Muse

### 3.1 Prefer Shared Source Files

The most useful ECC lesson is not the number of agents. It is the shared source / adapter edge principle.

For Muse, the core assets should live in the workflow core:

- workflow skills.
- production templates.
- review gate.
- evidence records.
- provenance contract.
- dry run protocol.
- testing checks.
- terminology and audience strategy.

Codex, Claude Code, Kiro CLI, opencode, Cursor, and other tools should only adapt loading behavior, command entry points, hook capabilities, file layout, and platform limits.

### 3.2 Keep Tool Adapters Thin

ECC's cross-harness document says that if the same workflow requires editing three harness-specific copies, the shared source is in the wrong place.

Muse should follow the same rule:

- Mechanic specs, core loops, asset briefs, and playtest reports should not be written as one tool's private format.
- Claude Code slash commands, Codex `AGENTS.md`, Kiro steering/spec, and opencode instructions are entry points only.
- Tool adapters must not change production stages, production roles, review gates, or evidence contracts.

### 3.3 Use Install Profiles And Materialization Manifests

ECC uses install profiles, modules, and components to control installation scope, and warns users not to stack plugin install and manual full install paths.

Muse can reuse the profile concept, but should keep it smaller and framed around game production:

| Muse profile draft | Purpose |
|---|---|
| `docs-only` | Use only the documentation pack, template descriptions, and review gate. |
| `p0-workflow-pack` | Install P0 workflow skills, core templates, and check entry points. |
| `godot-example` | Add the Godot example and validation rules on top of the P0 workflow pack. |
| `unreal-example` | Add the Unreal mapping example and validation rules on top of the P0 workflow pack. |
| `creative-production` | Add art direction, asset brief, provenance, review, and engine validation. |
| `full-workshop` | Full workflow pack, with dry-run and uninstall/readme boundaries. |

These profiles should not be implemented immediately. They should first be treated as design input for a future delivery plan or adapter spec.

### 3.4 Add A Harness Adapter Compliance Matrix

ECC's adapter matrix uses these states:

- Native.
- Adapter-backed.
- Instruction-backed.
- Reference-only.

Muse could add a similar matrix, but the wording should remain grounded in game production workflow:

| Tool / Harness | Initial Muse status | Notes |
|---|---|---|
| Codex | Native / current repo surface | This repo already has `AGENTS.md`, `.agents/skills/`, and checks. |
| Claude Code | Instruction-backed first | Can read `CLAUDE.md` and shared docs; slash commands/hooks should be designed later. |
| Kiro CLI | Reference / adapter candidate | Map to spec/task/steering before implementation. |
| opencode | Reference / adapter candidate | Map to instructions, commands, and tool config before implementation. |
| Cursor | Reference / adapter candidate | Rules/agents/skills layout is useful, but project rule pollution must be avoided. |
| Terminal-only | Portability floor | The minimum usable path should remain Markdown docs + templates + shell checks. |

Each adapter claim should include:

- install or onramp path.
- supported assets.
- unsupported or different surfaces.
- verification command.
- risk notes.
- last verified date.

### 3.5 Treat Validation Gates As Product Surface

ECC treats validation scripts as a key part of the workflow distribution, including:

- validate agents.
- validate commands.
- validate rules.
- validate skills.
- validate hooks.
- validate install manifests.
- validate no personal paths.
- preview pack smoke.

Muse can reuse this validation layering, translated into game-production workflow checks:

- check doc links.
- check zh/en doc pairs.
- check startup prompts.
- check template metadata.
- check skill frontmatter and required sections.
- check evidence record metadata.
- check asset provenance metadata.
- check example project boundaries.
- check no private paths or credentials.
- check adapter matrix claims.

## 4. What Muse Should Not Copy

### 4.1 Do Not Copy The Large-Agent Narrative

Muse's external users are indie developers and small game teams. The public surface should lead with production stages, disciplines, and deliverables, not a large list of agents.

Keep using:

- Producer.
- Game Designer.
- Technical Designer.
- Art Director.
- Gameplay Programmer.
- QA.
- Release Manager.

Workflow skills can remain internal, but Muse should not present itself as a collection of virtual staff.

### 4.2 Do Not Make Strong Hook Runtime The Default

ECC uses hooks and adapter hooks across Claude Code, Cursor, OpenCode, and related tools. Muse should not make hook enforcement a default dependency in early versions.

Reasons:

- Hook capabilities differ across AI coding tools.
- Hooks can pollute user environments or create duplicate behavior.
- Muse's core value is game production workflow, not a global agent runtime.

Muse should treat hooks as an optional adapter capability, not a workflow core requirement.

### 4.3 Do Not Default To Full Install

ECC itself warns users not to stack install methods. If Muse later adds an installer, the default path should be conservative:

- dry-run by default.
- smallest useful profile by default.
- explicit file create/modify plan.
- no overwriting of existing project rules.
- uninstall or manual cleanup guidance.
- every tool-specific config maps back to the shared workflow core.

### 4.4 Do Not Expand Into A Generic Engineering Pack

ECC covers many software engineering, operations, content, research, and business workflows. Muse should not become a generic engineering mega-pack.

Muse should stay focused on:

- game concept.
- core loop.
- mechanic spec.
- engine mapping.
- creative asset pipeline.
- UX / level blockout.
- playtest / QA.
- release readiness.
- Godot / Unreal example conventions.

## 5. Future Muse Documentation Tasks

This research suggests the following documents for future review. They are not implemented by this note:

1. `ai-tool-adapter-matrix.zh.md` / `.en.md`
   - Define support status, risks, and verification commands for Codex, Claude Code, Kiro CLI, opencode, Cursor, and terminal-only use.
2. `adapter-profile-spec.zh.md` / `.en.md`
   - Define docs-only, p0-workflow-pack, godot-example, unreal-example, creative-production, and full-workshop profiles.
3. `skill-validation-spec.zh.md` / `.en.md`
   - Define workflow skill frontmatter, required sections, next skills, review gate, and evidence checks.
4. `adapter-boundary-guide.zh.md` / `.en.md`
   - Clarify what belongs in workflow core and what belongs in the tool adapter layer.

Each task requires its own design summary, execution plan, and review approval.

## 6. Conclusion For Muse

ECC validates Muse's current direction:

- workflow core and tool adapter layer should stay separate.
- text-based workflow units such as `SKILL.md` are a strong cross-tool portability primitive.
- installation, adaptation, and automation need manifests, profiles, dry-runs, and verification commands.
- tool-agnostic does not mean every tool has identical capabilities; Native, Adapter-backed, Instruction-backed, and Reference-only states should be stated honestly.

Muse should keep its own product identity:

> Muse Game Workshop is a game production workflow pack, not a general agent operating system.

Muse should learn from ECC's engineering governance, not copy its scale, naming, or global runtime.

## 7. Sources Reviewed

- ECC repository: https://github.com/affaan-m/ECC
- Cross-Harness Architecture: https://github.com/affaan-m/ECC/blob/main/docs/architecture/cross-harness.md
- Harness Adapter Compliance Matrix: https://github.com/affaan-m/ECC/blob/main/docs/architecture/harness-adapter-compliance.md
- ECC v2.0.0-rc.1 release notes: https://github.com/affaan-m/ECC/blob/main/docs/releases/2.0.0-rc.1/release-notes.md
- npm package: https://www.npmjs.com/package/ecc-universal/v/2.0.0-rc.1
