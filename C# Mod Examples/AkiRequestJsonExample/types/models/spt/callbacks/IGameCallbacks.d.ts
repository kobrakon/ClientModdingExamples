import { IEmptyRequestData } from "../../eft/common/IEmptyRequestData";
import { IGameEmptyCrcRequestData } from "../../eft/game/IGameEmptyCrcRequestData";
import { IVersionValidateRequestData } from "../../eft/game/IVersionValidateRequestData";
import { IGetBodyResponseData } from "../../eft/httpResponse/IGetBodyResponseData";
import { INullResponseData } from "../../eft/httpResponse/INullResponseData";
import { IGameConfigResponse } from "../../eft/game/IGameConfigResponse";
export interface IGameCallbacks {
    versionValidate(url: string, info: IVersionValidateRequestData, sessionID: string): INullResponseData;
    gameStart(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    gameLogout(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    getGameConfig(url: string, info: IGameEmptyCrcRequestData, sessionID: string): IGetBodyResponseData<IGameConfigResponse>;
    getServer(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    validateGameVersion(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    gameKeepalive(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    getVersion(url: string, info: IEmptyRequestData, sessionID: string): string;
}
