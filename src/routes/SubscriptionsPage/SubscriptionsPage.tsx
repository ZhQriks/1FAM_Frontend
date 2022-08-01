import * as React from "react";
import useBem from "../../hooks/useBem";
import { useSelector } from "../../hooks/useSelector";
import { useDispatch } from "react-redux";

import "./SubscriptionsPage.scss";
import ContentContainer from "../../shared/layout/ContentContainer";
import SectionContainer from "../../shared/layout/SectionContainer";
import Button from "../../shared/Button";
import Subscription from "../../shared/Subscription";
import { userDecoded } from "../../api/functions";

export default function SubscriptionsPage() {
  const { bemBlock, bemElement } = useBem("SubscriptionsPage");
  const isAuthorizedUser = useSelector((state) => state.auth.isLoggedIn);
  if (isAuthorizedUser) {
    let user = useSelector((state) => state.auth.user);
  }
  return (
    <SectionContainer className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        <h1>ACTIVE ROOMS🚪:</h1>

        <div className={bemElement("subscriptions-container")}>//create</div>
      </ContentContainer>
    </SectionContainer>
  );
}
