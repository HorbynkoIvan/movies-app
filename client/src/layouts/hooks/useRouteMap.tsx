import { MainLayout } from "@layouts";

import { MAIN_ROUTES } from "../constants";

export const useRouteMap = () => {
  const MainRoutes = {
    element: <MainLayout />,
    children: Object.values(MAIN_ROUTES),
  };

  return {
    MainRoutes,
  };
};
