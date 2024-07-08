import { StudyMaterialWhereUniqueInput } from "../studyMaterial/StudyMaterialWhereUniqueInput";
import { StudyMaterialUpdateManyWithoutCoursesInput } from "./StudyMaterialUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  title?: string | null;
  description?: string | null;
  studyMaterial?: StudyMaterialWhereUniqueInput | null;
  studyMaterials?: StudyMaterialUpdateManyWithoutCoursesInput;
};
