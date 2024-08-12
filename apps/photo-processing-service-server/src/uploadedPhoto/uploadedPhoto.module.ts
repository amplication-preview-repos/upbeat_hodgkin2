import { Module } from "@nestjs/common";
import { UploadedPhotoModuleBase } from "./base/uploadedPhoto.module.base";
import { UploadedPhotoService } from "./uploadedPhoto.service";
import { UploadedPhotoController } from "./uploadedPhoto.controller";
import { UploadedPhotoResolver } from "./uploadedPhoto.resolver";

@Module({
  imports: [UploadedPhotoModuleBase],
  controllers: [UploadedPhotoController],
  providers: [UploadedPhotoService, UploadedPhotoResolver],
  exports: [UploadedPhotoService],
})
export class UploadedPhotoModule {}
