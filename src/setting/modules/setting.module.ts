import { CommandBus, CQRSModule, EventBus } from "@nestjs/cqrs";
import { CommandHandlers } from "../commands/handlers";
import { MiddlewaresConsumer, Module, OnModuleInit } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { Setting } from "../entities";
import { SettingResolvers } from "../resolvers";
import { SettingService } from "../services";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventHandlers } from "../events/handlers";

@Module({
    components: [
        ...CommandHandlers,
        ...EventHandlers,
        SettingResolvers,
        SettingService,
    ],
    exports: [
        SettingService,
    ],
    imports: [
        TypeOrmModule.forFeature([Setting]),
        CQRSModule,
    ]
})
export class SettingModule implements OnModuleInit {
    constructor(
        private readonly moduleRef: ModuleRef,
        private readonly command: CommandBus,
        private readonly event: EventBus,
    ) {
    }

    configure(consumer: MiddlewaresConsumer) {
    }

    onModuleInit() {
        this.command.setModuleRef(this.moduleRef);
        this.command.register(CommandHandlers);
        this.event.setModuleRef(this.moduleRef);
        this.event.register(EventHandlers);
    }
}
