import { PersonalAssistanceCreateNestedManyWithoutStudentsInput } from "./PersonalAssistanceCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  name?: string | null;
  email?: string | null;
  personalAssistances?: PersonalAssistanceCreateNestedManyWithoutStudentsInput;
};
