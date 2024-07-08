import { InputJsonValue } from "../../types";
import { CourseUpdateManyWithoutStudyMaterialsInput } from "./CourseUpdateManyWithoutStudyMaterialsInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type StudyMaterialUpdateInput = {
  file?: InputJsonValue;
  title?: string | null;
  description?: string | null;
  courses?: CourseUpdateManyWithoutStudyMaterialsInput;
  course?: CourseWhereUniqueInput | null;
};
