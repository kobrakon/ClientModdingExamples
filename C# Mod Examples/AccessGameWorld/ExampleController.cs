using EFT;
using UnityEngine;
using Comfort.Common;

// example for using a Mono Controller script to access gameworld
namespace AccessGameWorldExample
{
    public class AccessGameWorldController : MonoBehaviour
    {
        private static GameWorld gameWorld; // field we'll use to hold the GameWorld instance
        // mono method called every frame
        void Update()
        {
            // check if game world is instantiated, instatiated = exists in scene
            if (!Singleton<GameWorld>.Instantiated) return; // don't allow logic to run if not instantiated

            gameWorld = Singleton<GameWorld>.Instance;
        }
    }
}