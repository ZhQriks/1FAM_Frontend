import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTE_ROOT } from "../../routes";
import { useSelector } from "../../hooks/useSelector";

export default function AuthRoute({ children }: any) {
  const isAuthorizedUser = useSelector((state) => state.auth.isLoggedIn);

  if (!isAuthorizedUser) {
    return <Navigate to={ROUTE_ROOT} replace />;
  }

  return children;
}
