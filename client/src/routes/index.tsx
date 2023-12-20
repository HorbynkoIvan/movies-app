import { useRoutes } from "react-router-dom";

import { useRouteMap } from "@layouts/hooks";

export const Router = () => {
  // Get various routes configurations
  const { MainRoutes } = useRouteMap();

  // Generate the routes
  const routing = useRoutes([MainRoutes]);

  return routing;
};
