import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcessedPhotoService } from "./processedPhoto.service";
import { ProcessedPhotoControllerBase } from "./base/processedPhoto.controller.base";

@swagger.ApiTags("processedPhotos")
@common.Controller("processedPhotos")
export class ProcessedPhotoController extends ProcessedPhotoControllerBase {
  constructor(protected readonly service: ProcessedPhotoService) {
    super(service);
  }
}
