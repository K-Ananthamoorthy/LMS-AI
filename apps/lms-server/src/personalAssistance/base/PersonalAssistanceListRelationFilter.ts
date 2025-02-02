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
import { PersonalAssistanceWhereInput } from "./PersonalAssistanceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PersonalAssistanceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PersonalAssistanceWhereInput,
  })
  @ValidateNested()
  @Type(() => PersonalAssistanceWhereInput)
  @IsOptional()
  @Field(() => PersonalAssistanceWhereInput, {
    nullable: true,
  })
  every?: PersonalAssistanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => PersonalAssistanceWhereInput,
  })
  @ValidateNested()
  @Type(() => PersonalAssistanceWhereInput)
  @IsOptional()
  @Field(() => PersonalAssistanceWhereInput, {
    nullable: true,
  })
  some?: PersonalAssistanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => PersonalAssistanceWhereInput,
  })
  @ValidateNested()
  @Type(() => PersonalAssistanceWhereInput)
  @IsOptional()
  @Field(() => PersonalAssistanceWhereInput, {
    nullable: true,
  })
  none?: PersonalAssistanceWhereInput;
}
export { PersonalAssistanceListRelationFilter as PersonalAssistanceListRelationFilter };
