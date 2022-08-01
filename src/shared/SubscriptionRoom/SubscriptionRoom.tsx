import React from "react";
import useBem from "../../hooks/useBem";

import "./SubscriptionRoom.scss";
import Button from "../Button";

interface ISubscriptionsProps {
  label: string;
  price: number;
  description: string;
  color: "primary";
  onClick?: () => void;
  className: string;
  usersMax: number;
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
      onClick={props.onClick}
    >
      <div className={bemElement("logo-container")}>
        <div className={bemElement("logo")}></div>
        <div className={bemElement("info-container")}>
          <h2>{props.label}</h2>
          <p>{props.usersMax} Users max</p>
        </div>
      </div>
      <div className={bemElement("price-container")}>
        <p>
          <strong>PRICE:</strong>
          {props.price}$
        </p>
        <Button label={"ENTER"} customSize size={"100%"}></Button>
      </div>
    </div>
  );
}

SubscriptionRoom.defaultProps = {
  color: "primary",
  className: "",
};

export default SubscriptionRoom;
