import { UploadedPhotoWhereInput } from "./UploadedPhotoWhereInput";
import { UploadedPhotoOrderByInput } from "./UploadedPhotoOrderByInput";

export type UploadedPhotoFindManyArgs = {
  where?: UploadedPhotoWhereInput;
  orderBy?: Array<UploadedPhotoOrderByInput>;
  skip?: number;
  take?: number;
};
