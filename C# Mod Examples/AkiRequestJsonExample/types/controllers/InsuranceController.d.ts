import { DialogueHelper } from "../helpers/DialogueHelper";
import { ItemHelper } from "../helpers/ItemHelper";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IGetInsuranceCostRequestData } from "../models/eft/insurance/IGetInsuranceCostRequestData";
import { IGetInsuranceCostResponseData } from "../models/eft/insurance/IGetInsuranceCostResponseData";
import { IInsureRequestData } from "../models/eft/insurance/IInsureRequestData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { IInsuranceConfig } from "../models/spt/config/IInsuranceConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { InsuranceService } from "../services/InsuranceService";
import { PaymentService } from "../services/PaymentService";
import { RandomUtil } from "../utils/RandomUtil";
import { TimeUtil } from "../utils/TimeUtil";
export declare class InsuranceController {
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected itemEventRouter: ItemEventRouter;
    protected timeUtil: TimeUtil;
    protected saveServer: SaveServer;
    protected databaseServer: DatabaseServer;
    protected itemHelper: ItemHelper;
    protected profileHelper: ProfileHelper;
    protected dialogueHelper: DialogueHelper;
    protected paymentService: PaymentService;
    protected insuranceService: InsuranceService;
    protected configServer: ConfigServer;
    protected insuranceConfig: IInsuranceConfig;
    constructor(logger: ILogger, randomUtil: RandomUtil, itemEventRouter: ItemEventRouter, timeUtil: TimeUtil, saveServer: SaveServer, databaseServer: DatabaseServer, itemHelper: ItemHelper, profileHelper: ProfileHelper, dialogueHelper: DialogueHelper, paymentService: PaymentService, // TODO: delay required
    insuranceService: InsuranceService, configServer: ConfigServer);
    processReturn(): void;
    insure(pmcData: IPmcData, body: IInsureRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Calculate insurance cost
     * @param info request object
     * @param sessionID session id
     * @returns response object to send to client
     */
    cost(info: IGetInsuranceCostRequestData, sessionID: string): IGetInsuranceCostResponseData;
}
