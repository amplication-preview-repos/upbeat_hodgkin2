/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ProcessedPhoto } from "./ProcessedPhoto";
import { ProcessedPhotoCountArgs } from "./ProcessedPhotoCountArgs";
import { ProcessedPhotoFindManyArgs } from "./ProcessedPhotoFindManyArgs";
import { ProcessedPhotoFindUniqueArgs } from "./ProcessedPhotoFindUniqueArgs";
import { CreateProcessedPhotoArgs } from "./CreateProcessedPhotoArgs";
import { UpdateProcessedPhotoArgs } from "./UpdateProcessedPhotoArgs";
import { DeleteProcessedPhotoArgs } from "./DeleteProcessedPhotoArgs";
import { UploadedPhoto } from "../../uploadedPhoto/base/UploadedPhoto";
import { ProcessedPhotoDto } from "../ProcessedPhotoDto";
import { ProcessedPhotoService } from "../processedPhoto.service";
@graphql.Resolver(() => ProcessedPhoto)
export class ProcessedPhotoResolverBase {
  constructor(protected readonly service: ProcessedPhotoService) {}

  async _processedPhotosMeta(
    @graphql.Args() args: ProcessedPhotoCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProcessedPhoto])
  async processedPhotos(
    @graphql.Args() args: ProcessedPhotoFindManyArgs
  ): Promise<ProcessedPhoto[]> {
    return this.service.processedPhotos(args);
  }

  @graphql.Query(() => ProcessedPhoto, { nullable: true })
  async processedPhoto(
    @graphql.Args() args: ProcessedPhotoFindUniqueArgs
  ): Promise<ProcessedPhoto | null> {
    const result = await this.service.processedPhoto(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProcessedPhoto)
  async createProcessedPhoto(
    @graphql.Args() args: CreateProcessedPhotoArgs
  ): Promise<ProcessedPhoto> {
    return await this.service.createProcessedPhoto({
      ...args,
      data: {
        ...args.data,

        uploadedPhoto: args.data.uploadedPhoto
          ? {
              connect: args.data.uploadedPhoto,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ProcessedPhoto)
  async updateProcessedPhoto(
    @graphql.Args() args: UpdateProcessedPhotoArgs
  ): Promise<ProcessedPhoto | null> {
    try {
      return await this.service.updateProcessedPhoto({
        ...args,
        data: {
          ...args.data,

          uploadedPhoto: args.data.uploadedPhoto
            ? {
                connect: args.data.uploadedPhoto,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ProcessedPhoto)
  async deleteProcessedPhoto(
    @graphql.Args() args: DeleteProcessedPhotoArgs
  ): Promise<ProcessedPhoto | null> {
    try {
      return await this.service.deleteProcessedPhoto(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => UploadedPhoto, {
    nullable: true,
    name: "uploadedPhoto",
  })
  async getUploadedPhoto(
    @graphql.Parent() parent: ProcessedPhoto
  ): Promise<UploadedPhoto | null> {
    const result = await this.service.getUploadedPhoto(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Query(() => ProcessedPhotoDto)
  async DownloadProcessedPhoto(
    @graphql.Args("args")
    args: string
  ): Promise<ProcessedPhotoDto> {
    return this.service.DownloadProcessedPhoto(args);
  }
}