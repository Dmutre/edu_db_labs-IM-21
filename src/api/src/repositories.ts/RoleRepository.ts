import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/PrismaService";


@Injectable()
export class RoleRepository {
  constructor(
    private prisma: PrismaService
  ) {}

  async findRoleById(roleId: number) {
    return this.prisma.role.findFirst({where: {id: roleId}});
  }
}