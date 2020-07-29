import React from "react";

class Login extends React.Component {
  state = { email: "", password: "" };
  onSubmit = (e) => {
    e.preventDefault();
    console.log("submmit");
    console.log(this.state);
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
