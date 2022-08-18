import { GameController } from "../controllers/GameController";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData";
import { IGameConfigResponse } from "../models/eft/game/IGameConfigResponse";
import { IGameEmptyCrcRequestData } from "../models/eft/game/IGameEmptyCrcRequestData";
import { IReportNicknameRequestData } from "../models/eft/game/IReportNicknameRequestData";
import { IVersionValidateRequestData } from "../models/eft/game/IVersionValidateRequestData";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { INullResponseData } from "../models/eft/httpResponse/INullResponseData";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
import { Watermark } from "../utils/Watermark";
declare class GameCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected watermark: Watermark;
    protected gameController: GameController;
    constructor(httpResponse: HttpResponseUtil, watermark: Watermark, gameController: GameController);
    versionValidate(url: string, info: IVersionValidateRequestData, sessionID: string): INullResponseData;
    gameStart(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    gameLogout(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    getGameConfig(url: string, info: IGameEmptyCrcRequestData, sessionID: string): IGetBodyResponseData<IGameConfigResponse>;
    getServer(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    validateGameVersion(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    gameKeepalive(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    getVersion(url: string, info: IEmptyRequestData, sessionID: string): string;
    reportNickname(url: string, info: IReportNicknameRequestData, sessionID: string): INullResponseData;
}
export { GameCallbacks };
