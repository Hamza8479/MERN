import React from "react";

const RegisterComplete = () => {
  return (
    <div>
      <form onSubmit={formHandler} className="form-control-feedback">
        <h4>Register</h4>
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
        <Button className="btn btn-primary mt-2">Submit</Button>
      </form>
    </div>
  );
};

export default RegisterComplete;
