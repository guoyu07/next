import { AddonResolvers } from "../resolvers/addon.resolvers";
import { AddonService } from "../services/addon.service";
import { loadAddonsFromFiles } from "../utilities/load-addons-from-files";
import { Module } from "@nestjs/common";
import { SettingModule } from "@notadd/setting/modules/setting.module";
import { InjectionService } from "../services/injection.service";

@Module({
    components: [
        AddonResolvers,
        AddonService,
        InjectionService,
    ],
    imports: [
        ...loadAddonsFromFiles(),
        SettingModule,
    ],
})
export class AddonModule {
}
