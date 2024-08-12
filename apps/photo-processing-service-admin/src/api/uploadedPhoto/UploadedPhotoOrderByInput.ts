import { SortOrder } from "../../util/SortOrder";

export type UploadedPhotoOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  photoUrl?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
