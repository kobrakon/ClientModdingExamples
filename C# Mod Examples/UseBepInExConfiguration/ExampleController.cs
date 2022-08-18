using UnityEngine;

namespace ConfigurationExample
{
    public class ConfigController : MonoBehaviour
    {
        void Update()
        {
            // If player has pressed key
            if (Plugin.Keybind.Value.IsDown())
            {
                // put logic here
            }
            // Though, BepInEx keybinds are a bit weird in which they only register when no other keys are being pressed
            // So another way of checking if they keybind is pressed that I recommend is to use the UnityEngine.InputLegacyModule
            // as it will register the key being pressed regardless of if other keys are also pressed
            if (Input.GetKey(Plugin.Keybind.Value.MainKey))
            {
                // put logic here
            }
            

            // If config number slider value meets condition
            if (Plugin.NumberSlider.Value >= 0)
            {
                // put logic here
            }

            // You can also use the config value to set a field by doing 'field = Plugin.NumberSlider.Value;'

            // If config boolean option is true
            if (Plugin.Boolean.Value)
            {
                // put logic here
            }
        }
    }
}
