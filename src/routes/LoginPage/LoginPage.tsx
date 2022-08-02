import * as React from "react";
import useBem from "../../hooks/useBem";
import ContentContainer from "../../shared/layout/ContentContainer";
import SectionContainer from "../../shared/layout/SectionContainer";
import { useState } from "react";
import { login } from "../../redux/auth/actions";
import { useDispatch } from "../../hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { useSelector } from "../../hooks/useSelector";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function formSubmit(e: any) {
    e.preventDefault();
    dispatch(login(email, password))
      .then((res) => {
        alert("Success");
        navigate("/");
      })
      .catch((e: any) => {
        alert(e);
      });
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { bemBlock, bemElement } = useBem("LoginPage");

  return (
    <SectionContainer className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        <div className={bemElement("form-container")}>
          <div>
            <div>
              <h2>Login</h2>
            </div>
            <form onSubmit={formSubmit}>
              <p>Email</p>
              <Input
                name={"email"}
                placeholder={"zhorikmartanov1337@gmail.com"}
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <p>Password</p>
              <Input
                name={"password"}
                placeholder={"password"}
                type={"password"}
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
              <br />
              <Button
                label={"Login"}
                customSize={true}
                size={"100%"}
                onClick={() => formSubmit}
              />
            </form>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}
