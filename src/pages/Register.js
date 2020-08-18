import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import request from "../utils/request";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import { Button, UnAuthInput } from "../ui/";
import { Link } from "bluejay-ui";
import { Languages } from "../components/";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(180deg, #19c2fb 0%, #247ac3 100%);
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 50px;
  border-radius: 10px;
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
        <span
          style={{
            textAlign: "center",
            marginBottom: 50,
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          }}
        >
          {t("register.title")}
        </span>
        <UnAuthInput
          placeholder={t("general.email")}
          type="email"
          name="email"
          id="email"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          value={credentials.email}
        ></UnAuthInput>
        <UnAuthInput
          placeholder={t("general.password")}
          type="password"
          name="password"
          id="password"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          value={credentials.password}
        ></UnAuthInput>
        <Button color="secondary" type="submit">
          Iniciar sesion
        </Button>
        <span style={{ marginTop: 35, color: "#2f308A", fontWeight: "bold" }}>
          ¿Ya tienes cuenta?
          <RouterLink component={Link} to="/" color="primary">
            ¡Inicia sesión aquí!
          </RouterLink>
        </span>
        <Languages />
      </Box>
    </Container>
  );
};
export default withTranslation()(Register);