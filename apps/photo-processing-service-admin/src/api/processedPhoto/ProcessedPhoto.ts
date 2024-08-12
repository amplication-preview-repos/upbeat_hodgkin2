import { UploadedPhoto } from "../uploadedPhoto/UploadedPhoto";

export type ProcessedPhoto = {
  createdAt: Date;
  id: string;
  processedPhotoUrl: string | null;
  updatedAt: Date;
  uploadedPhoto?: UploadedPhoto | null;
};
