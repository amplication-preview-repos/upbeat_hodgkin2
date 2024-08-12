import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("ProcessedPhotoDtoObject")
class ProcessedPhotoDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    processedPhotoUrl!: string;
}

export { ProcessedPhotoDto as ProcessedPhotoDto };