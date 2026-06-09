using UnrealBuildTool;
using System.Collections.Generic;

public class CounterTrialTarget : TargetRules
{
    public CounterTrialTarget(TargetInfo Target) : base(Target)
    {
        Type = TargetType.Game;
        DefaultBuildSettings = BuildSettingsVersion.V2;
        ExtraModuleNames.Add("CounterTrial");
    }
}
