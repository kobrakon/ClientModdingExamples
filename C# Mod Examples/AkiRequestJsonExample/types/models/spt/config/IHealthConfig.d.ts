import { IBaseConfig } from "./IBaseConfig";
export interface IHealthConfig extends IBaseConfig {
    kind: "aki-health";
    healthMultipliers: HealthMultipliers;
    save: Save;
}
export interface HealthMultipliers {
    death: number;
    blacked: number;
}
export interface Save {
    health: boolean;
    effects: boolean;
}
