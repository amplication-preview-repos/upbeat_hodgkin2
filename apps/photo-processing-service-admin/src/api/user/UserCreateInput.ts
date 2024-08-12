import { InputJsonValue } from "../../types";
import { UploadedPhotoCreateNestedManyWithoutUsersInput } from "./UploadedPhotoCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  uploadedPhotos?: UploadedPhotoCreateNestedManyWithoutUsersInput;
  username: string;
};
