import { IPmcData } from "../../models/eft/common/IPmcData";
import { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse";
import { RagfairCallbacks } from "../../callbacks/RagfairCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class RagfairItemEventRouter extends ItemEventRouterDefinition {
    protected ragfairCallbacks: RagfairCallbacks;
    constructor(ragfairCallbacks: RagfairCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): IItemEventRouterResponse;
}
