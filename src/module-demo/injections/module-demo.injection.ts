import { Module } from "@notadd/injection/decorators/module.decorator";

@Module({
    authors: [
        {
            email: "admin@notadd.com",
            username: "notadd",
        },
    ],
    identification: "module-demo",
    version: "2.0.0",
})
export class ModuleDemoInjection {
}
