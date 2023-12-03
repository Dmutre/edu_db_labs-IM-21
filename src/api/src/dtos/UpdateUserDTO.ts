import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator"
import { validationOptionMsg } from "src/utils/exceptions/ValidationOptionMsg"


export class UpdateUserDTO {

  @ApiProperty({
    description: 'User login'
  })
  @MinLength(3, validationOptionMsg('Login is too short (min: 3)'))
  @MaxLength(20, validationOptionMsg('Login is too long (max: 20)'))
  @IsNotEmpty(validationOptionMsg('Login cannot be empty'))
  login?: string

  @ApiProperty({
    description: 'User password'
  })
  @MinLength(5, validationOptionMsg('Password is too short (min: 5)'))
  @MaxLength(25, validationOptionMsg('Password is too long (max: 25)'))
  @IsNotEmpty(validationOptionMsg('Password cannot be empty'))
  password?: string

  @ApiProperty({
    description: 'User email'
  })
  @IsEmail()
  mail?: string

  @ApiProperty({
    description: 'User name'
  })
  @MinLength(3, validationOptionMsg('Name is too short (min: 3)'))
  @MaxLength(20, validationOptionMsg('Name is too long (max: 20)'))
  @IsNotEmpty(validationOptionMsg('Name cannot be empty'))
  name?: string
}