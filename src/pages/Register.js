import React from "react";
import request from "../utils/request";
import { withTranslation } from "react-i18next";
import { UnAuthPage } from "../ui/";

const Register = ({ t, login }) => {
  const onSubmit = (credentials) => {
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
    <UnAuthPage
      onSubmit={onSubmit}
      title={t("register.title")}
      submitText={t("register.c2a")}
      secondaryText={t("register.secondaryText")}
      secondaryLink="/register"
      linkText={t("register.linkText")}
    ></UnAuthPage>
  );
};
export default withTranslation()(Register);
