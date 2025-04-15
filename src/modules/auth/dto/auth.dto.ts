// create-user.dto.ts
import { IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  @MinLength(6)
  password: string;
}

export class ValidateUserDTO {
    sub: string;
    username: string;
}