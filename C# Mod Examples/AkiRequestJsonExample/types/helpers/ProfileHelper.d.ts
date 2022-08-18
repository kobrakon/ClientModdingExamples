import { IPmcData } from "../models/eft/common/IPmcData";
import { Stats } from "../models/eft/common/tables/IBotBase";
import { IAkiProfile } from "../models/eft/profile/IAkiProfile";
import { IValidateNicknameRequestData } from "../models/eft/profile/IValidateNicknameRequestData";
import { ILogger } from "../models/spt/utils/ILogger";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { FenceService } from "../services/FenceService";
import { ProfileSnapshotService } from "../services/ProfileSnapshotService";
import { JsonUtil } from "../utils/JsonUtil";
import { TimeUtil } from "../utils/TimeUtil";
import { Watermark } from "../utils/Watermark";
import { ItemHelper } from "./ItemHelper";
export declare class ProfileHelper {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected watermark: Watermark;
    protected timeUtil: TimeUtil;
    protected saveServer: SaveServer;
    protected databaseServer: DatabaseServer;
    protected itemHelper: ItemHelper;
    protected profileSnapshotService: ProfileSnapshotService;
    protected fenceService: FenceService;
    constructor(logger: ILogger, jsonUtil: JsonUtil, watermark: Watermark, timeUtil: TimeUtil, saveServer: SaveServer, databaseServer: DatabaseServer, itemHelper: ItemHelper, profileSnapshotService: ProfileSnapshotService, fenceService: FenceService);
    resetProfileQuestCondition(sessionID: string, conditionId: string): void;
    getCompleteProfile(sessionID: string): IPmcData[];
    isNicknameTaken(info: IValidateNicknameRequestData, sessionID: string): boolean;
    /**
     * Add experience to a PMC inside the players profile
     * @param sessionID Session id
     * @param experienceToAdd Experiecne to add to PMC character
     */
    addExperienceToPmc(sessionID: string, experienceToAdd: number): void;
    getProfileByPmcId(pmcId: string): IPmcData;
    getExperience(level: number): number;
    getMaxLevel(): number;
    getDefaultAkiDataObject(): any;
    getFullProfile(sessionID: string): IAkiProfile;
    getPmcProfile(sessionID: string): IPmcData;
    getScavProfile(sessionID: string): IPmcData;
    getDefaultCounters(): Stats;
    protected isWiped(sessionID: string): boolean;
    protected getServerVersion(): string;
    /**
     * Iterate over player profile inventory items and find the secure container and remove it
     * @param profile Profile to remove secure container from
     * @returns profile without secure container
     */
    removeSecureContainer(profile: IPmcData): IPmcData;
}
