# Ziva Research Report

Research date: 2026-06-10

Language: English

Target: Ziva / `ziva.sh`

Conclusion level: P1, reference for Godot in-editor AI product experience.

## 1. Conclusion

Ziva's primary value for Muse is product experience, not open architecture. It shows how a Godot developer might work with AI inside the editor: reading scene trees, reading live errors, writing GDScript / C#, running tests, seeing screenshots, referencing Godot docs, and completing a prompt -> edit -> run -> fix loop in one surface.

The most useful lessons for Muse are:

- AI tool experience should fit game developers' editor workflow, not only terminal workflow.
- Run, errors, screenshots, and fix suggestions should live in one loop.
- Documentation references and Godot version context can reduce hallucination risk.
- Commercial closed tools are better UX / product-flow references than normative architecture dependencies.

## 2. Project Positioning

Ziva is a Godot AI plugin / product. Public pages emphasize:

- Use inside Godot Editor.
- Scene tree understanding.
- Live error handling.
- GDScript and C# support.
- Test and debug support.
- Current Godot documentation awareness.
- Assistance with project content generation and editing.

It should be treated as:

- Godot AI IDE experience sample.
- In-editor assistant.
- AI debug loop product.
- Product experience reference, not an open architecture reference.

## 3. Product Experience Lessons

Ziva's main lesson is the user path:

```text
Developer intent
  -> Editor context
  -> AI suggestion or edit
  -> Run / Test / Screenshot
  -> Live error
  -> Fix
  -> Human approval
```

This path fits Muse's Playtest / QA / Evidence model. Muse does not need to build its own UI immediately, but its documents and templates should support this loop.

## 4. Borrowable Design For Muse

### 4.1 In-Editor Context

Ziva shows that Muse should not assume users only work in terminals. Godot and Unreal developers often work inside editors for scenes, animation, UI, assets, and debugging.

Muse adapter design should be able to record:

- Current open scene.
- Current selected node or Actor.
- Current play state.
- Current error.
- Current screenshot.
- Current documentation version.

### 4.2 Documentation Context

Ziva emphasizes Godot documentation awareness. Future Muse engine adapters should include:

- Engine version.
- Documentation source.
- API availability.
- Deprecated API warning.

This matters for both Godot 4.x and Unreal 5.x.

### 4.3 Productized Checkpoints

Muse can borrow developer-readable checkpoints:

- Did it run?
- What changed?
- What failed?
- What does the screenshot show?
- What should the developer approve?

These are easier for game teams than internal agent-state language.

## 5. Risks And Limits

| Risk | Meaning | Muse Response |
|---|---|---|
| Commercial / closed source | Public materials cannot fully verify internal architecture. | Borrow UX and product loop only. |
| Capability claims need validation | Website capabilities can change with versions or subscription. | Install or trial before implementation decisions. |
| Tool binding | Muse could accidentally become Ziva instructions. | Keep Muse's tool-agnostic adapter contract. |
| Data and privacy | In-editor AI may read project content. | Future adapters need data boundary rules. |

## 6. Follow-Up Questions

1. Does Ziva run locally, through a cloud service, or both?
2. How does it read and display the scene tree?
3. Is C# support comparable to GDScript support?
4. Can test results and screenshots be exported as files?
5. How does it handle errors, undo, and user confirmation?
6. Are its privacy, license, and data-use terms suitable for commercial game projects?

## 7. Muse Takeaway

Ziva should be Muse's Godot AI product experience reference. It best informs:

- Editor-context evidence record.
- Run -> error -> fix -> screenshot validation loop.
- Godot documentation-aware adapter notes.
- Human approval UI / UX wording.
- Data boundary checklist.

Muse should not depend on Ziva or make it a default tool. It should use Ziva to understand what a good AI editor workflow can feel like.

## 8. Sources

- Ziva official site: https://ziva.sh/
- Godot Asset Store page: https://store.godotengine.org/asset/ziva/ziva/
- Ziva Godot plugin repository: https://github.com/ziva-sh/ziva-agent-plugin-godot
- Godot CLI official docs: https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html
