import { ProcessedPhotoCreateNestedManyWithoutUploadedPhotosInput } from "./ProcessedPhotoCreateNestedManyWithoutUploadedPhotosInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UploadedPhotoCreateInput = {
  photoUrl?: string | null;
  processedPhotos?: ProcessedPhotoCreateNestedManyWithoutUploadedPhotosInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
