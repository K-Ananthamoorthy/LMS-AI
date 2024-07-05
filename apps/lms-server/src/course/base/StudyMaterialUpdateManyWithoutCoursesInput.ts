/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { StudyMaterialWhereUniqueInput } from "../../studyMaterial/base/StudyMaterialWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class StudyMaterialUpdateManyWithoutCoursesInput {
  @Field(() => [StudyMaterialWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StudyMaterialWhereUniqueInput],
  })
  connect?: Array<StudyMaterialWhereUniqueInput>;

  @Field(() => [StudyMaterialWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StudyMaterialWhereUniqueInput],
  })
  disconnect?: Array<StudyMaterialWhereUniqueInput>;

  @Field(() => [StudyMaterialWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StudyMaterialWhereUniqueInput],
  })
  set?: Array<StudyMaterialWhereUniqueInput>;
}

export { StudyMaterialUpdateManyWithoutCoursesInput as StudyMaterialUpdateManyWithoutCoursesInput };
