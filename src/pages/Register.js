import React, { useState } from "react";
import { Link } from "react-router-dom";
import request from "../utils/request";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import { Button, Input, Label } from "../ui/";
import { Languages } from "../components/";

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

const Register = ({ t, login }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submmit");
    console.log(credentials);
    request("ApplicationUsers", {
      method: "POST",
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    })
      .then((res) => login())
      .catch((error) => console.error(error));
  };

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
        <Link to="/">¿Ya tienes cuenta? ¡Inicia sesión aquí!</Link>
        <Languages />
      </Box>
    </Container>
  );
};
export default withTranslation()(Register);
