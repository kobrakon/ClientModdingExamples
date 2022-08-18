import { IEmptyRequestData } from "../../eft/common/IEmptyRequestData";
import { IGlobals } from "../../eft/common/IGlobals";
import { IQuest } from "../../eft/common/tables/IQuest";
import { IHideoutArea } from "../../eft/hideout/IHideoutArea";
import { IHideoutProduction } from "../../eft/hideout/IHideoutProduction";
import { IHideoutScavCase } from "../../eft/hideout/IHideoutScavCase";
import { IHideoutSettingsBase } from "../../eft/hideout/IHideoutSettingsBase";
import { IGetBodyResponseData } from "../../eft/httpResponse/IGetBodyResponseData";
import { ILanguageBase } from "../server/ILocaleBase";
import { ISettingsBase } from "../server/ISettingsBase";
export interface IDataCallbacks {
    getSettings(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ISettingsBase>;
    getGlobals(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IGlobals>;
    getTemplateItems(url: string, info: IEmptyRequestData, sessionID: string): string;
    getTemplateHandbook(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    getTemplateSuits(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    getTemplateCharacter(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<string[]>;
    getTemplateQuests(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IQuest[]>;
    getHideoutSettings(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IHideoutSettingsBase>;
    getHideoutAreas(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IHideoutArea[]>;
    gethideoutProduction(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IHideoutProduction[]>;
    getHideoutScavcase(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IHideoutScavCase[]>;
    getLocalesLanguages(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ILanguageBase[]>;
    getLocalesMenu(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    getLocalesGlobal(url: string, info: IEmptyRequestData, sessionID: string): string;
}
