import React from "react";
import useBem from "../../hooks/useBem";

import "./Subscription.scss";

interface ISubscriptionsProps {
  label: string;
  color: "primary" | "secondary" | "success" | "danger" | "warning";
  className: string;
  onClick?: () => void;
  price: number;
  priceWithFamily: number;
  image: string;
}

function Subscription(props: ISubscriptionsProps) {
  const { bemElement, bem, bemBlock } = useBem("Subscription");
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
      <div className={bemElement("subscription-title")}>
        <div className={bemElement("subscription-title", { circle: true })}>
          <img src={props.image} alt={props.label} />
        </div>
        {props.label}
      </div>
      <div className={bemElement("subscription-price")}>
        <p>
          PRICE:
          <b> {props.price}$</b>
        </p>
        <p>
          WITH FAMILY:
          <b> {props.priceWithFamily}$</b>
        </p>
      </div>
    </div>
  );
}

Subscription.defaultProps = {
  outline: false,
  color: "primary",
  className: "",
  gradient: false,
};

export default Subscription;
