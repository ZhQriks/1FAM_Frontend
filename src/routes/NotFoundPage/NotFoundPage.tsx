import * as React from "react";
import useBem from "../../hooks/useBem";
import "./NotFoundPage.tsx.scss";
import SectionContainer from "../../shared/layout/SectionContainer";

export default function NotFoundPage() {
  const { bemBlock, bemElement } = useBem("NotFoundPage");
  return (
    <SectionContainer className={bemBlock()}>
      <div className={bemBlock()}>
        <h1 className={bemElement("headline")}>Page is Not Found </h1>
      </div>
    </SectionContainer>
  );
}
