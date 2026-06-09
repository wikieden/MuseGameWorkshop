---
name: playtest-report
description: Use when playtest observations need to become evidence, issue categories, hypotheses, decisions, and next iteration tasks.
---

# Playtest Report

## Use When

- A prototype, dry run, or planned slice needs structured playtest feedback.
- A team needs to decide continue, adjust, cut, or retest.
- Observations are scattered across notes or chat.

## Do Not Use When

- No test goal or playable/planned scenario exists.
- The request is only initial concept framing.
- The task is asset provenance review.

## Inputs

- Test goal.
- Scenario or build description.
- Player observations.
- Known issues.
- Metrics or qualitative notes.

## Outputs

- Playtest summary.
- Issue categories.
- Evidence and examples.
- Root-cause hypotheses.
- Priority and next actions.
- Review decision.

## Workflow

1. State what was tested and what was not tested.
2. Separate observations from interpretations.
3. Categorize issues by design, implementation, tuning, UX, level, asset, audio, and performance.
4. Identify next hypotheses and smallest retests.
5. Recommend continue, adjust, cut, or retest.
6. Write evidence to a report or dry-run file.

## Quality Bar

- Every major claim has evidence.
- The report leads to a concrete next iteration.
- It does not confuse player preference with proven design truth.
- Implementation changes require a design summary, execution plan, impact scope, and review approval.

## Common Failure Modes

- Listing bugs without production decisions.
- Treating one tester as universal truth.
- Skipping root-cause hypotheses.
- Failing to distinguish design, tuning, UX, and implementation issues.

## Next Skills

- `mechanic-spec`
- `vertical-slice-planner`
- `ux-flow`
- `level-blockout`
