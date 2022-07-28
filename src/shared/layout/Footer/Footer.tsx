import React from "react";
import useBem from "../../../hooks/useBem";
import { Link, NavLink } from "react-router-dom";
import {
  ROUTE_NOT_FOUND,
  ROUTE_ROOT,
  ROUTE_SUBSCRIPTION,
} from "../../../routes";
import { useSelector } from "../../../hooks/useSelector";
import ContentContainer from "../ContentContainer";

import "./Footer.scss";

export default function Footer() {
  const { bemBlock, bemElement } = useBem("Footer");

  const isAuthorizedUser = useSelector((state) => state.auth.isAuth);

  return (
    <footer className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        <div className={bemElement("routes-container")}>
          <h2>
            <a className={bemElement("link")}>Made with love in 2022</a>
          </h2>
        </div>
      </ContentContainer>
    </footer>
  );
}
