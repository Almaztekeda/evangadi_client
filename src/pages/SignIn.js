import React from "react";
import Login from "./Login";
import About from "./About";

function SignIn() {
  return (
    <div className="sign-up">
      <div className="container">
        <div className="row ">
          <div className="col">
            <Login />
          </div>
          <div className="col">
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
