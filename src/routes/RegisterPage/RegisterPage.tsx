import * as React from "react";
import useBem from "../../hooks/useBem";
import ContentContainer from "../../shared/layout/ContentContainer";
import SectionContainer from "../../shared/layout/SectionContainer";
import { useState } from "react";
import { register } from "../../redux/auth/actions";
import { useDispatch } from "../../hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import "./RegsiterPage.scss";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { useSelector } from "../../hooks/useSelector";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function formSubmit(e: any) {
    console.log("works");
    e.preventDefault();
    if (passwordConfirm === password) {
      dispatch(register(name, surname, age, email, password))
        .then(() => {
          navigate("/");
        })
        .catch((e: any) => {
          console.log(e);
        });
    } else {
      alert("Passwords do not match");
    }
  }
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { bemBlock, bemElement } = useBem("RegisterPage");

  return (
    <SectionContainer className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        <div className={bemElement("form-container")}>
          <div>
            <div>
              <h2>Register</h2>
            </div>
            <form onSubmit={formSubmit}>
              <p>Name</p>
              <Input
                name={"name"}
                placeholder={"Johnny"}
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
              <p>Surname</p>
              <Input
                name={"surname"}
                placeholder={"Daulet"}
                value={surname}
                onChange={(e: any) => setSurname(e.target.value)}
              />
              <p>Age</p>
              <Input
                name={"age"}
                placeholder={"18"}
                value={age}
                onChange={(e: any) => setAge(e.target.value)}
              />
              <p>Email</p>
              <Input
                name={"Email"}
                placeholder={"johnny@gmail.com"}
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
              <p>Confirm password</p>
              <Input
                name={"confirm_password"}
                placeholder={"Confirm password"}
                type={"password"}
                value={passwordConfirm}
                onChange={(e: any) => setPasswordConfirm(e.target.value)}
              />
              <br />
              <Button
                label={"Create"}
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
