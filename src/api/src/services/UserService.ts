import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/PrismaService";


@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService
  ) {}

    async getAll() {
      return this.prismaService.user.findMany();
    }

}