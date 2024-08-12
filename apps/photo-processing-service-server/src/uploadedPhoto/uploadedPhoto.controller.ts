import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UploadedPhotoService } from "./uploadedPhoto.service";
import { UploadedPhotoControllerBase } from "./base/uploadedPhoto.controller.base";

@swagger.ApiTags("uploadedPhotos")
@common.Controller("uploadedPhotos")
export class UploadedPhotoController extends UploadedPhotoControllerBase {
  constructor(protected readonly service: UploadedPhotoService) {
    super(service);
  }
}
