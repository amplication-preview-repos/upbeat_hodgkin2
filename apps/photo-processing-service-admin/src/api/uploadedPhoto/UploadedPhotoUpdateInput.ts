import { ProcessedPhotoUpdateManyWithoutUploadedPhotosInput } from "./ProcessedPhotoUpdateManyWithoutUploadedPhotosInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UploadedPhotoUpdateInput = {
  photoUrl?: string | null;
  processedPhotos?: ProcessedPhotoUpdateManyWithoutUploadedPhotosInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
