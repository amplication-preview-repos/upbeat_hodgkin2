import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { UPLOADEDPHOTO_TITLE_FIELD } from "../uploadedPhoto/UploadedPhotoTitle";

export const ProcessedPhotoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProcessedPhotos"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
