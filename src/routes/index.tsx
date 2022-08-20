import * as React from "react";
import IndexPage from "./IndexPage";
import LoginPage from "./LoginPage";
import NotFoundPage from "./NotFoundPage";
import RegisterPage from "./RegisterPage";
import SubscriptionsPage from "./SubscriptionsPage/SubscriptionsPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import RoomPage from "./RoomPage/RoomPage";

export interface IRouteProps {
  path: string;
  element: React.ReactNode;
  items?: IRouteProps[];
  [key: string]: any;
}

export const ROUTE_ROOT = "/";
export const ROUTE_NOT_FOUND = "*";
export const ROUTE_SUBSCRIPTION = "subscription";
export const ROUTE_LOGIN = "login";
export const ROUTE_REGISTER = "register";
export const ROUTE_PROFILE = "profile";
export const ROUTE_ROOM = "room";
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
    path: ROUTE_LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTE_REGISTER,
    element: <RegisterPage />,
  },
  {
    path: ROUTE_SUBSCRIPTION,
    element: <SubscriptionsPage />,
    isAuthRoute: true,
  },
  {
    path: ROUTE_PROFILE,
    element: <ProfilePage />,
    isAuthRoute: true,
  },
  {
    path: ROUTE_ROOM,
    element: <RoomPage />,
    isAuthRoute: true,
  },
];
