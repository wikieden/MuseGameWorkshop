extends CharacterBody2D
class_name CounterTrialBoss

signal health_changed(current: float, maximum: float)
signal phase_changed(phase: int)
signal attack_started(phase: int)
signal attack_active
signal attack_finished
signal boss_defeated

@export var combat_data: Resource

var health: float
var phase: int = 1
var attack_state: StringName = &"waiting"
var attack_timer: float = 0.0
var attack_count: int = 0

func _ready() -> void:
	if combat_data == null:
		combat_data = preload("res://resources/combat_data.tres")
	reset_boss()

func reset_boss() -> void:
	health = combat_data.boss_health
	phase = 1
	attack_state = &"waiting"
	attack_timer = combat_data.boss_attack_interval
	attack_count = 0
	emit_signal("health_changed", health, combat_data.boss_health)
	emit_signal("phase_changed", phase)

func _physics_process(delta: float) -> void:
	attack_timer = maxf(0.0, attack_timer - delta)
	if attack_timer > 0.0:
		return
	match attack_state:
		&"waiting":
			_start_attack()
		&"windup":
			_make_attack_active()
		&"active":
			_finish_attack()
		&"recovery":
			_wait_for_next_attack()

func _start_attack() -> void:
	attack_state = &"windup"
	attack_timer = maxf(0.12, combat_data.boss_attack_windup - (phase - 1) * 0.08)
	emit_signal("attack_started", phase)

func _make_attack_active() -> void:
	attack_state = &"active"
	attack_timer = combat_data.boss_attack_active
	attack_count += 1
	emit_signal("attack_active")

func _finish_attack() -> void:
	attack_state = &"recovery"
	attack_timer = combat_data.boss_attack_recovery
	emit_signal("attack_finished")

func _wait_for_next_attack() -> void:
	attack_state = &"waiting"
	attack_timer = maxf(0.45, combat_data.boss_attack_interval - (phase - 1) * 0.18)

func take_counter_damage(damage: float) -> void:
	health = maxf(0.0, health - damage)
	_update_phase()
	emit_signal("health_changed", health, combat_data.boss_health)
	if health <= 0.0:
		emit_signal("boss_defeated")

func _update_phase() -> void:
	var next_phase := 1
	if health <= combat_data.boss_phase_3_threshold:
		next_phase = 3
	elif health <= combat_data.boss_phase_2_threshold:
		next_phase = 2
	if next_phase != phase:
		phase = next_phase
		emit_signal("phase_changed", phase)
