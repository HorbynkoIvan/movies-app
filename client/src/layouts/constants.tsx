import React from "react";

import { Home, Recommendation, Settings } from "@features";

type RouteType = {
  path: string;
  element: React.ReactElement;
};

export const MAIN_ROUTES: Record<string, RouteType> = {
  home: { path: "/", element: <Home /> },
  settings: {
    path: "settings",
    element: <Settings />,
  },
  recommendation: {
    path: "recommendation",
    element: <Recommendation />,
  },
  notFound: {
    path: "*",
    element: <div>Not Found</div>,
  },
};
