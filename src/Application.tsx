import * as React from "react";
import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { IRouteProps, publicRoutes as routes } from "./routes";
import Layout from "./shared/layout/Layout";
import AuthRoute from "./shared/AuthRoute";

export default function Application() {
  const getAllRoutes = useMemo(
    () => {
      const getRoute = (route: IRouteProps) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.isAuthRoute ? (
              <AuthRoute>{route.element}</AuthRoute>
            ) : (
              route.element
            )
          }
        >
          {route.items?.map((routeItem) => getRoute(routeItem))}
        </Route>
      );

      return <Routes>{routes.map((route) => getRoute(route))}</Routes>;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [routes]
  );

  return <Layout>{getAllRoutes}</Layout>;
}
