#pragma once

#include "CoreMinimal.h"
#include "Blueprint/UserWidget.h"
#include "CounterTrialDebugHUD.generated.h"

UCLASS()
class COUNTERTRIAL_API UCounterTrialDebugHUD : public UUserWidget
{
    GENERATED_BODY()

public:
    UFUNCTION(BlueprintImplementableEvent, BlueprintCallable, Category = "Counter Trial")
    void SetStamina(float Current, float Maximum);

    UFUNCTION(BlueprintImplementableEvent, BlueprintCallable, Category = "Counter Trial")
    void SetBossHealth(float Current, float Maximum);

    UFUNCTION(BlueprintImplementableEvent, BlueprintCallable, Category = "Counter Trial")
    void SetPhase(int32 Phase);

    UFUNCTION(BlueprintImplementableEvent, BlueprintCallable, Category = "Counter Trial")
    void SetStatusText(const FText& Status);
};
