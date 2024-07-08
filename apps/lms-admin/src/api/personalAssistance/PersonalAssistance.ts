import { Student } from "../student/Student";

export type PersonalAssistance = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  assistanceType?: "Option1" | null;
  details: string | null;
  student?: Student | null;
};
