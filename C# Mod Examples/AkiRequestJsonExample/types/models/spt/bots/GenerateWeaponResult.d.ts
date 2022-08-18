import { Mods } from "../../eft/common/tables/IBotType";
import { Item } from "../../eft/common/tables/IItem";
import { ITemplateItem } from "../../eft/common/tables/ITemplateItem";
export declare class GenerateWeaponResult {
    weapon: Item[];
    chosenAmmo: string;
    weaponMods: Mods;
    weaponTemplate: ITemplateItem;
}
