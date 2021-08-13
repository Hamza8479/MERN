import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { auth } from "../../firebase";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    const config = {
      url: process.handleCodeInApp.REACT_APP_REGISTER_COMPLETE_URL,
      handleCodeInApp: true,
    };
  };

  const loginForm = () => (
    <form onSubmit={formHandler} className="form-control-feedback">
      <h4>Form</h4>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <Button type="primary" size="large" shape="round" block>
        Submit
      </Button>
    </form>
  );

  return <div className="col-md-6 offset-md-3 p-5">{loginForm()}</div>;
};

export default Register;
