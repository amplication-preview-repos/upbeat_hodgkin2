import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UploadedPhotoWhereUniqueInput } from "../uploadedPhoto/UploadedPhotoWhereUniqueInput";

export type ProcessedPhotoWhereInput = {
  id?: StringFilter;
  processedPhotoUrl?: StringNullableFilter;
  uploadedPhoto?: UploadedPhotoWhereUniqueInput;
};
