import { FunctionComponent } from "react";
import PropTypes from "prop-types";
import { Redirect, Switch } from "react-router-dom";
import { routerElementsBuilder } from "core/functions";
import { IRoute } from "core/models";

interface RoutesProps {
  routes: IRoute[];
}

const Routes: FunctionComponent<RoutesProps> = ({ routes }) => {
  const routeList = routerElementsBuilder(routes);
  return (
    <Switch>
      {routeList.map((route) => route)}
      <Redirect to="/" />
    </Switch>
  );
};

Routes.propTypes = {
  routes: PropTypes.array.isRequired,
}

export default Routes;