import { Module } from "@nestjs/common";
import { UserController } from "src/controllers/UserController";
import { UserIdPipe } from "src/pipes/UserIdPipe";
import { OrganizationRepository } from "src/repositories.ts/OrganizationRepository";
import { RoleRepository } from "src/repositories.ts/RoleRepository";
import { UserRepository } from "src/repositories.ts/UserRepository";
import { UserService } from "src/services/UserService";


@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, RoleRepository, OrganizationRepository],
})
export class UserModule {}