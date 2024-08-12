import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UploadedPhotoServiceBase } from "./base/uploadedPhoto.service.base";

@Injectable()
export class UploadedPhotoService extends UploadedPhotoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
