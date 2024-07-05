/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourseWhereUniqueInput } from "../../course/base/CourseWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CourseListRelationFilter } from "../../course/base/CourseListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class StudyMaterialWhereInput {
  @ApiProperty({
    required: false,
    type: () => CourseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourseWhereUniqueInput)
  @IsOptional()
  @Field(() => CourseWhereUniqueInput, {
    nullable: true,
  })
  course?: CourseWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CourseListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CourseListRelationFilter)
  @IsOptional()
  @Field(() => CourseListRelationFilter, {
    nullable: true,
  })
  courses?: CourseListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  file?: JsonFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;
}

export { StudyMaterialWhereInput as StudyMaterialWhereInput };
