import { IRoute } from "core/models";
import HomePage from "home/page/home-page";

export default [
  { labelKey: "home",  path: "/", element: <HomePage /> }
] as IRoute[];
