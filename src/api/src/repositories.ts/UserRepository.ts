import { Injectable } from "@nestjs/common";
import { UpdateUserDTO } from "src/dtos/UpdateUserDTO";
import { UserDTO } from "src/dtos/UserDTO";
import { PrismaService } from "src/prisma/PrismaService";


@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findById(userId: number) {
    userId = Number(userId)
    return this.prisma.user.findFirst({where: {id: userId}});
  }

  async create(data: UserDTO) {
    return this.prisma.user.create({
      data: {
        login: data.login,
        password: data.password,
        mail: data.mail,
        name: data.name,
        roleId: Number(process.env.DEFAULT_ROLE_ID),
        Organization_list_id: Number(process.env.DEFAULT_ORGANIZATION_LIST_ID)
    }})
  }

  async update(userId: number, data: UpdateUserDTO) {
    return this.prisma.user.update({
      where: {
        id: userId
      },
      data: data
    })
  }

  async delete(userId: number) {
    return this.prisma.user.delete({where: {id: userId}});
  }
}