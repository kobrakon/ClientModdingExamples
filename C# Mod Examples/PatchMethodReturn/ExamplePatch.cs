using System.Reflection;
using Aki.Reflection.Patching;

// Here I'll showcase how to patch a mod to change its return value
namespace PatchMethodReturn
{   // Lets pretend this is an EFT class
    public class ExampleClass
    {   // Lets pretend this is a private EFT method that we need to modify the return of
        private string GetString()
        {
            return "string";
        }
    }

    public class PatchMethodReturnPatch : ModulePatch
    {   // Inherit GetTargetMethod and have it return the MethodBase from our requested method
        protected override MethodBase GetTargetMethod()
        {   // BindingFlags.NonPublic as the method is private
            return typeof(ExampleClass).GetMethod("GetString", BindingFlags.Instance | BindingFlags.NonPublic);
        }

        // Create postfix method with PatchPostfix attribute, set parameter as ref with the type of the requested method return
        [PatchPostfix]
        static void PostFix(ref string __result)
        {
            __result = "PatchedString"; // set to what we want the method to return
        }
    }
}
