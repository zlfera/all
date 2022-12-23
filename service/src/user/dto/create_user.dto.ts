import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  no: string;
  @IsEmail()
  name: string;
}
