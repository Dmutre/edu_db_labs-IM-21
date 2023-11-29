import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserService } from "src/services/UserService";


@ApiTags('Users')
@Controller({
  path: '/users'
})
export class UserController {
  constructor(
    private userService: UserService
  ) {}

  @Get()
  async getAll () {
    return await this.userService.getAll();
  } 
}