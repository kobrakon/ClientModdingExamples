// not too confident with routers so sorry if I drop the ball here
import { DependencyContainer } from "tsyringe";
import type { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import type { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import type { DynamicRouterModService } from "@spt-aki/services/mod/dynamicRouter/DynamicRouterModService";
import type { StaticRouterModService } from "@spt-aki/services/mod/staticRouter/StaticRouterModService";

class Mod implements IPreAkiLoadMod
{
    public preAkiLoad(container: DependencyContainer): void 
    {
        const json = require("Example.json");
        const logger = container.resolve<ILogger>("WinstonLogger");
        const dynamicRouterModService = container.resolve<DynamicRouterModService>("DynamicRouterModService");
        const staticRouterModService = container.resolve<StaticRouterModService>("StaticRouterModService");
        // You can communicate between the client and server using routes
        // Using the HTTP router, you can send a request with the url to a router and the server will send a response through to the client
        // with the JSON data that the router sends

        // static router we'll use to pull a string from the json
        dynamicRouterModService.registerStaticRouter(
            "exstaticmodrouterstring",
            [
                {
                    url: "/ex-static-router/string",
                    action: (url, info, sessionID, output) => 
                    {
                        logger.info("Custom dynamic route hit")
                        return JSON.stringify({response: json.ExampleString}); // this is what the server will send to your client mod when you request JSON
                    }
                }
            ],
            "examplestaticstring"
        );

        // static router we'll use to pull a bool from json
        staticRouterModService.registerStaticRouter(
            "exstaticrouterbool",
            [
                {
                    url: "/ex-static-router/bool",
                    action: (url, info, sessionID, output) => 
                    {
                        logger.info("Custom static route hit")
                        return JSON.stringify({response: json.ExampleBool});
                    }
                }
            ],
            "examplestaticbool"
        );

        staticRouterModService.registerStaticRouter(
            "exstaticrouterint",
            [
                {
                    url: "/ex-static-router/int",
                    action: (url, info, sessionID, output) =>
                    {
                        return JSON.stringify({response: json.ExampleInt})
                    }
                }
            ],
            "examplestaticint"
        );

        staticRouterModService.registerStaticRouter(
            "exstaticrouterjson",
            [
                {
                    url: "/ex-static-router/json",
                    action: (url, info, sessionID, output) =>
                    {
                        return JSON.stringify({response: json})
                    }
                }
            ]
        )
 
        // Dynamic router by which we'll post to the JSON
        dynamicRouterModService.RegisterDynamicRouter(
            "exdynamicjsonpostrouter",
            [
                {
                    url: "/ex-dynamic-router/post/",
                    action: (url: string, info, sessionID, output) =>
                    {
                        const splitUrl = url.split("/");

                        json.ExampleString = splitUrl[splitUrl.length - 3];
                        json.ExampleBool = splitUrl[splitUrl.length - 2];
                        json.ExampleInt = splitUrl[splitUrl.length - 1];
                    }
                }
            ]
        );
    }
}
module.exports = {mod: new Mod()}
