import { StudyMaterial } from "../studyMaterial/StudyMaterial";

export type Course = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  studyMaterial?: StudyMaterial | null;
  studyMaterials?: Array<StudyMaterial>;
};
