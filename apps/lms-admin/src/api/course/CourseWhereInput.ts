import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudyMaterialWhereUniqueInput } from "../studyMaterial/StudyMaterialWhereUniqueInput";
import { StudyMaterialListRelationFilter } from "../studyMaterial/StudyMaterialListRelationFilter";

export type CourseWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  studyMaterial?: StudyMaterialWhereUniqueInput;
  studyMaterials?: StudyMaterialListRelationFilter;
};
