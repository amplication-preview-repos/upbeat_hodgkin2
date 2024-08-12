import { UploadedPhoto as TUploadedPhoto } from "../api/uploadedPhoto/UploadedPhoto";

export const UPLOADEDPHOTO_TITLE_FIELD = "photoUrl";

export const UploadedPhotoTitle = (record: TUploadedPhoto): string => {
  return record.photoUrl?.toString() || String(record.id);
};
