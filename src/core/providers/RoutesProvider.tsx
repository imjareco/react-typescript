import { FunctionComponent, useMemo } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { IRoute } from "core/models";
import { Layout } from "core/components/Layout";

interface IRoutesProvider {
  routes: IRoute[];
}

const Unauthorized = () => <div>unauthorized</div>;
const NotFound = () => <div>Not found 404</div>;

const RoutesProvider: FunctionComponent<IRoutesProvider> = ({ routes }) => {
  const routeList = useMemo(() => {
    return routes.map(({ labelKey, subpaths, ...props }: IRoute) => <Route {...props} key={labelKey}>
      {subpaths?.length ? subpaths.map(({labelKey, ...props }) => <Route {...props} key={labelKey} />) : undefined}
    </Route>)
  }, [routes]);

  return (
    <Switch>
      <Route path="/" element={<Layout />} >
        {routeList}
      </Route>
      <Route path="unauthorized" element={<Unauthorized />}/>
      <Route path="*" element={<NotFound />}/>
    </Switch>
  );
};

export default RoutesProvider;