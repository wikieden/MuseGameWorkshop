extends Node2D
class_name CounterTrialTestArena

@onready var player: Node = $Player
@onready var boss: Node = $Boss
@onready var hud: Node = $HUD
@onready var counter_flash: Node2D = get_node_or_null("CounterFlash")
@onready var counter_hit_sfx: AudioStreamPlayer = get_node_or_null("CounterHitSfx")

var core_loop_count: int = 0
var defeated: bool = false
var counter_feedback_timer: float = 0.0

const COUNTER_FEEDBACK_DURATION := 0.22

func _ready() -> void:
	player.stamina_changed.connect(hud.set_stamina)
	player.health_changed.connect(_on_player_health_changed)
	player.parry_succeeded.connect(_on_parry_succeeded)
	player.counter_landed.connect(_on_counter_landed)
	player.player_died.connect(_on_player_died)
	boss.health_changed.connect(hud.set_boss_health)
	boss.phase_changed.connect(hud.set_phase)
	boss.attack_started.connect(_on_boss_attack_started)
	boss.attack_active.connect(_on_boss_attack_active)
	boss.attack_finished.connect(_on_boss_attack_finished)
	boss.boss_defeated.connect(_on_boss_defeated)
	_reset_run()

func _process(delta: float) -> void:
	if Input.is_action_just_pressed("retry"):
		_reset_run()
	if counter_feedback_timer > 0.0:
		counter_feedback_timer = maxf(0.0, counter_feedback_timer - delta)
		if counter_feedback_timer == 0.0 and counter_flash != null:
			counter_flash.visible = false

func _reset_run() -> void:
	core_loop_count = 0
	defeated = false
	counter_feedback_timer = 0.0
	if counter_flash != null:
		counter_flash.visible = false
	if counter_hit_sfx != null:
		counter_hit_sfx.stop()
	player.position = Vector2(320, 270)
	boss.position = Vector2(660, 270)
	player.reset_player()
	boss.reset_boss()
	hud.set_status("Read the boss, parry, then counter. R retries.")

func _on_player_health_changed(current: int, maximum: int) -> void:
	hud.set_status("Player HP: %d / %d" % [current, maximum])

func _on_boss_attack_started(phase: int) -> void:
	hud.set_status("Boss windup. Phase %d." % phase)

func _on_boss_attack_active() -> void:
	player.receive_boss_attack()
	hud.set_status("Boss attack active.")

func _on_boss_attack_finished() -> void:
	hud.set_status("Attack recovered. Prepare for next read.")

func _on_parry_succeeded() -> void:
	hud.set_status("Parry! Counter window open.")

func _on_counter_landed(damage: float) -> void:
	core_loop_count += 1
	boss.take_counter_damage(damage)
	if counter_flash != null:
		counter_flash.global_position = (player.global_position + boss.global_position) * 0.5
		counter_flash.rotation += PI / 10.0
		counter_flash.visible = true
	counter_feedback_timer = COUNTER_FEEDBACK_DURATION
	if counter_hit_sfx != null:
		counter_hit_sfx.play()
	hud.set_status("Counter %d landed for %d." % [core_loop_count, roundi(damage)])

func _on_player_died() -> void:
	hud.set_status("Defeat. Press R to retry.")

func _on_boss_defeated() -> void:
	defeated = true
	hud.set_status("Boss defeated after %d counters. Press R to retry." % core_loop_count)
