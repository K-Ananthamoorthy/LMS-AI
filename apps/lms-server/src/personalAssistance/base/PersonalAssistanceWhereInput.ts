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
import { EnumPersonalAssistanceAssistanceType } from "./EnumPersonalAssistanceAssistanceType";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../../student/base/StudentWhereUniqueInput";

@InputType()
class PersonalAssistanceWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumPersonalAssistanceAssistanceType,
  })
  @IsEnum(EnumPersonalAssistanceAssistanceType)
  @IsOptional()
  @Field(() => EnumPersonalAssistanceAssistanceType, {
    nullable: true,
  })
  assistanceType?: "Option1";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  details?: StringNullableFilter;

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
    type: () => StudentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StudentWhereUniqueInput)
  @IsOptional()
  @Field(() => StudentWhereUniqueInput, {
    nullable: true,
  })
  student?: StudentWhereUniqueInput;
}

export { PersonalAssistanceWhereInput as PersonalAssistanceWhereInput };
