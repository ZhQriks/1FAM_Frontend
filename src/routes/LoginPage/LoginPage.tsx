import * as React from "react";
import useBem from "../../hooks/useBem";

import "./LoginPage.scss";
import ContentContainer from "../../shared/layout/ContentContainer";
import SectionContainer from "../../shared/layout/SectionContainer";
import Button from "../../shared/Button";
import Subscription from "../../shared/Subscription";
import Input from "../../shared/Input";

export default function LoginPage() {
  const { bemBlock, bemElement } = useBem("LoginPage");

  return (
    <SectionContainer className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        <div className={bemElement("form-container")}>
          <h1>Create Account </h1>
          <Input label={"Hello"} outline></Input>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}
