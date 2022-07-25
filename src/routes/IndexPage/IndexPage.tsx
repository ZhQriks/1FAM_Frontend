import * as React from "react";
import useBem from "../../hooks/useBem";
import { useSelector } from "../../hooks/useSelector";
import { useDispatch } from "react-redux";

import "./IndexPage.scss";

export default function IndexPage() {
  const { bemBlock, bemElement } = useBem("IndexPage");

  return <div className={bemBlock()}></div>;
}
