import { StudyMaterialWhereUniqueInput } from "../studyMaterial/StudyMaterialWhereUniqueInput";
import { StudyMaterialCreateNestedManyWithoutCoursesInput } from "./StudyMaterialCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  title?: string | null;
  description?: string | null;
  studyMaterial?: StudyMaterialWhereUniqueInput | null;
  studyMaterials?: StudyMaterialCreateNestedManyWithoutCoursesInput;
};
