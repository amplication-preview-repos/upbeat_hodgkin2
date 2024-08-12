import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { UPLOADEDPHOTO_TITLE_FIELD } from "./UploadedPhotoTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UploadedPhotoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="photoUrl" source="photoUrl" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="ProcessedPhoto"
          target="uploadedPhotoId"
          label="ProcessedPhotos"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
