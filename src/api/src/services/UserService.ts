import { Injectable } from "@nestjs/common";
import { UpdateUserDTO } from "src/dtos/UpdateUserDTO";
import { UserDTO } from "src/dtos/UserDTO";
import { PrismaService } from "src/prisma/PrismaService";
import { OrganizationRepository } from "src/repositories.ts/OrganizationRepository";
import { RoleRepository } from "src/repositories.ts/RoleRepository";
import { UserRepository } from "src/repositories.ts/UserRepository";


@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService,
    private userRepository: UserRepository,
    private roleRepository: RoleRepository,
    private organizationRepository: OrganizationRepository,
  ) {}

  async getAll() {
    return this.prismaService.user.findMany();
  }

  async getUserById(userId: number) {
    const user = await this.userRepository.findById(userId);
    const userRole = await this.roleRepository.findRoleById(user.roleId)
    const userOrganizations = await this.organizationRepository.getOrganizationsFromOrganizationsList(user.Organization_list_id);
    
    const userResponse = {
      id: user.id,
      login: user.login,
      password: user.password,
      mail: user.mail,
      name: user.name,
      role: userRole,
      organization: userOrganizations.flat(),
    };

    return userResponse;
  }

  async createUser(data: UserDTO) {
    return await this.userRepository.create(data);
  }

  async updateUser(userId: number, data: UpdateUserDTO) {
    return await this.userRepository.update(userId, data);
  }

  async deleteUser(userId: number) {
    return await this.userRepository.delete(userId);
  }
}