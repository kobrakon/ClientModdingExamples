import { DependencyContainer } from "./tsyringe";
export interface IPostAkiLoadMod {
    postAkiLoad(container: DependencyContainer): void;
}
