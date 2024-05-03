import { IsNotEmpty, IsString } from "class-validator";

export interface AuthDTO {
    // @IsEmail()
    // @IsNotEmpty()
    email: string;

    // @IsString() 
    // @IsNotEmpty()
    password?: string;
}