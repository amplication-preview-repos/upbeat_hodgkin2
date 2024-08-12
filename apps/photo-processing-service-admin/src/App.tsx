import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProcessedPhotoList } from "./processedPhoto/ProcessedPhotoList";
import { ProcessedPhotoCreate } from "./processedPhoto/ProcessedPhotoCreate";
import { ProcessedPhotoEdit } from "./processedPhoto/ProcessedPhotoEdit";
import { ProcessedPhotoShow } from "./processedPhoto/ProcessedPhotoShow";
import { UploadedPhotoList } from "./uploadedPhoto/UploadedPhotoList";
import { UploadedPhotoCreate } from "./uploadedPhoto/UploadedPhotoCreate";
import { UploadedPhotoEdit } from "./uploadedPhoto/UploadedPhotoEdit";
import { UploadedPhotoShow } from "./uploadedPhoto/UploadedPhotoShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Photo Processing Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ProcessedPhoto"
          list={ProcessedPhotoList}
          edit={ProcessedPhotoEdit}
          create={ProcessedPhotoCreate}
          show={ProcessedPhotoShow}
        />
        <Resource
          name="UploadedPhoto"
          list={UploadedPhotoList}
          edit={UploadedPhotoEdit}
          create={UploadedPhotoCreate}
          show={UploadedPhotoShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
