import React from "react";
import useBem from "../../hooks/useBem";

import "./SubscriptionRoom.scss";
import Button from "../Button";

interface ISubscriptionsProps {
  label: string;
  price: number;
  description: string;
  color: "primary";
  onClick: any;
  className: string;
  maxUsers: number;
  users: number;
  type: string;
}

function SubscriptionRoom(props: ISubscriptionsProps) {
  const { bemElement, bem, bemBlock } = useBem("SubscriptionRoom");
  return (
    <div
      className={bem(
        bemBlock({
          [props.color]: true,
        }),
        props.className
      )}
    >
      <div className={bemElement("logo-container")}>
        <div className={bemElement("logo")}>
          <div>
            {props.type === "spotify" ? (
              <img src="/logos/spotify.png" alt="spotify" />
            ) : (
              <img src="/logos/netflix.jpg" alt="netflix" />
            )}
          </div>
        </div>
        <div className={bemElement("info-container")}>
          <h2>{props.label}</h2>
          <p>
            {props.users}/{props.maxUsers} Users
          </p>
        </div>
      </div>
      <div className={bemElement("price-container")}>
        <p>
          PRICE:
          <strong>{props.price}</strong>₸
        </p>
        <Button
          label={"ENTER"}
          customSize
          size={"100%"}
          onClick={props.onClick}
        ></Button>
      </div>
    </div>
  );
}

SubscriptionRoom.defaultProps = {
  color: "primary",
  className: "",
};

export default SubscriptionRoom;
