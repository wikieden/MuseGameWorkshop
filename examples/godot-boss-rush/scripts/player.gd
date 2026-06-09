extends CharacterBody2D
class_name CounterTrialPlayer

signal stamina_changed(current: float, maximum: float)
signal health_changed(current: int, maximum: int)
signal parry_succeeded
signal counter_landed(damage: float)
signal player_died

@export var combat_data: Resource

var health: int
var stamina: float
var facing: Vector2 = Vector2.RIGHT
var action_state: StringName = &"idle"
var action_timer: float = 0.0
var dodge_cooldown_remaining: float = 0.0
var counter_window_remaining: float = 0.0
var invulnerable: bool = false

func _ready() -> void:
	if combat_data == null:
		combat_data = preload("res://resources/combat_data.tres")
	reset_player()

func reset_player() -> void:
	health = combat_data.player_health
	stamina = combat_data.stamina_max
	action_state = &"idle"
	action_timer = 0.0
	counter_window_remaining = 0.0
	invulnerable = false
	emit_signal("health_changed", health, combat_data.player_health)
	emit_signal("stamina_changed", stamina, combat_data.stamina_max)

func _physics_process(delta: float) -> void:
	_update_timers(delta)
	_regenerate_stamina(delta)
	var input_vector := _read_move_input()
	if action_state == &"dodge":
		velocity = facing * combat_data.dodge_speed
	else:
		velocity = input_vector * combat_data.player_move_speed
		if input_vector.length() > 0.0:
			facing = input_vector
	move_and_slide()

	if Input.is_action_just_pressed("dodge"):
		start_dodge()
	if Input.is_action_just_pressed("parry"):
		start_parry()
	if Input.is_action_just_pressed("counter"):
		try_counter()

func _read_move_input() -> Vector2:
	var input_vector := Vector2.ZERO
	input_vector.x = Input.get_action_strength("move_right") - Input.get_action_strength("move_left")
	input_vector.y = Input.get_action_strength("move_down") - Input.get_action_strength("move_up")
	return input_vector.normalized()

func _update_timers(delta: float) -> void:
	if dodge_cooldown_remaining > 0.0:
		dodge_cooldown_remaining = maxf(0.0, dodge_cooldown_remaining - delta)
	if counter_window_remaining > 0.0:
		counter_window_remaining = maxf(0.0, counter_window_remaining - delta)
	if action_timer > 0.0:
		action_timer = maxf(0.0, action_timer - delta)
		if action_timer == 0.0:
			action_state = &"idle"
			invulnerable = false

func _regenerate_stamina(delta: float) -> void:
	if stamina >= combat_data.stamina_max:
		return
	stamina = minf(combat_data.stamina_max, stamina + combat_data.stamina_regen_per_second * delta)
	emit_signal("stamina_changed", stamina, combat_data.stamina_max)

func start_dodge() -> bool:
	if action_state != &"idle" or dodge_cooldown_remaining > 0.0:
		return false
	if stamina < combat_data.stamina_dodge_cost:
		return false
	stamina -= combat_data.stamina_dodge_cost
	action_state = &"dodge"
	action_timer = combat_data.dodge_duration
	dodge_cooldown_remaining = combat_data.dodge_duration + combat_data.dodge_cooldown
	invulnerable = true
	emit_signal("stamina_changed", stamina, combat_data.stamina_max)
	return true

func start_parry() -> bool:
	if action_state != &"idle":
		return false
	if stamina < combat_data.stamina_parry_cost:
		return false
	stamina -= combat_data.stamina_parry_cost
	action_state = &"parry"
	action_timer = combat_data.parry_window + combat_data.parry_recovery
	emit_signal("stamina_changed", stamina, combat_data.stamina_max)
	return true

func try_counter() -> bool:
	if counter_window_remaining <= 0.0:
		return false
	counter_window_remaining = 0.0
	emit_signal("counter_landed", combat_data.counter_damage)
	return true

func receive_boss_attack() -> void:
	if invulnerable:
		return
	if action_state == &"parry" and action_timer > combat_data.parry_recovery:
		counter_window_remaining = combat_data.counter_window
		emit_signal("parry_succeeded")
		return
	health -= combat_data.boss_attack_damage
	emit_signal("health_changed", health, combat_data.player_health)
	if health <= 0:
		emit_signal("player_died")
