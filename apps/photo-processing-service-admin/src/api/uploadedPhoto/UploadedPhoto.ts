import { ProcessedPhoto } from "../processedPhoto/ProcessedPhoto";
import { User } from "../user/User";

export type UploadedPhoto = {
  createdAt: Date;
  id: string;
  photoUrl: string | null;
  processedPhotos?: Array<ProcessedPhoto>;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
