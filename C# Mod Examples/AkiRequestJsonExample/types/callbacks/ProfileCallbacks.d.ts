import { ProfileController } from "../controllers/ProfileController";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { INullResponseData } from "../models/eft/httpResponse/INullResponseData";
import { IGetMiniProfileRequestData } from "../models/eft/launcher/IGetMiniProfileRequestData";
import { GetProfileStatusResponseData } from "../models/eft/profile/GetProfileStatusResponseData";
import { IProfileChangeNicknameRequestData } from "../models/eft/profile/IProfileChangeNicknameRequestData";
import { IProfileChangeVoiceRequestData } from "../models/eft/profile/IProfileChangeVoiceRequestData";
import { IProfileCreateRequestData } from "../models/eft/profile/IProfileCreateRequestData";
import { ISearchFriendRequestData } from "../models/eft/profile/ISearchFriendRequestData";
import { ISearchFriendResponse } from "../models/eft/profile/ISearchFriendResponse";
import { IValidateNicknameRequestData } from "../models/eft/profile/IValidateNicknameRequestData";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
import { TimeUtil } from "../utils/TimeUtil";
export declare class ProfileCallbacks {
    protected httpResponse: HttpResponseUtil;
    protected timeUtil: TimeUtil;
    protected profileController: ProfileController;
    constructor(httpResponse: HttpResponseUtil, timeUtil: TimeUtil, profileController: ProfileController);
    createProfile(url: string, info: IProfileCreateRequestData, sessionID: string): IGetBodyResponseData<any>;
    getProfileData(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    regenerateScav(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    changeVoice(url: string, info: IProfileChangeVoiceRequestData, sessionID: string): INullResponseData;
    changeNickname(url: string, info: IProfileChangeNicknameRequestData, sessionID: string): IGetBodyResponseData<any>;
    validateNickname(url: string, info: IValidateNicknameRequestData, sessionID: string): IGetBodyResponseData<any>;
    getReservedNickname(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<string>;
    /**
     * Called when creating a character, when you choose a character face/voice
     * @param url
     * @param info response (empty)
     * @param sessionID
     * @returns
     */
    getProfileStatus(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<GetProfileStatusResponseData>;
    searchFriend(url: string, info: ISearchFriendRequestData, sessionID: string): IGetBodyResponseData<ISearchFriendResponse[]>;
    getMiniProfile(url: string, info: IGetMiniProfileRequestData, sessionID: string): string;
    getAllMiniProfiles(url: string, info: any, sessionID: string): string;
}
