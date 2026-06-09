#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "CounterTrialCombatData.h"
#include "CounterTrialCombatComponent.generated.h"

DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(FCounterTrialStaminaChanged, float, Current, float, Maximum);
DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FCounterTrialCounterLanded, float, Damage);
DECLARE_DYNAMIC_MULTICAST_DELEGATE(FCounterTrialParrySucceeded);

UENUM(BlueprintType)
enum class ECounterTrialActionState : uint8
{
    Idle,
    Dodge,
    Parry
};

UCLASS(ClassGroup=(CounterTrial), meta=(BlueprintSpawnableComponent))
class COUNTERTRIAL_API UCounterTrialCombatComponent : public UActorComponent
{
    GENERATED_BODY()

public:
    UCounterTrialCombatComponent();

    UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Counter Trial")
    TObjectPtr<UCounterTrialCombatData> CombatData;

    UPROPERTY(BlueprintAssignable, Category = "Counter Trial")
    FCounterTrialStaminaChanged OnStaminaChanged;

    UPROPERTY(BlueprintAssignable, Category = "Counter Trial")
    FCounterTrialParrySucceeded OnParrySucceeded;

    UPROPERTY(BlueprintAssignable, Category = "Counter Trial")
    FCounterTrialCounterLanded OnCounterLanded;

    UFUNCTION(BlueprintCallable, Category = "Counter Trial")
    void ResetCombatState();

    UFUNCTION(BlueprintCallable, Category = "Counter Trial")
    bool StartDodge();

    UFUNCTION(BlueprintCallable, Category = "Counter Trial")
    bool StartParry();

    UFUNCTION(BlueprintCallable, Category = "Counter Trial")
    bool TryCounter();

    UFUNCTION(BlueprintCallable, Category = "Counter Trial")
    bool ReceiveBossAttack();

    UFUNCTION(BlueprintPure, Category = "Counter Trial")
    float GetStamina() const { return Stamina; }

    UFUNCTION(BlueprintPure, Category = "Counter Trial")
    ECounterTrialActionState GetActionState() const { return ActionState; }

protected:
    virtual void BeginPlay() override;
    virtual void TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction) override;

private:
    void UpdateTimers(float DeltaTime);
    void RegenerateStamina(float DeltaTime);
    float MaxStamina() const;

    float Stamina = 0.0f;
    float ActionTimer = 0.0f;
    float DodgeCooldownRemaining = 0.0f;
    float CounterWindowRemaining = 0.0f;
    bool bInvulnerable = false;
    ECounterTrialActionState ActionState = ECounterTrialActionState::Idle;
};
