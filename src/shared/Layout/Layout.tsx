import * as React from "react";
import { useSelector } from "react-redux";
import useBem from "../../hooks/useBem";
import Header from "../Header/Header";

import "./Layout.scss";

interface ILayoutProps {
  children?: React.ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const { bemBlock } = useBem("Layout");

  return <div className={bemBlock()}>{props.children}</div>;
}
