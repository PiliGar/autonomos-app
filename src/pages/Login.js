import React from "react";
import request from "../utils/request";

class Login extends React.Component {
  state = { email: "", password: "" };
  onSubmit = (e) => {
    e.preventDefault();
    console.log("submmit");
    console.log(this.state);
    request("ApplicationUsers/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="email"
            onChange={(e) => this.setState({ email: e.target.value })}
            value={this.state.email}
          ></input>
          <input
            type="password"
            onChange={(e) => this.setState({ password: e.target.value })}
            value={this.state.password}
          ></input>
          <button type="submit">Iniciar sesion</button>
        </form>
      </div>
    );
  }
}
export default Login;
