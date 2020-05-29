import { IsEmail, IsString, IsBoolean, MinLength } from 'class-validator';

export class UsersDto {
    
   @IsEmail() readonly email: string;
   @IsString() @MinLength(8) readonly password: string;
   readonly isActive: boolean;
}