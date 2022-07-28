import React from "react";
import useBem from "../../../hooks/useBem";

import "./ContentContainer.scss";

interface IContentContainerProps {
  children: React.ReactNode;
  className: string;
}

export default function ContentContainer(props: IContentContainerProps) {
  const { bem, bemBlock } = useBem("ContentContainer");
  return (
    <div className={bem(bemBlock(), props.className)}>{props.children}</div>
  );
}

ContentContainer.defaultProps = {
  className: "",
};
