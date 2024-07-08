import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STUDYMATERIAL_TITLE_FIELD } from "../studyMaterial/StudyMaterialTitle";

export const CourseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Courses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Title" source="title" />
        <TextField label="Description" source="description" />
        <ReferenceField
          label="StudyMaterial"
          source="studymaterial.id"
          reference="StudyMaterial"
        >
          <TextField source={STUDYMATERIAL_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
