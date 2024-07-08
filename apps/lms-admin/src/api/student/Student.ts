import { PersonalAssistance } from "../personalAssistance/PersonalAssistance";

export type Student = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  personalAssistances?: Array<PersonalAssistance>;
};
