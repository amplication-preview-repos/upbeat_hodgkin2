import { ProcessedPhoto as TProcessedPhoto } from "../api/processedPhoto/ProcessedPhoto";

export const PROCESSEDPHOTO_TITLE_FIELD = "processedPhotoUrl";

export const ProcessedPhotoTitle = (record: TProcessedPhoto): string => {
  return record.processedPhotoUrl?.toString() || String(record.id);
};
