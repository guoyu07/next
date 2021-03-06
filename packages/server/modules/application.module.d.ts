import { GraphQLFactory } from "@nestjs/graphql";
import { MiddlewaresConsumer } from "@nestjs/common";
export declare class ApplicationModule {
    private readonly graphQLFactory;
    constructor(graphQLFactory: GraphQLFactory);
    configure(consumer: MiddlewaresConsumer): void;
    createSchema(): any;
}
