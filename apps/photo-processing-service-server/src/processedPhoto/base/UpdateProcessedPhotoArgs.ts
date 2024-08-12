/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProcessedPhotoWhereUniqueInput } from "./ProcessedPhotoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProcessedPhotoUpdateInput } from "./ProcessedPhotoUpdateInput";

@ArgsType()
class UpdateProcessedPhotoArgs {
  @ApiProperty({
    required: true,
    type: () => ProcessedPhotoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProcessedPhotoWhereUniqueInput)
  @Field(() => ProcessedPhotoWhereUniqueInput, { nullable: false })
  where!: ProcessedPhotoWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProcessedPhotoUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProcessedPhotoUpdateInput)
  @Field(() => ProcessedPhotoUpdateInput, { nullable: false })
  data!: ProcessedPhotoUpdateInput;
}

export { UpdateProcessedPhotoArgs as UpdateProcessedPhotoArgs };