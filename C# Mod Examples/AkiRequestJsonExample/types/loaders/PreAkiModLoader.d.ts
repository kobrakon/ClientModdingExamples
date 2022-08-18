import { DependencyContainer } from "tsyringe";
import { ICoreConfig } from "../models/spt/config/ICoreConfig";
import { ModLoader } from "../models/spt/mod/IMod";
import { IModLoader } from "../models/spt/mod/IModLoader";
import { IPackageJsonData } from "../models/spt/mod/IPackageJsonData";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { ModCompilerService } from "../services/ModCompilerService";
import { JsonUtil } from "../utils/JsonUtil";
import { VFS } from "../utils/VFS";
import { BundleLoader } from "./BundleLoader";
export declare class PreAkiModLoader implements IModLoader {
    protected logger: ILogger;
    protected vfs: VFS;
    protected jsonUtil: JsonUtil;
    protected modCompilerService: ModCompilerService;
    protected bundleLoader: BundleLoader;
    protected configServer: ConfigServer;
    protected static container: DependencyContainer;
    protected readonly basepath = "user/mods/";
    protected imported: Record<string, ModLoader.IMod>;
    protected akiConfig: ICoreConfig;
    constructor(logger: ILogger, vfs: VFS, jsonUtil: JsonUtil, modCompilerService: ModCompilerService, bundleLoader: BundleLoader, configServer: ConfigServer);
    load(container: DependencyContainer): Promise<void>;
    getBundles(local: boolean): string;
    getBundle(key: string, local: boolean): void;
    /**
     * Returns a list of mods with preserved load order
     * @returns Array of mod names in load order
     */
    getImportedModsNames(): string[];
    getModPath(mod: string): string;
    protected importClass(name: string, filepath: string, container: DependencyContainer): void;
    protected importMods(): Promise<void>;
    /**
     * Check for duplciate mods loaded, show error if duplicate mod found
     * @param modPackageData dictionary of mod package.json data
     */
    protected checkForDuplicateMods(modPackageData: Record<string, IPackageJsonData>): void;
    /**
     * Check for and return duplicate strings inside an array
     * @param stringArray Array to check for duplicates
     * @returns string array of duplicates, empty if none found
     */
    protected getDuplicates(stringArray: string[]): string[];
    /**
     *
     * @param mods Get an array of broken/invalid mods by name
     * @returns Mod names array
     */
    protected getBrokenMods(mods: string[]): string[];
    /**
     * Get packageJson data for mods
     * @param mods mods to get packageJson for
     * @returns dictionary <modName - package.json>
     */
    protected getModsPackageData(mods: string[]): Record<string, IPackageJsonData>;
    /**
     * Does mod have "delayedLoad(" string in its entry class
     * @param modFolderName folder name
     * @param modToValidate package.json details
     * @returns boolean
     */
    protected isModSpt3XXCompatible(modFolderName: string, modToValidate: IPackageJsonData): boolean;
    protected isModCombatibleWithAki(mod: IPackageJsonData): boolean;
    protected executeMods(container: DependencyContainer): void;
    sortModsLoadOrder(): string[];
    protected addMod(mod: string): Promise<void>;
    protected areModDependenciesFulfilled(pkg: IPackageJsonData, loadedMods: Record<string, IPackageJsonData>): boolean;
    protected isModCompatible(mod: IPackageJsonData, loadedMods: Record<string, IPackageJsonData>): boolean;
    protected validMod(mod: string): boolean;
    protected getLoadOrderRecursive(mod: string, result: Record<string, string>, visited: Record<string, string>): void;
    protected getLoadOrder(mods: Record<string, ModLoader.IMod>): Record<string, string>;
    getContainer(): DependencyContainer;
}
