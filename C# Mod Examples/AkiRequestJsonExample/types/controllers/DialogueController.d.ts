import { DialogueHelper } from "../helpers/DialogueHelper";
import { IGetAllAttachmentsResponse } from "../models/eft/dialog/IGetAllAttachmentsResponse";
import { IGetFriendListDataResponse } from "../models/eft/dialog/IGetFriendListDataResponse";
import { IGetMailDialogViewResponseData } from "../models/eft/dialog/IGetMailDialogViewResponseData";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { DialogueInfo, Message } from "../models/eft/profile/IAkiProfile";
import { SaveServer } from "../servers/SaveServer";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
export declare class DialogueController {
    protected httpResponse: HttpResponseUtil;
    protected saveServer: SaveServer;
    protected dialogueHelper: DialogueHelper;
    constructor(httpResponse: HttpResponseUtil, saveServer: SaveServer, dialogueHelper: DialogueHelper);
    getFriendList(sessionID: string): IGetFriendListDataResponse;
    generateDialogueList(sessionID: string): IGetBodyResponseData<DialogueInfo[]>;
    getDialogueInfo(dialogueID: string, sessionID: string): DialogueInfo;
    generateDialogueView(dialogueID: string, sessionID: string): IGetMailDialogViewResponseData;
    removeDialogue(dialogueID: string, sessionID: string): void;
    setDialoguePin(dialogueID: string, shouldPin: boolean, sessionID: string): void;
    setRead(dialogueIDs: string[], sessionID: string): void;
    getAllAttachments(dialogueID: string, sessionID: string): IGetAllAttachmentsResponse;
    protected messagesHaveUncollectedRewards(messages: Message[]): boolean;
    protected removeExpiredItems(sessionID: string): void;
    update(): void;
}
