import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcessedPhotoServiceBase } from "./base/processedPhoto.service.base";

@Injectable()
export class ProcessedPhotoService extends ProcessedPhotoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
