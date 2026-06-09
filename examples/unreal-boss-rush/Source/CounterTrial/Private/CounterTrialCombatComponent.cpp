#include "CounterTrialCombatComponent.h"

UCounterTrialCombatComponent::UCounterTrialCombatComponent()
{
    PrimaryComponentTick.bCanEverTick = true;
}

void UCounterTrialCombatComponent::BeginPlay()
{
    Super::BeginPlay();
    ResetCombatState();
}

void UCounterTrialCombatComponent::TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction)
{
    Super::TickComponent(DeltaTime, TickType, ThisTickFunction);
    UpdateTimers(DeltaTime);
    RegenerateStamina(DeltaTime);
}

void UCounterTrialCombatComponent::ResetCombatState()
{
    Stamina = MaxStamina();
    ActionTimer = 0.0f;
    DodgeCooldownRemaining = 0.0f;
    CounterWindowRemaining = 0.0f;
    bInvulnerable = false;
    ActionState = ECounterTrialActionState::Idle;
    OnStaminaChanged.Broadcast(Stamina, MaxStamina());
}

bool UCounterTrialCombatComponent::StartDodge()
{
    if (!CombatData || ActionState != ECounterTrialActionState::Idle || DodgeCooldownRemaining > 0.0f)
    {
        return false;
    }
    if (Stamina < CombatData->StaminaDodgeCost)
    {
        return false;
    }

    Stamina -= CombatData->StaminaDodgeCost;
    ActionState = ECounterTrialActionState::Dodge;
    ActionTimer = CombatData->DodgeDuration;
    DodgeCooldownRemaining = CombatData->DodgeDuration + CombatData->DodgeCooldown;
    bInvulnerable = true;
    OnStaminaChanged.Broadcast(Stamina, MaxStamina());
    return true;
}

bool UCounterTrialCombatComponent::StartParry()
{
    if (!CombatData || ActionState != ECounterTrialActionState::Idle)
    {
        return false;
    }
    if (Stamina < CombatData->StaminaParryCost)
    {
        return false;
    }

    Stamina -= CombatData->StaminaParryCost;
    ActionState = ECounterTrialActionState::Parry;
    ActionTimer = CombatData->ParryWindow + CombatData->ParryRecovery;
    OnStaminaChanged.Broadcast(Stamina, MaxStamina());
    return true;
}

bool UCounterTrialCombatComponent::TryCounter()
{
    if (!CombatData || CounterWindowRemaining <= 0.0f)
    {
        return false;
    }

    CounterWindowRemaining = 0.0f;
    OnCounterLanded.Broadcast(CombatData->CounterDamage);
    return true;
}

bool UCounterTrialCombatComponent::ReceiveBossAttack()
{
    if (!CombatData || bInvulnerable)
    {
        return false;
    }

    if (ActionState == ECounterTrialActionState::Parry && ActionTimer > CombatData->ParryRecovery)
    {
        CounterWindowRemaining = CombatData->CounterWindow;
        OnParrySucceeded.Broadcast();
        return false;
    }

    return true;
}

void UCounterTrialCombatComponent::UpdateTimers(float DeltaTime)
{
    DodgeCooldownRemaining = FMath::Max(0.0f, DodgeCooldownRemaining - DeltaTime);
    CounterWindowRemaining = FMath::Max(0.0f, CounterWindowRemaining - DeltaTime);
    if (ActionTimer > 0.0f)
    {
        ActionTimer = FMath::Max(0.0f, ActionTimer - DeltaTime);
        if (ActionTimer == 0.0f)
        {
            ActionState = ECounterTrialActionState::Idle;
            bInvulnerable = false;
        }
    }
}

void UCounterTrialCombatComponent::RegenerateStamina(float DeltaTime)
{
    if (!CombatData || Stamina >= MaxStamina())
    {
        return;
    }

    Stamina = FMath::Min(MaxStamina(), Stamina + CombatData->StaminaRegenPerSecond * DeltaTime);
    OnStaminaChanged.Broadcast(Stamina, MaxStamina());
}

float UCounterTrialCombatComponent::MaxStamina() const
{
    return CombatData ? CombatData->StaminaMax : 100.0f;
}
