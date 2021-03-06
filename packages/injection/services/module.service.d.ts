import "reflect-metadata";
import { InjectionService } from "./injection.service";
import { Module } from "../types/module.type";
import { SettingService } from "@notadd/setting/services/setting.service";
export declare class ModuleService {
    private readonly injectionService;
    private readonly settingService;
    private initialized;
    private modules;
    constructor(injectionService: InjectionService, settingService: SettingService);
    disableModule(identification: string): Promise<Module | undefined>;
    enableModule(identification: string): Promise<Module | undefined>;
    getModule(identification: string): Promise<Module | undefined>;
    getModules(filter: object): Promise<Array<Module>>;
    installModule(identification: string): Promise<Module | undefined>;
    uninstallModule(identification: string): Promise<Module | undefined>;
}
