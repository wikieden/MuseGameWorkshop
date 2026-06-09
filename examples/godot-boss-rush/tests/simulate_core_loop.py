#!/usr/bin/env python3
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "resources" / "combat_data.tres"


def parse_number(name: str, text: str) -> float:
    match = re.search(rf"^{re.escape(name)} = ([0-9.]+)", text, re.MULTILINE)
    if not match:
        raise ValueError(f"missing {name}")
    return float(match.group(1))


def main() -> int:
    text = DATA.read_text(encoding="utf-8")
    stamina = parse_number("stamina_max", text)
    stamina_max = stamina
    dodge_cost = parse_number("stamina_dodge_cost", text)
    parry_cost = parse_number("stamina_parry_cost", text)
    regen = parse_number("stamina_regen_per_second", text)
    boss_health = parse_number("boss_health", text)
    counter_damage = parse_number("counter_damage", text)
    phase_2 = parse_number("boss_phase_2_threshold", text)
    phase_3 = parse_number("boss_phase_3_threshold", text)

    phase_seen = {1}
    counters = 0
    for _ in range(10):
        stamina = min(stamina_max, stamina + regen * 1.25)
        if stamina < dodge_cost:
            print("FAIL simulate-core-loop: insufficient stamina for dodge")
            return 1
        stamina -= dodge_cost
        stamina = min(stamina_max, stamina + regen * 0.55)
        if stamina < parry_cost:
            print("FAIL simulate-core-loop: insufficient stamina for parry")
            return 1
        stamina -= parry_cost
        boss_health = max(0.0, boss_health - counter_damage)
        counters += 1
        if boss_health <= phase_3:
            phase_seen.add(3)
        elif boss_health <= phase_2:
            phase_seen.add(2)

    if counters < 10:
        print("FAIL simulate-core-loop: fewer than 10 counters")
        return 1
    if boss_health > 0:
        print("FAIL simulate-core-loop: boss survived 10 core-loop counters")
        return 1
    if phase_seen != {1, 2, 3}:
        print(f"FAIL simulate-core-loop: phases seen {sorted(phase_seen)}")
        return 1

    print("PASS simulate-core-loop")
    return 0


if __name__ == "__main__":
    sys.exit(main())
