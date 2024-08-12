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
import { UploadedPhotoWhereInput } from "./UploadedPhotoWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UploadedPhotoListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UploadedPhotoWhereInput,
  })
  @ValidateNested()
  @Type(() => UploadedPhotoWhereInput)
  @IsOptional()
  @Field(() => UploadedPhotoWhereInput, {
    nullable: true,
  })
  every?: UploadedPhotoWhereInput;

  @ApiProperty({
    required: false,
    type: () => UploadedPhotoWhereInput,
  })
  @ValidateNested()
  @Type(() => UploadedPhotoWhereInput)
  @IsOptional()
  @Field(() => UploadedPhotoWhereInput, {
    nullable: true,
  })
  some?: UploadedPhotoWhereInput;

  @ApiProperty({
    required: false,
    type: () => UploadedPhotoWhereInput,
  })
  @ValidateNested()
  @Type(() => UploadedPhotoWhereInput)
  @IsOptional()
  @Field(() => UploadedPhotoWhereInput, {
    nullable: true,
  })
  none?: UploadedPhotoWhereInput;
}
export { UploadedPhotoListRelationFilter as UploadedPhotoListRelationFilter };