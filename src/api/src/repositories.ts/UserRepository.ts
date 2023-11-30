import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/PrismaService";


@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findUserById(userId: number) {
    userId = Number(userId)
    return this.prisma.user.findFirst({where: {id: userId}});
  }
}