import React, { Component } from "react";
import { Row, Input, Button } from "react-materialize";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login();
    this.state = { error: false, msg: null };
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
      if (res.error) {
        this.setState(res);
        return;
      }
      console.log(res.user[0]);
      //save session in state
      //and in browser cache
      this.props.reduxDispatchLogin(res.user[0]);
      sessionStorage.setItem("user", JSON.stringify(res.user[0]));
      //redirect to homepage
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <div>
        <h4>Login Page</h4>
        <Row>
          <form onSubmit={this.formSubmit.bind(this)}>
            <Input type="text" label="username" s={12} />
            <Input type="password" label="password" s={12} />
            <Button waves="light">Login</Button>
            <span style={{ marginLeft: "15px", color: "red" }}>
              {this.state.error ? this.state.msg : ""}
            </span>
          </form>
        </Row>
        <Link to="/register">New Users Register Here</Link>
      </div>
    );
  }
}

export default Login;
