import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { UPLOADEDPHOTO_TITLE_FIELD } from "../uploadedPhoto/UploadedPhotoTitle";

export const ProcessedPhotoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="processedPhotoUrl" source="processedPhotoUrl" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="UploadedPhoto"
          source="uploadedphoto.id"
          reference="UploadedPhoto"
        >
          <TextField source={UPLOADEDPHOTO_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
