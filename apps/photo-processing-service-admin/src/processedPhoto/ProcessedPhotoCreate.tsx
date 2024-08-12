import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UploadedPhotoTitle } from "../uploadedPhoto/UploadedPhotoTitle";

export const ProcessedPhotoCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="processedPhotoUrl" source="processedPhotoUrl" />
        <ReferenceInput
          source="uploadedPhoto.id"
          reference="UploadedPhoto"
          label="UploadedPhoto"
        >
          <SelectInput optionText={UploadedPhotoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
