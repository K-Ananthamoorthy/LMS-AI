import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PersonalAssistanceListRelationFilter } from "../personalAssistance/PersonalAssistanceListRelationFilter";

export type StudentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  personalAssistances?: PersonalAssistanceListRelationFilter;
};
