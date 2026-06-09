extends Resource
class_name CombatData

@export var player_health: int = 3
@export var player_move_speed: float = 230.0
@export var dodge_speed: float = 470.0
@export var dodge_duration: float = 0.22
@export var dodge_cooldown: float = 0.18
@export var stamina_max: float = 100.0
@export var stamina_regen_per_second: float = 32.0
@export var stamina_dodge_cost: float = 24.0
@export var stamina_parry_cost: float = 18.0
@export var parry_window: float = 0.18
@export var parry_recovery: float = 0.22
@export var counter_window: float = 0.65
@export var counter_damage: float = 12.0
@export var boss_health: float = 100.0
@export var boss_phase_2_threshold: float = 66.0
@export var boss_phase_3_threshold: float = 33.0
@export var boss_attack_interval: float = 1.25
@export var boss_attack_windup: float = 0.45
@export var boss_attack_active: float = 0.22
@export var boss_attack_recovery: float = 0.5
@export var boss_attack_damage: int = 1
