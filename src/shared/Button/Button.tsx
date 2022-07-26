import React from "react";
import useBem from "../../hooks/useBem";

import "./Button.scss";

interface IButtonProps {
  label: string;
  color: "primary" | "secondary" | "success" | "danger" | "warning";
  outline: boolean;
  className: string;
  onClick?: () => void;
  gradient: boolean;
  customSize?: true;
  size?: string;
  customHeight?: true;
  height?: string;
}

function Button(props: IButtonProps) {
  const { bem, bemBlock } = useBem("Button");
  return (
    <button
      style={{
        width: props.customSize ? props.size : "",
        height: props.customHeight ? props.height : "",
      }}
      className={bem(
        bemBlock({
          [props.color]: true,
          outline: props.outline,
          gradient: props.gradient,
        }),
        props.className
      )}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

Button.defaultProps = {
  outline: false,
  color: "primary",
  className: "",
  gradient: false,
};

export default Button;
