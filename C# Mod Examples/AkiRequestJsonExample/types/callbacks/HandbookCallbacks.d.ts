import { HandbookController } from "../controllers/HandbookController";
import { OnLoad } from "../di/OnLoad";
export declare class HandbookCallbacks extends OnLoad {
    protected handbookController: HandbookController;
    constructor(handbookController: HandbookController);
    onLoad(): void;
    getRoute(): string;
}
