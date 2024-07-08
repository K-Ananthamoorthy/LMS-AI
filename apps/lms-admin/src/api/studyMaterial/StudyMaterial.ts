import { JsonValue } from "type-fest";
import { Course } from "../course/Course";

export type StudyMaterial = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  file: JsonValue;
  title: string | null;
  description: string | null;
  courses?: Array<Course>;
  course?: Course | null;
};
