import * as React from "react";
import useBem from "../../hooks/useBem";
import { useSelector } from "../../hooks/useSelector";
import { useDispatch } from "react-redux";

import "./IndexPage.scss";
import ContentContainer from "../../shared/layout/ContentContainer";
import SectionContainer from "../../shared/layout/SectionContainer";
import Button from "../../shared/Button";
import Subscription from "../../shared/Subscription";
import { userDecoded } from "../../api/functions";
import { useNavigate } from "react-router-dom";

export default function IndexPage() {
  const { bemBlock, bemElement } = useBem("IndexPage");
  const navigate = useNavigate();
  const isAuthorizedUser = useSelector((state) => state.auth.isLoggedIn);
  if (isAuthorizedUser) {
    let user = useSelector((state) => state.auth.user);
  }
  return (
    <SectionContainer className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        <div className={bemElement("about-container")}>
          <div
            className={bemElement("about-container-block", { mainBlock: true })}
          >
            <h1>
              You can buy subscriptions with us
              <br />6 times more profitable
            </h1>
            <p>
              1FAMILY is 100% secure subscriptions
              <br />
              buying platform
            </p>
            <Button
              label="Buy now"
              gradient
              onClick={() => navigate("/subscription")}
            />
          </div>
          <div
            className={bemElement("about-container-block", {
              imageBlock: true,
            })}
          >
            <div>
              <div className={bemElement("cards-block")}>
                <div className={bemElement("cards-block", { card: true })}>
                  <h2>FAMILY SUBSCRIPTION</h2>
                  <p>Automated picking system</p>
                  <div className={bemElement("cards-block", { circles: true })}>
                    <div
                      className={bemElement("cards-block", { circle: true })}
                    ></div>
                    <div
                      className={bemElement("cards-block", { circle: true })}
                    ></div>{" "}
                    <div
                      className={bemElement("cards-block", { circle: true })}
                    ></div>
                    <div
                      className={bemElement("cards-block", { circle: true })}
                    >
                      <img
                        src="/logos/gradient_plus.svg"
                        alt="gradient_plus-logo"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={bemElement("cards-block", { rectangle: true })}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className={bemElement("hot-subscriptions-block")}>
          <h2 className={bemElement("hot-subscriptions-title")}>
            HOT SUBSCRIPTIONS🔥:
          </h2>
          <div className={bemElement("hot-subscriptions-container")}>
            <Subscription
              label="Netflix"
              price={50}
              image={"/logos/netflix.jpg"}
              priceWithFamily={10}
            ></Subscription>
            <Subscription
              label="Spotify"
              price={50}
              image={"/logos/spotify.png"}
              priceWithFamily={10}
            ></Subscription>
            <Subscription
              label="Spotify"
              price={50}
              image={"/logos/spotify.png"}
              priceWithFamily={10}
            ></Subscription>
            <Subscription
              label="Spotify"
              price={50}
              image={"/logos/spotify.png"}
              priceWithFamily={10}
            ></Subscription>
          </div>
        </div>
        <div style={{ marginTop: "30px" }}>
          <Button
            className={bemElement("hot-subscriptions-button")}
            label={"SEE MORE..."}
          ></Button>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}
