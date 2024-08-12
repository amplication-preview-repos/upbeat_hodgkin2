import * as graphql from "@nestjs/graphql";
import { ProcessedPhotoResolverBase } from "./base/processedPhoto.resolver.base";
import { ProcessedPhoto } from "./base/ProcessedPhoto";
import { ProcessedPhotoService } from "./processedPhoto.service";

@graphql.Resolver(() => ProcessedPhoto)
export class ProcessedPhotoResolver extends ProcessedPhotoResolverBase {
  constructor(protected readonly service: ProcessedPhotoService) {
    super(service);
  }
}
