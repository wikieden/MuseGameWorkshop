#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "CounterTrialCharacter.generated.h"

class UCounterTrialCombatComponent;

UCLASS()
class COUNTERTRIAL_API ACounterTrialCharacter : public ACharacter
{
    GENERATED_BODY()

public:
    ACounterTrialCharacter();

    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Counter Trial")
    TObjectPtr<UCounterTrialCombatComponent> CombatComponent;

    UFUNCTION(BlueprintCallable, Category = "Counter Trial")
    bool Dodge();

    UFUNCTION(BlueprintCallable, Category = "Counter Trial")
    bool Parry();

    UFUNCTION(BlueprintCallable, Category = "Counter Trial")
    bool Counter();
};
