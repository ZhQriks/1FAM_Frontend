import React, { useEffect } from "react";
import useBem from "../../../hooks/useBem";
import { Link, NavLink } from "react-router-dom";
import Button from "../../Button";
import {
  ROUTE_ROOT,
  ROUTE_NOT_FOUND,
  ROUTE_SUBSCRIPTION,
  ROUTE_LOGIN,
  ROUTE_REGISTER,
  ROUTE_PROFILE,
} from "../../../routes";
import { useSelector } from "../../../hooks/useSelector";
import ContentContainer from "../ContentContainer";

import "./Header.scss";
import UserService from "../../../services/user.service";

export default function Header() {
  const [userBalance, setUserBalance] = React.useState(0);
  const isAuthorizedUser = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isAuthorizedUser) {
      try {
        UserService.getUser().then((res) => {
          setUserBalance(res.data.balance);
        });
      } catch (e) {
        console.log(e);
      }
    }
  }, [isAuthorizedUser]);

  const { bemBlock, bemElement } = useBem("Header");

  function userLogout() {
    localStorage.removeItem("user");
    window.location.reload();
  }

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
          {isAuthorizedUser && (
            <NavLink className={bemElement("link")} to={ROUTE_SUBSCRIPTION}>
              Subscriptions
            </NavLink>
          )}
        </div>
        {isAuthorizedUser ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>
              {Math.round(userBalance)}
              <span>₸</span>
            </h3>
            <NavLink to={ROUTE_PROFILE}>
              <div>
                <img
                  src="/images/pfp.png"
                  alt="profile"
                  className={bemElement("pfp")}
                />
              </div>
            </NavLink>
            <a onClick={() => userLogout()}>Logout</a>
          </div>
        ) : (
          <div className={bemElement("auth-routes-container")}>
            <Link to={ROUTE_LOGIN}>
              <Button label="Login" outline />
            </Link>
            <Link to={ROUTE_REGISTER}>
              <Button label="Register" />
            </Link>
          </div>
        )}
      </ContentContainer>
    </header>
  );
}
