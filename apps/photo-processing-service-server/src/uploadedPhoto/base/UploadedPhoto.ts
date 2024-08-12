/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { ProcessedPhoto } from "../../processedPhoto/base/ProcessedPhoto";
import { EnumUploadedPhotoStatus } from "./EnumUploadedPhotoStatus";
import { User } from "../../user/base/User";

@ObjectType()
class UploadedPhoto {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  photoUrl!: string | null;

  @ApiProperty({
    required: false,
    type: () => [ProcessedPhoto],
  })
  @ValidateNested()
  @Type(() => ProcessedPhoto)
  @IsOptional()
  processedPhotos?: Array<ProcessedPhoto>;

  @ApiProperty({
    required: false,
    enum: EnumUploadedPhotoStatus,
  })
  @IsEnum(EnumUploadedPhotoStatus)
  @IsOptional()
  @Field(() => EnumUploadedPhotoStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { UploadedPhoto as UploadedPhoto };
