import { InputJsonValue } from "../../types";
import { CourseCreateNestedManyWithoutStudyMaterialsInput } from "./CourseCreateNestedManyWithoutStudyMaterialsInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type StudyMaterialCreateInput = {
  file?: InputJsonValue;
  title?: string | null;
  description?: string | null;
  courses?: CourseCreateNestedManyWithoutStudyMaterialsInput;
  course?: CourseWhereUniqueInput | null;
};
