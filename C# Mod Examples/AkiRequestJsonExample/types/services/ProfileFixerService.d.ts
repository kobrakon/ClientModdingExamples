import { IPmcData } from "../models/eft/common/IPmcData";
import { HideoutSlot } from "../models/eft/common/tables/IBotBase";
import { IPmcDataRepeatableQuest, IRepeatableQuest } from "../models/eft/common/tables/IRepeatableQuests";
import { IAkiProfile } from "../models/eft/profile/IAkiProfile";
import { HideoutAreas } from "../models/enums/HideoutAreas";
import { ILogger } from "../models/spt/utils/ILogger";
import { DatabaseServer } from "../servers/DatabaseServer";
import { Watermark } from "../utils/Watermark";
export declare class ProfileFixerService {
    protected logger: ILogger;
    protected watermark: Watermark;
    protected databaseServer: DatabaseServer;
    constructor(logger: ILogger, watermark: Watermark, databaseServer: DatabaseServer);
    /**
     * Find issues in the pmc profile data that may cause issues and fix them
     * @param pmcProfile profile to check and fix
     */
    checkForAndFixPmcProfileIssues(pmcProfile: IPmcData): void;
    /**
     * Add tag to profile to indicate when it was made
     * @param fullProfile
     */
    addMissingAkiVersionTagToProfile(fullProfile: IAkiProfile): void;
    /**
     * TODO - make this non-public - currently used by RepeatableQuestController
     * Remove unused condition counters
     * @param pmcProfile profile to remove old counters from
     */
    removeDanglingConditionCounters(pmcProfile: IPmcData): void;
    protected removeDanglingBackendCounters(pmcProfile: IPmcData): void;
    protected getActiveRepeatableQuests(repeatableQuests: IPmcDataRepeatableQuest[]): IRepeatableQuest[];
    protected fixNullTraderSalesSums(pmcProfile: IPmcData): void;
    protected addMissingBonusesProperty(pmcProfile: IPmcData): void;
    /**
     * Adjust profile quest status and statusTimers object values
     * quest.status is numeric e.g. 2
     * quest.statusTimers keys are numeric as strings e.g. "2"
     * @param pmcProfile profile to update
     */
    protected updateProfileQuestDataValues(pmcProfile: IPmcData): void;
    protected addMissingRepeatableQuestsProperty(pmcProfile: IPmcData): void;
    protected addMissingWorkbenchWeaponSkills(pmcProfile: IPmcData): void;
    /**
     * A new property was added to slot items "locationIndex", if this is missing, the hideout slot item must be removed
     * @param pmcProfile Profile to find and remove slots from
     */
    protected removeResourcesFromSlotsInHideoutWithoutLocationIndexValue(pmcProfile: IPmcData): void;
    /**
     * add in objects equal to the number of slots
     * @param areaType area to check
     * @param pmcProfile profile to update
     */
    protected addEmptyObjectsToHideoutAreaSlots(areaType: HideoutAreas, emptyItemCount: number, pmcProfile: IPmcData): void;
    protected addObjectsToArray(count: number, slots: HideoutSlot[]): HideoutSlot[];
    /**
     * In 18876 bsg changed the pockets tplid to be one that has 3 additional special slots
     * @param pmcProfile
     */
    protected updateProfilePocketsToNewId(pmcProfile: IPmcData): void;
    addMissingArmorRepairSkill(pmcProfile: IPmcData): void;
}
