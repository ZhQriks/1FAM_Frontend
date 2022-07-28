import React from "react";
import useBem from "../../../hooks/useBem";

import "./SectionContainer.scss";

interface ISectionContainerProps {
  children: React.ReactNode;
  className: string;
}

export default function SectionContainer(props: ISectionContainerProps) {
  const { bem, bemBlock } = useBem("SectionContainer");
  return (
    <section className={bem(bemBlock(), props.className)}>
      {props.children}
    </section>
  );
}
