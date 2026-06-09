#include "CounterTrialCharacter.h"
#include "CounterTrialCombatComponent.h"

ACounterTrialCharacter::ACounterTrialCharacter()
{
    PrimaryActorTick.bCanEverTick = true;
    CombatComponent = CreateDefaultSubobject<UCounterTrialCombatComponent>(TEXT("CounterTrialCombatComponent"));
}

bool ACounterTrialCharacter::Dodge()
{
    return CombatComponent && CombatComponent->StartDodge();
}

bool ACounterTrialCharacter::Parry()
{
    return CombatComponent && CombatComponent->StartParry();
}

bool ACounterTrialCharacter::Counter()
{
    return CombatComponent && CombatComponent->TryCounter();
}
