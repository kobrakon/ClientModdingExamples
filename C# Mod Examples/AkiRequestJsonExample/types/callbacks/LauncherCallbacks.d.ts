import { LauncherController } from "../controllers/LauncherController";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData";
import { IChangeRequestData } from "../models/eft/launcher/IChangeRequestData";
import { ILoginRequestData } from "../models/eft/launcher/ILoginRequestData";
import { IRegisterData } from "../models/eft/launcher/IRegisterData";
import { IRemoveProfileData } from "../models/eft/launcher/IRemoveProfileData";
import { SaveServer } from "../servers/SaveServer";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
import { Watermark } from "../utils/Watermark";
declare class LauncherCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected launcherController: LauncherController;
    protected saveServer: SaveServer;
    protected watermark: Watermark;
    constructor(httpResponse: HttpResponseUtil, launcherController: LauncherController, saveServer: SaveServer, watermark: Watermark);
    connect(): string;
    login(url: string, info: ILoginRequestData, sessionID: string): string;
    register(url: string, info: IRegisterData, sessionID: string): "FAILED" | "OK";
    get(url: string, info: ILoginRequestData, sessionID: string): string;
    changeUsername(url: string, info: IChangeRequestData, sessionID: string): "FAILED" | "OK";
    changePassword(url: string, info: IChangeRequestData, sessionID: string): "FAILED" | "OK";
    wipe(url: string, info: IRegisterData, sessionID: string): "FAILED" | "OK";
    getServerVersion(): string;
    ping(url: string, info: IEmptyRequestData, sessionID: string): string;
    removeProfile(url: string, info: IRemoveProfileData, sessionID: string): string;
    getCompatibleTarkovVersion(): string;
}
export { LauncherCallbacks };
