import { InputJsonValue } from "../../types";
import { UploadedPhotoUpdateManyWithoutUsersInput } from "./UploadedPhotoUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  uploadedPhotos?: UploadedPhotoUpdateManyWithoutUsersInput;
  username?: string;
};
