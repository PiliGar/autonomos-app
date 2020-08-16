import React from "react";
import { Button } from "../ui";
import { withTranslation } from "react-i18next";

const Languages = ({ i18n }) => {
  const changeLanguage = (language) => i18n.changeLanguage(language);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
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
  );
};
export default withTranslation()(Languages);
