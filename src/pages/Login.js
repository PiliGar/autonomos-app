import React, { useState } from "react";
import request from "../utils/request";

const Login = () => {
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
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          value={credentials.email}
        ></input>
        <input
          type="password"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          value={credentials.password}
        ></input>
        <button type="submit">Iniciar sesion</button>
      </form>
    </div>
  );
};
export default Login;
