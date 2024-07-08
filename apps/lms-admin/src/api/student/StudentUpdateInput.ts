import { PersonalAssistanceUpdateManyWithoutStudentsInput } from "./PersonalAssistanceUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  name?: string | null;
  email?: string | null;
  personalAssistances?: PersonalAssistanceUpdateManyWithoutStudentsInput;
};
