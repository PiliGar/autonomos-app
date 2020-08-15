import React, { useState } from "react";
import request from "../utils/request";
//import "./Login.css";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 50px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  color: #186faf;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  color: white;
  background-color: #186faf;
  border: none;
  :hover {
    background-color: #2680c2;
  }
`;

const Login = ({ t, i18n, login }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submmit");
    console.log(credentials);
    request("ApplicationUsers/login", {
      method: "POST",
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    })
      .then((res) => login())
      .catch((error) => console.error(error));
  };
  const changeLanguage = (language) => i18n.changeLanguage(language);

  return (
    <Container className="container">
      <Box as="form" className="box" onSubmit={onSubmit}>
        <span style={{ textAlign: "center", marginBottom: 50 }}>
          {t("register.title")}
        </span>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          value={credentials.email}
        ></Input>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          value={credentials.password}
        ></Input>
        <Button type="submit">Iniciar sesion</Button>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          <Button
            style={{
              backgroundColor: "#DEDEDE",
              color: "black",
              marginRight: 20,
            }}
            onClick={() => changeLanguage("es")}
          >
            ES
          </Button>
          <Button
            style={{
              backgroundColor: "#DEDEDE",
              color: "black",
            }}
            onClick={() => changeLanguage("en")}
          >
            EN
          </Button>
        </div>
      </Box>
    </Container>
  );
};
export default withTranslation()(Login);
