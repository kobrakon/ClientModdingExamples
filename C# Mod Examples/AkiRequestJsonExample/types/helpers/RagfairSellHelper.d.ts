import { SellResult } from "../models/eft/ragfair/IRagfairOffer";
import { IRagfairConfig } from "../models/spt/config/IRagfairConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { RandomUtil } from "../utils/RandomUtil";
import { TimeUtil } from "../utils/TimeUtil";
export declare class RagfairSellHelper {
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected timeUtil: TimeUtil;
    protected configServer: ConfigServer;
    protected ragfairConfig: IRagfairConfig;
    constructor(logger: ILogger, randomUtil: RandomUtil, timeUtil: TimeUtil, configServer: ConfigServer);
    calculateSellChance(baseChance: number, offerPrice: number, requirementsPriceInRub: number): number;
    rollForSale(sellChance: number, count: number): SellResult[];
}
