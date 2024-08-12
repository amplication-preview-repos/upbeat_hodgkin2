import { ProcessedPhotoWhereInput } from "./ProcessedPhotoWhereInput";
import { ProcessedPhotoOrderByInput } from "./ProcessedPhotoOrderByInput";

export type ProcessedPhotoFindManyArgs = {
  where?: ProcessedPhotoWhereInput;
  orderBy?: Array<ProcessedPhotoOrderByInput>;
  skip?: number;
  take?: number;
};
