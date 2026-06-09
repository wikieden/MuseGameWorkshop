extends CanvasLayer
class_name CounterTrialHud

@onready var stamina_label: Label = $Panel/StaminaLabel
@onready var boss_label: Label = $Panel/BossLabel
@onready var phase_label: Label = $Panel/PhaseLabel
@onready var status_label: Label = $Panel/StatusLabel

func set_stamina(current: float, maximum: float) -> void:
	stamina_label.text = "Stamina: %d / %d" % [roundi(current), roundi(maximum)]

func set_boss_health(current: float, maximum: float) -> void:
	boss_label.text = "Boss: %d / %d" % [roundi(current), roundi(maximum)]

func set_phase(phase: int) -> void:
	phase_label.text = "Phase: %d" % phase

func set_status(text: String) -> void:
	status_label.text = text
