import { ApiProperty } from "@nestjs/swagger";
import { Organization, Role } from "@prisma/client";


export class UserResponse {
  @ApiProperty({
    description: 'Id of user' 
  })
  id: Number

  @ApiProperty({
    description: 'Login of user'
  })
  login: string

  @ApiProperty({
    description: 'Password of user'
  })
  password: string

  @ApiProperty({
    description: 'Main of user'
  })
  mail: string

  @ApiProperty({
    description: 'User\'s name'
  })
  name: string

  @ApiProperty({
    description: 'User\'s role'
  })
  role: Role

  @ApiProperty({
    description: 'Array of organizations, that user belongs to'
  })
  organization: [Organization]
}