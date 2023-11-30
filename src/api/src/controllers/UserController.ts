import { Controller, Get, Param } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
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
}