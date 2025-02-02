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
  Course as PrismaCourse,
  StudyMaterial as PrismaStudyMaterial,
} from "@prisma/client";

export class CourseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CourseCountArgs, "select">): Promise<number> {
    return this.prisma.course.count(args);
  }

  async courses(args: Prisma.CourseFindManyArgs): Promise<PrismaCourse[]> {
    return this.prisma.course.findMany(args);
  }
  async course(
    args: Prisma.CourseFindUniqueArgs
  ): Promise<PrismaCourse | null> {
    return this.prisma.course.findUnique(args);
  }
  async createCourse(args: Prisma.CourseCreateArgs): Promise<PrismaCourse> {
    return this.prisma.course.create(args);
  }
  async updateCourse(args: Prisma.CourseUpdateArgs): Promise<PrismaCourse> {
    return this.prisma.course.update(args);
  }
  async deleteCourse(args: Prisma.CourseDeleteArgs): Promise<PrismaCourse> {
    return this.prisma.course.delete(args);
  }

  async findStudyMaterials(
    parentId: string,
    args: Prisma.StudyMaterialFindManyArgs
  ): Promise<PrismaStudyMaterial[]> {
    return this.prisma.course
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .studyMaterials(args);
  }

  async getStudyMaterial(
    parentId: string
  ): Promise<PrismaStudyMaterial | null> {
    return this.prisma.course
      .findUnique({
        where: { id: parentId },
      })
      .studyMaterial();
  }
}
