import { JsonValue } from "type-fest";
import { UploadedPhoto } from "../uploadedPhoto/UploadedPhoto";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  uploadedPhotos?: Array<UploadedPhoto>;
  username: string;
};
