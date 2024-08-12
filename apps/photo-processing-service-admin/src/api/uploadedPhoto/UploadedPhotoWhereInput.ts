import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProcessedPhotoListRelationFilter } from "../processedPhoto/ProcessedPhotoListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UploadedPhotoWhereInput = {
  id?: StringFilter;
  photoUrl?: StringNullableFilter;
  processedPhotos?: ProcessedPhotoListRelationFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
