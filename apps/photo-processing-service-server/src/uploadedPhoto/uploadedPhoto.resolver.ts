import * as graphql from "@nestjs/graphql";
import { UploadedPhotoResolverBase } from "./base/uploadedPhoto.resolver.base";
import { UploadedPhoto } from "./base/UploadedPhoto";
import { UploadedPhotoService } from "./uploadedPhoto.service";

@graphql.Resolver(() => UploadedPhoto)
export class UploadedPhotoResolver extends UploadedPhotoResolverBase {
  constructor(protected readonly service: UploadedPhotoService) {
    super(service);
  }
}
