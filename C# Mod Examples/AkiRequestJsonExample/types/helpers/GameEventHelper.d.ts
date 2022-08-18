import { DatabaseServer } from "../servers/DatabaseServer";
export declare class GameEventHelper {
    protected databaseServer: DatabaseServer;
    constructor(databaseServer: DatabaseServer);
    get events(): Record<string, string>;
    get christmasEventItems(): string[];
    itemIsChristmasRelated(itemId: string): boolean;
    christmasEventEnabled(): boolean;
}
