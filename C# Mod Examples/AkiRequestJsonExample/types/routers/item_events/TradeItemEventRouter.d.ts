import { IPmcData } from "../../models/eft/common/IPmcData";
import { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse";
import { TradeCallbacks } from "../../callbacks/TradeCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class TradeItemEventRouter extends ItemEventRouterDefinition {
    protected tradeCallbacks: TradeCallbacks;
    constructor(tradeCallbacks: TradeCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): IItemEventRouterResponse;
}
