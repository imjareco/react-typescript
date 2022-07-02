import { IRoute } from "core/models";
import UserPage from "user/page/user-page";

export default [
  { labelKey: "account", path: "account", subpaths: [
    { labelKey: "profile", path: "profile", element: <UserPage />}
  ]}
] as IRoute[];
