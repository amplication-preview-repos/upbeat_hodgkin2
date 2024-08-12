import { Module } from "@nestjs/common";
import { ProcessedPhotoModuleBase } from "./base/processedPhoto.module.base";
import { ProcessedPhotoService } from "./processedPhoto.service";
import { ProcessedPhotoController } from "./processedPhoto.controller";
import { ProcessedPhotoResolver } from "./processedPhoto.resolver";

@Module({
  imports: [ProcessedPhotoModuleBase],
  controllers: [ProcessedPhotoController],
  providers: [ProcessedPhotoService, ProcessedPhotoResolver],
  exports: [ProcessedPhotoService],
})
export class ProcessedPhotoModule {}
