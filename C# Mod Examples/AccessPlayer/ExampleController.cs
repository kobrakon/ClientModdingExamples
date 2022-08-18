using EFT;
using UnityEngine;
using Comfort.Common;

namespace AccessPlayerExample
{
    // Here I'll showcase how to access the player from both the internal player list
    // and how to access the player's GameObject
    public class AccessPlayerController : MonoBehaviour
    {
        private static GameWorld gameWorld;
        private static GameObject player;
        void Update()
        {
            gameWorld = Singleton<GameWorld>.Instance;

            if (!Ready())
            {
                // add logic here for if the world or player isn't loaded, if applicable
                return;
            }

            var gamePlayer = gameWorld.AllPlayers[0];
            
            // And from here, just add a dot to the end of gamePlayer var or whatever you named it and from there you can explore
            // all the things you can modify without patching
            
            player = GameObject.Find("PlayerSuperior(clone)"); // When finding gameobject the tag has to be exact, so it can be pretty hit or miss
            // use UnityExplorer to find GameObject's names
            
            // Now the player field will have the GameObject for the player, which will allow you to configure
            // add or destroy components attached to the player
        }

        bool Ready() // Bool method to ensure world is loaded
        {   // Checks that the gameworld and player list isn't null
            // If you dont want you script to run if the player is in the hideout
            // then add '|| gameWorld.AllPlayers[0] is HideoutPlayer' to the far right of the if condition
            if (gameWorld == null || gameWorld.AllPlayers == null || gameWorld.AllPlayers.Count <= 0) return false;
            else return true;
        }
    }
}
