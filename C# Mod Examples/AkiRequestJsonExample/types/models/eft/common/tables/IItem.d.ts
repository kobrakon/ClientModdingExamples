export interface Item {
    _id: string;
    _tpl: string;
    parentId?: string;
    slotId?: string;
    location?: Location | number;
    upd?: Upd;
}
export interface Upd {
    OriginalStackObjectsCount?: number;
    Togglable?: Togglable;
    Map?: Map;
    Tag?: Tag;
    sptPresetId?: string;
    FaceShield?: FaceShield;
    StackObjectsCount?: number;
    UnlimitedCount?: boolean;
    Repairable?: Repairable;
    FireMode?: FireMode;
    SpawnedInSession?: boolean;
    Light?: Light;
    Key?: Key;
    Resource?: Resource;
    Sight?: Sight;
    MedKit?: MedKit;
    FoodDrink?: FoodDrink;
    Dogtag?: Dogtag;
    BuyRestrictionMax?: number;
    BuyRestrictionCurrent?: number;
    Foldable?: Foldable;
    SideEffect?: SideEffect;
    RepairKit?: RepairKit;
}
export interface Togglable {
    On: boolean;
}
export interface Map {
    Markers: MapMarker[];
}
export interface MapMarker {
    X: number;
    Y: number;
}
export interface Tag {
    Color: number;
    Name: string;
}
export interface FaceShield {
    Hits: number;
}
export interface Repairable {
    Durability: number;
    MaxDurability: number;
}
export interface MedKit {
    HpResource: number;
}
export interface Sight {
    ScopesCurrentCalibPointIndexes: number[];
    ScopesSelectedModes: number[];
    SelectedScope: number;
}
export interface Foldable {
    Folded: boolean;
}
export interface FireMode {
    FireMode: string;
}
export interface FoodDrink {
    HpPercent: number;
}
export interface Key {
    NumberOfUsages: number;
}
export interface Resource {
    Value: number;
    UnitsConsumed: number;
}
export interface Light {
    IsActive: boolean;
    SelectedMode: number;
}
export interface Dogtag {
    AccountId: string;
    ProfileId: string;
    Nickname: string;
    Side: string;
    Level: number;
    Time: string;
    Status: string;
    KillerAccountId: string;
    KillerProfileId: string;
    KillerName: string;
    WeaponName: string;
}
export interface Location {
    x: number;
    y: number;
    r: string | number;
    isSearched?: boolean;
    rotation?: string;
}
export interface SideEffect {
    Value: number;
}
export interface RepairKit {
    Resource: number;
}
