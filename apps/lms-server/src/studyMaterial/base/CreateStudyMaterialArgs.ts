/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StudyMaterialCreateInput } from "./StudyMaterialCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateStudyMaterialArgs {
  @ApiProperty({
    required: true,
    type: () => StudyMaterialCreateInput,
  })
  @ValidateNested()
  @Type(() => StudyMaterialCreateInput)
  @Field(() => StudyMaterialCreateInput, { nullable: false })
  data!: StudyMaterialCreateInput;
}

export { CreateStudyMaterialArgs as CreateStudyMaterialArgs };
