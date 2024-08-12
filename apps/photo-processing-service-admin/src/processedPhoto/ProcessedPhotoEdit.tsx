import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UploadedPhotoTitle } from "../uploadedPhoto/UploadedPhotoTitle";

export const ProcessedPhotoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
