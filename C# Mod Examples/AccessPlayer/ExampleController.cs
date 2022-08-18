using EFT;
using UnityEngine;
using Comfort.Common;

namespace AccessPlayerExample
{
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

            // add logic here
        }

        bool Ready() // bool method to ensure world is loaded
        {   // checks that the gameworld and player list isn't null
            // if you dont want you script to run if the player is in the hideout
            // then add '|| gameWorld.AllPlayers[0] is HideoutPlayer'to the far right of the if condition
            if (gameWorld == null || gameWorld.AllPlayers == null || gameWorld.AllPlayers.Count <= 0) return false;
            else return true;
        }
    }
}