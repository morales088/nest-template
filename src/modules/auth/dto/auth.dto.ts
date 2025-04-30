// create-user.dto.ts
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}

export class ValidateUserDTO {
    sub: string;
    username: string;
    roles: string[]
}