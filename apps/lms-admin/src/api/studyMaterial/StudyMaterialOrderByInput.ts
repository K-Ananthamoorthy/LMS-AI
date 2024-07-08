import { SortOrder } from "../../util/SortOrder";

export type StudyMaterialOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  file?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  courseId?: SortOrder;
};
