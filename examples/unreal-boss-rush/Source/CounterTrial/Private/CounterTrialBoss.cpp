#include "CounterTrialBoss.h"
#include "CounterTrialCombatData.h"

ACounterTrialBoss::ACounterTrialBoss()
{
    PrimaryActorTick.bCanEverTick = false;
}

void ACounterTrialBoss::BeginPlay()
{
    Super::BeginPlay();
    ResetBoss();
}

void ACounterTrialBoss::ResetBoss()
{
    Health = MaxHealth();
    Phase = 1;
    OnBossHealthChanged.Broadcast(Health, MaxHealth());
    OnBossPhaseChanged.Broadcast(Phase);
}

void ACounterTrialBoss::ApplyCounterDamage(float Damage)
{
    Health = FMath::Max(0.0f, Health - Damage);
    UpdatePhase();
    OnBossHealthChanged.Broadcast(Health, MaxHealth());
    if (Health <= 0.0f)
    {
        OnBossDefeated.Broadcast();
    }
}

void ACounterTrialBoss::UpdatePhase()
{
    if (!CombatData)
    {
        return;
    }

    int32 NextPhase = 1;
    if (Health <= CombatData->BossPhase3Threshold)
    {
        NextPhase = 3;
    }
    else if (Health <= CombatData->BossPhase2Threshold)
    {
        NextPhase = 2;
    }

    if (NextPhase != Phase)
    {
        Phase = NextPhase;
        OnBossPhaseChanged.Broadcast(Phase);
    }
}

float ACounterTrialBoss::MaxHealth() const
{
    return CombatData ? CombatData->BossHealth : 100.0f;
}
