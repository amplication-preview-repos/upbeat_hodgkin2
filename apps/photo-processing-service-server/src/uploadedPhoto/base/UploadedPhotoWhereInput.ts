/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProcessedPhotoListRelationFilter } from "../../processedPhoto/base/ProcessedPhotoListRelationFilter";
import { EnumUploadedPhotoStatus } from "./EnumUploadedPhotoStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class UploadedPhotoWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  photoUrl?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ProcessedPhotoListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProcessedPhotoListRelationFilter)
  @IsOptional()
  @Field(() => ProcessedPhotoListRelationFilter, {
    nullable: true,
  })
  processedPhotos?: ProcessedPhotoListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumUploadedPhotoStatus,
  })
  @IsEnum(EnumUploadedPhotoStatus)
  @IsOptional()
  @Field(() => EnumUploadedPhotoStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { UploadedPhotoWhereInput as UploadedPhotoWhereInput };
