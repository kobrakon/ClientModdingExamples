using System.Reflection;
using Aki.Reflection.Patching;

// Here I'll showcase how to patch a method to get its return value whenever it's invoked
namespace GetNonPublicMethodReturnEx
{
    // Lets just pretend this is an EFT class
    public class ExampleClass
    {
        // Lets also pretend this is a private EFT method we need the result from when it's invoked
        private int CalculateInt(int num1, int num2)
        {
            return (num1 - num2);
        }
    }

    public class GetNonPublicMethodReturnPatch : ModulePatch
    {
        public static int number { get; set; } // Number we want to equal the result of CalculateInt

        // Inherit GetTargetMethod and have it return with the MethodBase for our requested method
        protected override MethodBase GetTargetMethod()
        {   // BindingFlags.NonPublic as the method is private
            return typeof(ExampleClass).GetMethod("CalculateInt", BindingFlags.Instance | BindingFlags.NonPublic);
        }

        // Create postfix method with PatchPostfix attribute and ref matching the type of the method's result
        [PatchPostfix]
        static void Postfix(ref int __result)
        {
            number = __result; // Get the return value from CalculateInt and set it to our field
        }
    }
}
