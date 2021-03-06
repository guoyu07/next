import { IsString } from "class-validator";

export class UserCreateDto {
    @IsString()
    readonly username: string;

    @IsString()
    readonly email: string;

    @IsString()
    readonly password: string;
}
