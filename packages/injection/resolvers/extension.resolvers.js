"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const extension_service_1 = require("../services/extension.service");
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const user_guard_1 = require("@notadd/authentication/guards/user.guard");
let ExtensionResolvers = class ExtensionResolvers {
    constructor(extensionService) {
        this.extensionService = extensionService;
    }
    disableExtension(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.extensionService.disableExtension(identification);
        });
    }
    enableExtension(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.extensionService.enableExtension(identification);
        });
    }
    getExtension(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.extensionService.getExtension(identification);
        });
    }
    getExtensions(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.extensionService.getExtensions(filter);
        });
    }
    installExtension(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.extensionService.installExtension(identification);
        });
    }
    uninstallExtension(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.extensionService.uninstallExtension(identification);
        });
    }
};
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExtensionResolvers.prototype, "disableExtension", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExtensionResolvers.prototype, "enableExtension", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExtensionResolvers.prototype, "getExtension", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExtensionResolvers.prototype, "getExtensions", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExtensionResolvers.prototype, "installExtension", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExtensionResolvers.prototype, "uninstallExtension", null);
ExtensionResolvers = __decorate([
    graphql_1.Resolver("Extension"),
    __metadata("design:paramtypes", [extension_service_1.ExtensionService])
], ExtensionResolvers);
exports.ExtensionResolvers = ExtensionResolvers;
