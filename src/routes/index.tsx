import * as React from "react";
import IndexPage from "./IndexPage";
import LoginPage from "./LoginPage";
import NotFoundPage from "./NotFoundPage";

export interface IRouteProps {
  path: string;
  element: React.ReactNode;
  items?: IRouteProps[];
}

export const ROUTE_ROOT = "/";
export const ROUTE_NOT_FOUND = "*";
export const ROUTE_SUBSCRIPTION = "subscription";
export const ROUTE_LOGIN = "login";

export const publicRoutes: IRouteProps[] = [
  {
    path: ROUTE_ROOT,
    element: <IndexPage />,
  },
  {
    path: ROUTE_NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    path: ROUTE_SUBSCRIPTION,
    element: <NotFoundPage />,
  },
  {
    path: ROUTE_LOGIN,
    element: <LoginPage />,
  },
];
