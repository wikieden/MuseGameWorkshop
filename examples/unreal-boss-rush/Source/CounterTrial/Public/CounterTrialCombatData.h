#pragma once

#include "CoreMinimal.h"
#include "Engine/DataAsset.h"
#include "CounterTrialCombatData.generated.h"

UCLASS(BlueprintType)
class COUNTERTRIAL_API UCounterTrialCombatData : public UDataAsset
{
    GENERATED_BODY()

public:
    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Player")
    int32 PlayerHealth = 3;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Stamina")
    float StaminaMax = 100.0f;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Stamina")
    float StaminaRegenPerSecond = 28.0f;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Stamina")
    float StaminaDodgeCost = 22.0f;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Stamina")
    float StaminaParryCost = 18.0f;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Dodge")
    float DodgeDuration = 0.18f;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Dodge")
    float DodgeCooldown = 0.24f;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Parry")
    float ParryWindow = 0.22f;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Parry")
    float ParryRecovery = 0.20f;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Counter")
    float CounterWindow = 0.45f;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Counter")
    float CounterDamage = 12.0f;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Boss")
    float BossHealth = 100.0f;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Boss")
    float BossPhase2Threshold = 66.0f;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Boss")
    float BossPhase3Threshold = 33.0f;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Boss")
    float BossAttackDamage = 1.0f;
};
