import React from "react";
import useBem from "../../../hooks/useBem";
import { Link, NavLink } from "react-router-dom";
import Button from "../../Button";
import {
  ROUTE_ROOT,
  ROUTE_NOT_FOUND,
  ROUTE_SUBSCRIPTION,
} from "../../../routes";
import { useSelector } from "../../../hooks/useSelector";
import ContentContainer from "../ContentContainer";

import "./Header.scss";

export default function Header() {
  const { bemBlock, bemElement } = useBem("Header");

  const isAuthorizedUser = useSelector((state) => state.auth.isAuth);

  return (
    <header className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        <div className={bemElement("logo-container")}>
          <img src="/logos/one-family-logo.svg" alt="one-family-logo" />
          <h1>1FAMILY</h1>
        </div>
        <div className={bemElement("routes-container")}>
          <NavLink className={bemElement("link")} to={ROUTE_ROOT}>
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
            <Link to={ROUTE_NOT_FOUND}>
              <Button label="Login" outline />
            </Link>
            <Link to={ROUTE_NOT_FOUND}>
              <Button label="Register" />
            </Link>
          </div>
        )}
      </ContentContainer>
    </header>
  );
}
