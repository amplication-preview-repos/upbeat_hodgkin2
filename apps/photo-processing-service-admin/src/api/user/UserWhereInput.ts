import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UploadedPhotoListRelationFilter } from "../uploadedPhoto/UploadedPhotoListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  uploadedPhotos?: UploadedPhotoListRelationFilter;
  username?: StringFilter;
};
