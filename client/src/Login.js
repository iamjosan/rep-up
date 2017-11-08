import React, { Component } from "react";
import { Row, Input, Button } from "react-materialize";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login();
    this.state = { error: false };
  }

  formSubmit(e) {
    e.preventDefault();
    this.props.socket.emit("user login", {
      username: e.target.querySelector('[type="text"]').value,
      password: e.target.querySelector('[type="password"]').value
    });
  }

  login() {
    this.props.socket.on("user login", res => {
      if (!res) {
        this.setState({ error: true });
        return;
      }
      console.log(res[0]);
      //save session in state
      //and in browser cache
      this.props.reduxDispatchLogin(res[0]);
      sessionStorage.setItem("user", JSON.stringify(res[0]));
      //redirect to homepage
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <div>
        <h2>Login Page</h2>
        <Row>
          <form onSubmit={this.formSubmit.bind(this)}>
            <Input type="text" label="username" s={12} />
            <Input type="password" label="password" s={12} />
            <Button waves="light">Login</Button>
            <span style={{ marginLeft: "15px", color: "red" }}>
              {this.state.error ? "Incorrect Login" : ""}
            </span>
          </form>
        </Row>
      </div>
    );
  }
}

export default Login;
