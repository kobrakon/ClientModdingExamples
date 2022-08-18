using EFT;
using System.Reflection;
using Aki.Reflection.Patching;

namespace AccessGameWorldExample
{
    public class AccessGameWorldPatch : ModulePatch
    {
        // Inherit GetTargetMethod from ModulePatch
        protected override MethodBase GetTargetMethod()
        {   // Get method from type, use BindingFlags.Public as it's a public method
            return typeof(GameWorld).GetMethod("OnGameStarted", BindingFlags.Public | BindingFlags.Instance);
        }

        // Will be invoked after the "OnGameStarted" method is ran and the world is loaded
        // from here you can access objects in the game world
        [PatchPostfix]
        void PostFix()
        {
            // put logic here
        }
    }
}