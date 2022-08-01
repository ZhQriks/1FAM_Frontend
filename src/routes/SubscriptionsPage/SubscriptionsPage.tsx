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
import { useState } from "react";
import SubscriptionRoom from "../../shared/SubscriptionRoom/SubscriptionRoom";

export default function SubscriptionsPage() {
  const [subscriptionType, setSubscriptionType] = useState(1);
  const { bemBlock, bemElement } = useBem("SubscriptionsPage");
  const isAuthorizedUser = useSelector((state) => state.auth.isLoggedIn);
  if (isAuthorizedUser) {
    let user = useSelector((state) => state.auth.user);
  }
  return (
    <SectionContainer className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        <h1>ACTIVE ROOMS🚪:</h1>
        <div className={bemElement("subscriptions-container")}>
          <div className={bemElement("subscription-type")}>
            <div className={bemElement("subscription-image-container")}>
              <img src="/logos/spotify.png" alt="spotfiy-logo" />
            </div>
            <h2>SPOTIFY</h2>
          </div>
          <div className={bemElement("subscription-type")}>
            <div className={bemElement("subscription-image-container")}>
              <img src="/logos/spotify.png" alt="spotfiy-logo" />
            </div>
            <h2>SPOTIFY</h2>
          </div>
          <div className={bemElement("subscription-type")}>
            <div className={bemElement("subscription-image-container")}>
              <img src="/logos/spotify.png" alt="spotfiy-logo" />
            </div>
            <h2>SPOTIFY</h2>
          </div>
          <div className={bemElement("subscription-type")}>
            <div className={bemElement("subscription-image-container")}>
              <img src="/logos/spotify.png" alt="spotfiy-logo" />
            </div>
            <h2>SPOTIFY</h2>
          </div>
          <div className={bemElement("subscription-type")}>
            <div className={bemElement("subscription-image-container")}>
              <img src="/logos/spotify.png" alt="spotfiy-logo" />
            </div>
            <h2>SPOTIFY</h2>
          </div>
        </div>
        <div className={bemElement("filters-buttons-container")}>
          <Button label={"Running"} outline customHeight height={"50px"} />
          <Button label={"Finished"} outline customHeight height={"50px"} />
        </div>
        <div>
          <SubscriptionRoom
            label={"Netflix"}
            price={50}
            description={"dsdasd"}
            usersMax={6}
          />
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}
