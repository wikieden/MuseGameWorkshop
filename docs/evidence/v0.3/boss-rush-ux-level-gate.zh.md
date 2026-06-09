# Boss Rush v0.3 UX And Level Gate

版本：v0.3

语言：中文

日期：2026-06-09

## 1. UX Gate

| Check | Decision | Notes |
|---|---|---|
| HUD does not hide combat center | Approved | HUD remains in top-left panel. |
| Counter feedback is visible near fight focus | Approved | `CounterFlash` appears near arena center. |
| Status text still names player action | Approved | Existing HUD status text remains. |
| Audio feedback does not replace visual feedback | Approved | SFX is additive. |
| Onboarding remains minimal but clear | Approved | README and HUD keep input reminders. |

## 2. Level Blockout Gate

| Check | Decision | Notes |
|---|---|---|
| Arena floor remains readable | Approved | No decorative background added. |
| Player and Boss silhouettes remain distinct | Approved | Prototype feedback does not change bodies. |
| Feedback does not alter collision | Approved | Assets are visual/audio only. |
| Retry path remains available | Approved | R retry unchanged. |

## 3. Accessibility Notes

- Counter feedback is represented by both visual and audio cues.
- The prototype still needs later colorblind-safe review.
- The prototype still needs later volume slider and audio settings.

## 4. Next UX Work

- Add parry-success cue distinct from counter-hit cue.
- Add boss windup cue review.
- Add menu/settings accessibility checklist in v0.5 publishing readiness.
