import * as React from "react";
import useBem from "../../hooks/useBem";
import ContentContainer from "../../shared/layout/ContentContainer";
import SectionContainer from "../../shared/layout/SectionContainer";

import "./ProfilePage.scss";
import Button from "../../shared/Button";
import Input from "../../shared/Input";
import { useState } from "react";
import UserService from "../../services/user.service";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [sum, setSum] = useState(0);
  const { bemBlock, bemElement } = useBem("ProfilePage");
  const navigate = useNavigate();

  function topUpBalance() {
    if (sum > 0) {
      UserService.resplenishUser(sum)
        .then((res) => {
          console.log(res.data.payUrl);
          window.location.href = res.data.payUrl;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please enter a valid sum");
    }
  }

  function updateBalance() {
    UserService.updateBalance()
      .then((res) => {
        alert(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <SectionContainer className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        <h1>TOP-UP BALANCE:</h1>
        <div>
          <Button
            label={"CHECK PAYMENT"}
            outline
            customHeight
            height={"55px"}
            className={bemElement("button-check")}
            onClick={() => updateBalance()}
          />{" "}
          <Input
            value={sum}
            placeholder={"Enter sum"}
            onChange={(e) => setSum(e.target.value)}
            name={"sum"}
            className={bemElement("input-sum")}
          />
          <Button
            label={"TOP-UP"}
            customHeight
            height={"55px"}
            onClick={() => topUpBalance()}
          ></Button>
        </div>
        <hr />
      </ContentContainer>
    </SectionContainer>
  );
}
