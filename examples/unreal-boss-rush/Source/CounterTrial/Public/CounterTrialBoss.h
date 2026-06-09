#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "CounterTrialBoss.generated.h"

class UCounterTrialCombatData;

DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(FCounterTrialBossHealthChanged, float, Current, float, Maximum);
DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FCounterTrialBossPhaseChanged, int32, Phase);
DECLARE_DYNAMIC_MULTICAST_DELEGATE(FCounterTrialBossDefeated);

UCLASS()
class COUNTERTRIAL_API ACounterTrialBoss : public AActor
{
    GENERATED_BODY()

public:
    ACounterTrialBoss();

    UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Counter Trial")
    TObjectPtr<UCounterTrialCombatData> CombatData;

    UPROPERTY(BlueprintAssignable, Category = "Counter Trial")
    FCounterTrialBossHealthChanged OnBossHealthChanged;

    UPROPERTY(BlueprintAssignable, Category = "Counter Trial")
    FCounterTrialBossPhaseChanged OnBossPhaseChanged;

    UPROPERTY(BlueprintAssignable, Category = "Counter Trial")
    FCounterTrialBossDefeated OnBossDefeated;

    UFUNCTION(BlueprintCallable, Category = "Counter Trial")
    void ResetBoss();

    UFUNCTION(BlueprintCallable, Category = "Counter Trial")
    void ApplyCounterDamage(float Damage);

    UFUNCTION(BlueprintPure, Category = "Counter Trial")
    int32 GetPhase() const { return Phase; }

protected:
    virtual void BeginPlay() override;

private:
    void UpdatePhase();
    float MaxHealth() const;

    float Health = 0.0f;
    int32 Phase = 1;
};
