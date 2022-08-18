using BepInEx;
using UnityEngine;
using BepInEx.Configuration;

// Configs should be always be declared in the Plugin script on Awake()
namespace ConfigurationExample
{
    [BepInPlugin("com.kobrakon.configexample","BepInEx Config Example", "1.0.0")]
    public class Plugin : BaseUnityPlugin
    {
        internal static ConfigEntry<KeyboardShortcut> Keybind;
        internal static ConfigEntry<float> NumberSlider; // can be float int etc
        internal static ConfigEntry<bool> Boolean;
        private static GameObject Hook = new GameObject("gameobject name");
        void Awake() // called when the EscapeFromTarkov process is started
        {   // Layout : ConfigEntry<Type> Field = Config.Bind("Setting Section Name", "Setting Name", default type value, "description");
            Keybind = Config.Bind("Keybinds", "Keybind setting title", new KeyboardShortcut(KeyCode.C),"Keybind setting description");
            NumberSlider = Config.Bind("Values", "Value setting title", 10f, new ConfigDescription("Keybind setting description", new AcceptableValueRange<float>(0f, 100f)));
            Boolean = Config.Bind("Booleans", "Bool setting title", true, "Boolean setting description");

            Hook.AddComponent<ConfigController>();
            DontDestroyOnLoad(Hook);
            Logger.LogInfo("Config Example Loaded");
        }
    }
}