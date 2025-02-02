/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  PersonalAssistance as PrismaPersonalAssistance,
  Student as PrismaStudent,
} from "@prisma/client";

export class PersonalAssistanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PersonalAssistanceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.personalAssistance.count(args);
  }

  async personalAssistances(
    args: Prisma.PersonalAssistanceFindManyArgs
  ): Promise<PrismaPersonalAssistance[]> {
    return this.prisma.personalAssistance.findMany(args);
  }
  async personalAssistance(
    args: Prisma.PersonalAssistanceFindUniqueArgs
  ): Promise<PrismaPersonalAssistance | null> {
    return this.prisma.personalAssistance.findUnique(args);
  }
  async createPersonalAssistance(
    args: Prisma.PersonalAssistanceCreateArgs
  ): Promise<PrismaPersonalAssistance> {
    return this.prisma.personalAssistance.create(args);
  }
  async updatePersonalAssistance(
    args: Prisma.PersonalAssistanceUpdateArgs
  ): Promise<PrismaPersonalAssistance> {
    return this.prisma.personalAssistance.update(args);
  }
  async deletePersonalAssistance(
    args: Prisma.PersonalAssistanceDeleteArgs
  ): Promise<PrismaPersonalAssistance> {
    return this.prisma.personalAssistance.delete(args);
  }

  async getStudent(parentId: string): Promise<PrismaStudent | null> {
    return this.prisma.personalAssistance
      .findUnique({
        where: { id: parentId },
      })
      .student();
  }
}
