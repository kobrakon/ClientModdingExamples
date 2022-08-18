import { MinMax } from "../../../common/MinMax";
import { Skills } from "./IBotBase";
export interface IBotType {
    appearance: Appearance;
    chances: Chances;
    difficulty: Difficulties;
    experience: Experience;
    firstName: string[];
    generation: Generation;
    health: Health;
    inventory: Inventory;
    lastName: string[];
    skills: Skills;
}
export interface Appearance {
    body: string[];
    feet: string[];
    hands: string[];
    head: string[];
    voice: string[];
}
export interface Chances {
    equipment: EquipmentChances;
    mods: ModsChances;
}
export interface EquipmentChances {
    ArmBand: number;
    ArmorVest: number;
    Backpack: number;
    Earpiece: number;
    Eyewear: number;
    FaceCover: number;
    FirstPrimaryWeapon: number;
    Headwear: number;
    Holster: number;
    Pockets: number;
    Scabbard: number;
    SecondPrimaryWeapon: number;
    SecuredContainer: number;
    TacticalVest: number;
}
export interface ModsChances {
    mod_charge: number;
    mod_equipment: number;
    mod_equipment_000: number;
    mod_equipment_001: number;
    mod_equipment_002: number;
    mod_flashlight: number;
    mod_foregrip: number;
    mod_launcher: number;
    mod_magazine: number;
    mod_mount: number;
    mod_mount_000: number;
    mod_mount_001: number;
    mod_muzzle: number;
    mod_nvg: number;
    mod_pistol_grip: number;
    mod_reciever: number;
    mod_scope: number;
    mod_sight_front: number;
    mod_sight_rear: number;
    mod_stock: number;
    mod_stock_000: number;
    mod_stock_akms: number;
    mod_tactical: number;
    mod_tactical_000: number;
    mod_tactical_001: number;
    mod_tactical_002: number;
    mod_tactical_003: number;
}
export interface Difficulties {
    easy: Difficulty;
    normal: Difficulty;
    hard: Difficulty;
    impossible: Difficulty;
}
export interface Difficulty {
    Aiming: Record<string, string | number | boolean>;
    Boss: Record<string, string | number | boolean>;
    Change: Record<string, string | number | boolean>;
    Core: Record<string, string | number | boolean>;
    Cover: Record<string, string | number | boolean>;
    Grenade: Record<string, string | number | boolean>;
    Hearing: Record<string, string | number | boolean>;
    Lay: Record<string, string | number | boolean>;
    Look: Record<string, string | number | boolean>;
    Mind: Record<string, string | number | boolean | string[]>;
    Move: Record<string, string | number | boolean>;
    Patrol: Record<string, string | number | boolean>;
    Scattering: Record<string, string | number | boolean>;
    Shoot: Record<string, string | number | boolean>;
}
export interface Experience {
    aggressorBonus: number;
    level: MinMax;
    reward: MinMax;
    standingForKill: number;
}
export interface Generation {
    items: ItemMinMax;
}
export interface ItemMinMax {
    grenades: MinMax;
    healing: MinMax;
    drugs: MinMax;
    stims: MinMax;
    looseLoot: MinMax;
    magazines: MinMax;
    specialItems: MinMax;
}
export interface Health {
    BodyParts: BodyPart[];
    Energy: MinMax;
    Hydration: MinMax;
    Temperature: MinMax;
}
export interface BodyPart {
    Chest: MinMax;
    Head: MinMax;
    LeftArm: MinMax;
    LeftLeg: MinMax;
    RightArm: MinMax;
    RightLeg: MinMax;
    Stomach: MinMax;
}
export interface Inventory {
    equipment: Equipment;
    Ammo: Record<string, Record<string, number>>;
    items: Items;
    mods: Mods;
}
export interface Equipment {
    ArmBand: Record<string, number>;
    ArmorVest: Record<string, number>;
    Backpack: Record<string, number>;
    Earpiece: Record<string, number>;
    Eyewear: Record<string, number>;
    FaceCover: Record<string, number>;
    FirstPrimaryWeapon: Record<string, number>;
    Headwear: Record<string, number>;
    Holster: Record<string, number>;
    Pockets: Record<string, number>;
    Scabbard: Record<string, number>;
    SecondPrimaryWeapon: Record<string, number>;
    SecuredContainer: Record<string, number>;
    TacticalVest: Record<string, number>;
}
export interface Items {
    Backpack: string[];
    Pockets: string[];
    SecuredContainer: string[];
    SpecialLoot: string[];
    TacticalVest: string[];
}
export declare type Mods = Record<string, Record<string, string[]>>;
