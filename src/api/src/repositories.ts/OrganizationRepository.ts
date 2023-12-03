import { Injectable } from "@nestjs/common";
import { Organization_list_has_Organizations } from "@prisma/client";
import { PrismaService } from "src/prisma/PrismaService";

@Injectable()
export class OrganizationRepository {
  constructor(
    private prisma: PrismaService
  ) {}

  async getOrganizationsFromOrganizationsList(organizationsListId: number) {
    const organizationsList = await this.prisma.organization_list_has_Organizations.findMany({
      where: {
        organization_list_id: organizationsListId
      }
    });

    const organizations = await this.getOrganizationsFromList(organizationsList);
    return organizations;
  }

  async getOrganizationsFromList(organizationsList: Organization_list_has_Organizations[]) {
    const organizations = await Promise.all(organizationsList.map(async (el) => {
      const result = await this.prisma.organization.findMany({
        where: {
          id: el.organization_id
        }
      });
      return result;
    }));
    return organizations;
  }
}