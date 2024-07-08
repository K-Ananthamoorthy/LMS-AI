import { SortOrder } from "../../util/SortOrder";

export type PersonalAssistanceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  assistanceType?: SortOrder;
  details?: SortOrder;
  studentId?: SortOrder;
};
