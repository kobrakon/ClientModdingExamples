import { ProfileHelper } from "../helpers/ProfileHelper";
import { IPmcData } from "../models/eft/common/IPmcData";
import { ISuit } from "../models/eft/common/tables/ITrader";
import { IBuyClothingRequestData } from "../models/eft/customization/IBuyClothingRequestData";
import { IWearClothingRequestData } from "../models/eft/customization/IWearClothingRequestData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { ILogger } from "../models/spt/utils/ILogger";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
export declare class CustomizationController {
    protected logger: ILogger;
    protected itemEventRouter: ItemEventRouter;
    protected databaseServer: DatabaseServer;
    protected saveServer: SaveServer;
    protected profileHelper: ProfileHelper;
    constructor(logger: ILogger, itemEventRouter: ItemEventRouter, databaseServer: DatabaseServer, saveServer: SaveServer, profileHelper: ProfileHelper);
    getTraderSuits(traderID: string, sessionID: string): ISuit[];
    wearClothing(pmcData: IPmcData, body: IWearClothingRequestData, sessionID: string): IItemEventRouterResponse;
    buyClothing(pmcData: IPmcData, body: IBuyClothingRequestData, sessionID: string): IItemEventRouterResponse;
    protected getAllTraderSuits(sessionID: string): ISuit[];
}
