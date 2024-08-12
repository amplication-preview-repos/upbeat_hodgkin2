import { UploadedPhotoWhereUniqueInput } from "../uploadedPhoto/UploadedPhotoWhereUniqueInput";

export type ProcessedPhotoUpdateInput = {
  processedPhotoUrl?: string | null;
  uploadedPhoto?: UploadedPhotoWhereUniqueInput | null;
};
