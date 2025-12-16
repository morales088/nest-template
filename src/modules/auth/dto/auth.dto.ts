// create-user.dto.ts
import { IsArray, IsIn, IsNotEmpty, IsString, MinLength } from 'class-validator';

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
  @IsString()
  sub: string;

  @IsString()
  username: string;

  @IsArray()
  @IsIn(['user', 'admin', 'instructor'], { each: true })
  roles: string[];
}