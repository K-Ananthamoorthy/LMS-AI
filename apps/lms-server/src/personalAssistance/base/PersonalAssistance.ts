/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumPersonalAssistanceAssistanceType } from "./EnumPersonalAssistanceAssistanceType";
import {
  IsEnum,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Student } from "../../student/base/Student";

@ObjectType()
class PersonalAssistance {
  @ApiProperty({
    required: false,
    enum: EnumPersonalAssistanceAssistanceType,
  })
  @IsEnum(EnumPersonalAssistanceAssistanceType)
  @IsOptional()
  @Field(() => EnumPersonalAssistanceAssistanceType, {
    nullable: true,
  })
  assistanceType?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  details!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Student,
  })
  @ValidateNested()
  @Type(() => Student)
  @IsOptional()
  student?: Student | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { PersonalAssistance as PersonalAssistance };
