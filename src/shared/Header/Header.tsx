import React from "react";
import useBem from "../../hooks/useBem";
import { Link, NavLink } from "react-router-dom";
import { ROUTE_HOME, ROUTE_NOT_FOUND, ROUTE_SUBSCRIPTION } from "../../routes";
import { useSelector } from "../../hooks/useSelector";

import "./Header.scss";

export default function Header() {
  const { bemBlock, bemElement } = useBem("Header");

  const isAuthorizedUser = useSelector((state) => state.auth.isAuth);

  return (
    <div className={bemBlock()}>
      <div className={bemElement("logo-container")}>
        <img src="/logos/one-family-logo.svg" alt="one-family-logo" />
        <h1>1FAMILY</h1>
      </div>
      <div className={bemElement("routes-container")}>
        <NavLink className={bemElement("link")} to={ROUTE_HOME}>
          Home
        </NavLink>
        <NavLink className={bemElement("link")} to={ROUTE_SUBSCRIPTION}>
          Subscriptions
        </NavLink>
      </div>
      {isAuthorizedUser ? (
        <NavLink to={ROUTE_NOT_FOUND}>Profile</NavLink>
      ) : (
        <div className={bemElement("auth-routes-container")}>
          <Link
            to={ROUTE_NOT_FOUND}
            className={bemElement("auth-button", { login: true })}
          >
            Login
          </Link>
          <Link
            to={ROUTE_NOT_FOUND}
            className={bemElement("auth-button", { register: true })}
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}
