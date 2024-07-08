import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type StudyMaterialWhereInput = {
  id?: StringFilter;
  file?: JsonFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  courses?: CourseListRelationFilter;
  course?: CourseWhereUniqueInput;
};
