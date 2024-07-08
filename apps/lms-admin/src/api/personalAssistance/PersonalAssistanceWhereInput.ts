import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type PersonalAssistanceWhereInput = {
  id?: StringFilter;
  assistanceType?: "Option1";
  details?: StringNullableFilter;
  student?: StudentWhereUniqueInput;
};
