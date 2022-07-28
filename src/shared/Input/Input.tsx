import React from "react";
import useBem from "../../hooks/useBem";

import "./Input.scss";

interface IInputProps {
  label: string;
  className: string;
  onClick?: () => void;
}

function Input(props: IInputProps) {
  const { bem, bemBlock } = useBem("Input");
  return (
    <button
      className={bem(bemBlock({}), props.className)}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

Input.defaultProps = {
  className: "",
};

export default Input;
