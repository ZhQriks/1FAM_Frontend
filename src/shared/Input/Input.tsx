import React from "react";
import useBem from "../../hooks/useBem";

import "./Input.scss";

interface IInputProps {
  placeholder: string;
  className: string;
  onChange?: (e: any) => void;
  name: string;
  value: any;
  type: string;
  customWidth?: true;
  width?: string;
}

function Input(props: IInputProps) {
  const { bem, bemBlock } = useBem("Input");
  return (
    <input
      style={{
        maxWidth: props.customWidth ? props.width : "",
      }}
      className={bem(bemBlock({}), props.className)}
      placeholder={props.placeholder}
      onChange={props.onChange}
      name={props.name}
      value={props.value}
      type={props.type}
    />
  );
}

Input.defaultProps = {
  className: "",
  type: "text",
};

export default Input;
