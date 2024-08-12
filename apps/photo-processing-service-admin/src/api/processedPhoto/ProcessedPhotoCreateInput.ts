import { UploadedPhotoWhereUniqueInput } from "../uploadedPhoto/UploadedPhotoWhereUniqueInput";

export type ProcessedPhotoCreateInput = {
  processedPhotoUrl?: string | null;
  uploadedPhoto?: UploadedPhotoWhereUniqueInput | null;
};
