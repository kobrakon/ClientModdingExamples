/// <reference types="node" />
/// <reference types="node" />
import "reflect-metadata";
import fs from "fs";
import { IAsyncQueue } from "../models/spt/utils/IAsyncQueue";
import { IUUidGenerator } from "../models/spt/utils/IUuidGenerator";
export declare class VFS {
    protected asyncQueue: IAsyncQueue;
    protected uuidGenerator: IUUidGenerator;
    accessFilePromisify: (path: fs.PathLike, mode?: number) => Promise<void>;
    copyFilePromisify: (src: fs.PathLike, dst: fs.PathLike, flags?: number) => Promise<void>;
    mkdirPromisify: (path: fs.PathLike, options: fs.MakeDirectoryOptions & {
        recursive: true;
    }) => Promise<string>;
    readFilePromisify: (path: fs.PathLike) => Promise<Buffer>;
    writeFilePromisify: (path: fs.PathLike, data: string, options?: any) => Promise<void>;
    readdirPromisify: (path: fs.PathLike, options?: BufferEncoding | {
        encoding: BufferEncoding;
        withFileTypes?: false;
    }) => Promise<string[]>;
    statPromisify: (path: fs.PathLike, options?: fs.StatOptions & {
        bigint?: false;
    }) => Promise<fs.Stats>;
    unlinkPromisify: (path: fs.PathLike) => Promise<void>;
    rmdirPromisify: (path: fs.PathLike) => Promise<void>;
    constructor(asyncQueue: IAsyncQueue, uuidGenerator: IUUidGenerator);
    exists(filepath: fs.PathLike): boolean;
    existsAsync(filepath: fs.PathLike): Promise<boolean>;
    copyFile(filepath: fs.PathLike, target: fs.PathLike): void;
    copyAsync(filepath: fs.PathLike, target: fs.PathLike): Promise<void>;
    createDir(filepath: string): void;
    createDirAsync(filepath: string): Promise<void>;
    copyDir(filepath: string, target: string, fileExtensions?: string | string[]): void;
    copyDirAsync(filepath: string, target: string, fileExtensions: string | string[]): Promise<void>;
    readFile(filepath: string): any;
    readFileAsync(filepath: string): Promise<any>;
    writeFile(filepath: any, data?: string, append?: boolean, atomic?: boolean): void;
    writeFileAsync(filepath: any, data?: string, append?: boolean, atomic?: boolean): Promise<void>;
    getFiles(filepath: string): string[];
    getFilesAsync(filepath: string): Promise<string[]>;
    getDirs(filepath: string): string[];
    getDirsAsync(filepath: string): Promise<string[]>;
    removeFile(filepath: string): void;
    removeFileAsync(filepath: string): Promise<void>;
    removeDir(filepath: string): void;
    removeDirAsync(filepath: string): Promise<void>;
    private lockFileSync;
    private checkFileSync;
    private unlockFileSync;
    getFileExtension(filepath: string): string;
    stripExtension(filepath: string): string;
    minifyAllJsonInDirRecursive(filepath: string): Promise<void>;
    minifyAllJsonInDirRecursiveAsync(filepath: string): Promise<void>;
    getFilesOfType(directory: string, fileType: string, files?: string[]): string[];
}
