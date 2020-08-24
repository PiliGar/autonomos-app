import React from "react";
import request from "../utils/request";
import { withTranslation } from "react-i18next";
import { UnAuthPage } from "../ui/";

const Login = ({ t, login }) => {
  const onSubmit = (credentials) => {
    console.log("submmit");
    console.log(credentials);
    request("ApplicationUsers/login?include=USER", {
      method: "POST",
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    })
      .then(({ user }) => login(user))
      .catch((error) => console.error(error));
  };

  return (
    <UnAuthPage
      onSubmit={onSubmit}
      title={t("login.title")}
      submitText={t("login.c2a")}
      secondaryText={t("login.secondaryText")}
      secondaryLink="/"
      linkText={t("login.linkText")}
    ></UnAuthPage>
  );
};
export default withTranslation()(Login);
