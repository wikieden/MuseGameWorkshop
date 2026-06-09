using UnrealBuildTool;

public class CounterTrial : ModuleRules
{
    public CounterTrial(ReadOnlyTargetRules Target) : base(Target)
    {
        PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;

        PublicDependencyModuleNames.AddRange(new[]
        {
            "Core",
            "CoreUObject",
            "Engine",
            "EnhancedInput",
            "InputCore",
            "UMG"
        });

        PrivateDependencyModuleNames.AddRange(new[]
        {
            "Slate",
            "SlateCore"
        });
    }
}
