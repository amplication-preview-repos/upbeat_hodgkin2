import { SortOrder } from "../../util/SortOrder";

export type ProcessedPhotoOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  processedPhotoUrl?: SortOrder;
  updatedAt?: SortOrder;
  uploadedPhotoId?: SortOrder;
};
