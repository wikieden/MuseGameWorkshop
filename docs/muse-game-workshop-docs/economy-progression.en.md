# Economy & Progression

Version: v0.9

Language: English

## 1. Purpose

v0.9 adds the Economy & Progression design pack for Muse Game Workshop. It helps a game team describe how resources, rewards, costs, unlocks, upgrades, and pacing support the core loop before the team writes economy code, creates backend services, or generates production assets.

This pack is design-first. It should be usable by Codex, Claude Code, Kiro CLI, opencode, and other AI coding tools through the same review gate, templates, dry-run evidence, and checks.

## 2. Production Terms

Use game-production language first:

| Production concept | Meaning in this pack |
|---|---|
| Economy system | The full resource loop: sources, sinks, storage, conversion, scarcity, and reward pressure. |
| Progression | How the player, party, units, content, and options open over time. |
| Reward structure | How missions, encounters, quests, failures, and optional goals pay out. |
| Tuning loop | The process of recording a hypothesis, changing a parameter, testing it, and deciding the next move. |
| Balance risk | A known risk where rewards, costs, pacing, or unlocks can damage player motivation or challenge. |

Chinese-facing docs should map these terms to `经济系统`, `成长线`, `奖励结构`, `数值调优闭环`, and `平衡性风险`.

## 3. Scope

v0.9 covers:

- Economy model.
- Progression map.
- Resource and reward table.
- Tuning loop.
- Tactics dry run for action points, stamina, cooldowns, mission rewards, unit growth, skill unlocks, secondary objective rewards, and failure compensation.
- Review gate, evidence, and static checks.

v0.9 does not cover:

- Commercial backend implementation.
- Payment systems, monetization, gacha, battle pass, or paid-content design.
- Real telemetry services.
- LiveOps event operation.
- Engine implementation in Godot or Unreal.
- New assets, final art, release-candidate art, or audio production.

## 4. Economy Model

The economy model should make the loop legible:

| Area | Required decision |
|---|---|
| Resources | Name each resource, its player-facing meaning, and whether it is moment-to-moment, run-based, campaign-based, or meta-progression. |
| Sources | Define where resources come from: combat, missions, exploration, crafting, quests, failures, daily/weekly systems, or external rewards. |
| Sinks | Define where resources leave: upgrades, retries, crafting, healing, recruitment, purchases, unlocks, or temporary boosts. |
| Storage | Define caps, banking, carryover, loss on failure, and reset rules. |
| Conversion | Define exchange rules between resources, including one-way conversions and loss ratios. |
| Pressure | Define the intended scarcity, risk, choice, or tradeoff the resource creates. |

The model should not only list currencies. It must explain why each resource exists and which player decision it creates.

## 5. Progression Map

Progression should connect player motivation to content and system access:

- Player or account progression.
- Character, unit, class, weapon, ability, or deck progression.
- Content progression such as missions, chapters, regions, dungeons, puzzles, or routes.
- Difficulty progression.
- Unlock prerequisites.
- Catch-up, fail-forward, or retry rules.
- Anti-grind boundaries.

For each progression node, record:

- What unlocks.
- What the player must do.
- What resource or cost is involved.
- What new decision or play pattern it creates.
- What risk appears if the unlock happens too early or too late.

## 6. Resource And Reward Table

Every reward table needs design intent, not just numbers.

Required columns:

- Source or activity.
- Player goal.
- Reward type.
- Quantity or range.
- Frequency.
- Scaling rule.
- Failure compensation.
- Optional or secondary objective reward.
- Risk if too low.
- Risk if too high.
- Validation method.

This table should make mission rewards, encounter payouts, loot, upgrade costs, retry costs, and fail-forward rules visible before implementation.

## 7. Tuning Loop

Every tuning pass should follow the same evidence pattern:

1. State the design hypothesis.
2. Identify the player behavior or balance problem.
3. Record current values.
4. Propose the smallest meaningful change.
5. Define the test scenario.
6. Record observation.
7. Decide keep, revert, adjust, or split test.
8. Link to the next validation.

AI tools may draft candidate changes, but the project should preserve the human decision and the evidence behind it.

## 7.1 Numerical Planning Addendum

v0.9.1 adds Numerical Planning as a focused addendum for level curve, combat parameter table, and system numerical plan.

Use it when economy and progression decisions need concrete level, combat, or system-number records before implementation:

- Level curve.
- Combat parameter table.
- System numerical plan.
- TTK, EHP, DPR, action economy, stamina, cooldown, rewards, costs, and failure compensation.

See `numerical-planning.en.md` / `numerical-planning.zh.md`.

## 8. Tactics Validation Focus

The v0.9 dry run uses Tactics / turn-based tactics because it exposes economy and progression clearly:

- Action points.
- Stamina.
- Cooldowns.
- Mission rewards.
- Secondary objective rewards.
- Failure compensation.
- Unit level.
- Skill unlocks.
- Equipment or ability costs.
- Upgrade pacing.

The dry run remains no-code. It proves that the economy and progression deliverables can connect to the Tactics genre track without creating engine files.

## 9. Handoffs

| From | To | Handoff |
|---|---|---|
| Game Designer | Technical Designer | Economy model, progression map, parameters, edge cases. |
| Technical Designer | Gameplay Programmer | Data schema direction, tunable values, validation scenario. |
| Game Designer | Level Designer | Reward assumptions, mission payout rules, secondary objective reward rules. |
| Game Designer | QA / Playtest | Hypotheses, risk cases, tuning checks, expected player behavior. |
| Producer | Release Manager | Scope boundary, evidence, blocked items, next-version dependency. |

## 10. Review Gate

v0.9 work may proceed only after review approval. The approved scope is:

- Add economy/progression docs and templates.
- Add no-code Tactics dry-run evidence.
- Add static checks.
- Update README, package indexes, roadmap, delivery plan, testing strategy, and project rules.

Any engine implementation, real telemetry, monetization, payment, backend, or asset production requires a separate review.

## 11. Completion Evidence

v0.9 is complete when:

- `economy-progression.zh.md` and `economy-progression.en.md` exist.
- Economy model, progression map, resource/reward table, and tuning-loop templates exist.
- Tactics dry-run evidence exists.
- Review gate and completion evidence exist.
- `tools/checks/check-v0.9-economy-progression` passes.
- Existing v0.7 and v0.8 checks still pass.

After v0.9, the next planned version is v0.10 Telemetry & Playtest Analytics.
