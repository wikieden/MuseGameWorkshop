# GodotPrompter Research Report

Research date: 2026-06-10

Language: English

Target: GodotPrompter / `jame581/GodotPrompter`

Conclusion level: P0, primary reference for Godot-specific workflow skill organization.

## 1. Conclusion

GodotPrompter is valuable for Muse in a different way from Godot AI. It is not a live editor control tool. It is a Godot domain skill system, much closer to Muse's current `.agents/skills/` direction: a set of Godot-focused skills that organize requirements, design, implementation, review, optimization, and publishing.

The most important lessons for Muse are:

- Not every AI game development capability belongs in MCP or editor automation.
- Godot-specific knowledge can first become workflow skills, then concrete AI coding tools can execute them.
- C# and GDScript parity needs explicit checks; a Godot workflow should not assume GDScript only.
- Skill packs need validators to prevent prompt bloat, structural drift, and content decay.

## 2. Project Positioning

GodotPrompter is an agentic skills framework for Godot. It organizes Godot 4.x skills across architecture, gameplay systems, input, physics, animation, UI, multiplayer, publishing, optimization, GDScript, and C#.

Its Muse mapping is:

| GodotPrompter | Muse |
|---|---|
| Godot-specific skill set | Godot workflow skill pack |
| Skill metadata and categories | `skill-pack-spec` |
| Design / Implementation / Review flows | Review Gate + Execution Plan |
| C# parity attention | Multi-language engine adapter concerns |
| Validator | `tools/checks` |

It is not a replacement for Muse because Muse covers Godot, Unreal, game design, assets, narrative, economy, LiveOps, and broader production flow. It is a strong sample for organizing the Godot subdomain.

## 3. Skill Organization Lessons

GodotPrompter's core lesson is that skills should be organized around real development work, not internal AI capabilities. Muse could eventually split Godot skill extensions into:

- Godot project setup.
- Scene architecture.
- Node composition.
- Script style.
- Signal architecture.
- Input and camera.
- UI and HUD.
- Physics and collision.
- Animation and state.
- Audio events.
- Save data.
- Export and platform checks.
- Testing and debug.

These can start as documentation and skill skeletons without immediate editor control.

## 4. Borrowable Design For Muse

### 4.1 Skill-First, Then Editor Automation

Muse's Godot workflow can have two layers:

```text
Godot Workflow Skill
  -> produces scene/script/test plans
Godot Editor Adapter
  -> executes reviewed plans
```

This avoids a common mistake: letting MCP edit the editor before scene architecture and mechanic specs are clear.

### 4.2 C# And GDScript Parity

GodotPrompter's attention to C# reminds Muse that Godot does not equal GDScript only. Both Chinese and English-speaking teams may choose C#.

Muse should eventually document:

- GDScript default path.
- C# supported path.
- Mixed-language caution.
- Migration checklist.
- Test command differences.

### 4.3 Skill Quality Gate

GodotPrompter's validator idea fits Muse:

- Every skill needs use when / do not use.
- Every skill needs inputs / outputs.
- Every skill needs workflow.
- Every skill needs quality bar.
- Every skill needs common failure modes.

Muse already uses a similar structure; Godot-specific extensions should keep it.

## 5. Risks And Limits

| Risk | Meaning | Muse Response |
|---|---|---|
| No live editor control | GodotPrompter is knowledge and workflow oriented, not an editor executor. | Pair it with Godot AI or Godot-MCP. |
| Over-fragmented skills | Too many skills increase maintenance cost. | Muse should absorb only high-frequency production surfaces. |
| Godot-only scope | It does not cover Unreal or full game production. | Treat it as a Godot sub-pack reference. |
| Prompt drift | Skill content may change with Godot versions. | Add version fields and checks. |

## 6. Follow-Up Questions

1. How does GodotPrompter define skill directories, names, and triggers?
2. How does it keep C# and GDScript guidance aligned?
3. What does its validator check?
4. Which Godot skills map to Muse P1/P2?
5. Does it include real project dry runs or case studies?
6. Does Muse need a `godot-implementation-adapter` skill family?

## 7. Muse Takeaway

GodotPrompter is the first reference for Muse's Godot-specific skill pack design. It reminds us that even if Muse later integrates Godot AI or MCP, it still needs stable workflow skills that define what should be done, why, and how it will be accepted.

Suggested follow-up artifacts:

- Godot skill extension matrix.
- GDScript / C# support policy.
- Godot implementation planning template.
- Godot skill validator rule set.

## 8. Sources

- GitHub: https://github.com/jame581/GodotPrompter
- Godot CLI official docs: https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html
- GdUnit4: https://github.com/godot-gdunit-labs/gdUnit4
