import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { UpdateUserDTO } from "src/dtos/UpdateUserDTO";
import { UserDTO } from "src/dtos/UserDTO";
import { UserIdPipe } from "src/pipes/UserIdPipe";
import { UserResponse } from "src/responses/UserResponse";
import { UserService } from "src/services/UserService";


@ApiTags('Users')
@Controller({
  path: '/users'
})
export class UserController {
  constructor(
    private userService: UserService
  ) {}

  @ApiOkResponse({
    type: [UserResponse]
  })
  @ApiOperation({
    description: 'Endpoint to get all users',
  })
  @Get()
  async getAll () {
    return await this.userService.getAll();
  }

  @ApiOkResponse({
    type: UserResponse
  })
  @ApiOperation({
    description: 'Endpoint to get user by id'
  })
  @Get('/:userId')
  async getUserById(
    @Param('userId', UserIdPipe) userId: number
  ) {
      return await this.userService.getUserById(userId);
  }

  @ApiOkResponse({
    type: UserResponse
  })
  @ApiOperation({
    description: 'Endpoint to create user'
  })
  @Post()
  async createUser(@Body() data: UserDTO) {
      return await this.userService.createUser(data);
  }

  @ApiOkResponse({
    type: UserResponse
  })
  @ApiOperation({
    description: 'Endpoint to update user'
  })
  @Patch('/:userId')
  async updateUser(
    @Body() data: UpdateUserDTO,
    @Param('userId', UserIdPipe) userId: number
    ) {
      return await this.userService.updateUser(userId, data);
  }

  @ApiOkResponse({
    type: UserResponse
  })
  @ApiOperation({
    description: 'Endpoint to delete user by id'
  })
  @Delete('/:userId')
  async deleteUser(
    @Param('userId', UserIdPipe) userId: number
    ) {
      return await this.userService.deleteUser(userId);
  }
}