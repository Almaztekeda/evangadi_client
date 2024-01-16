import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../components/axiosConfig";

function Register() {
  const navigate = useNavigate();
  const usernameDom = useRef();
  const firstnameDom = useRef();
  const lastnameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const usernamevalue = usernameDom.current.value;
    const firstvalue = firstnameDom.current.value;
    const lastvalue = lastnameDom.current.value;
    const emailvalue = emailDom.current.value;
    const passvalue = passwordDom.current.value;

    if (
      !usernamevalue ||
      !firstvalue ||
      !lastvalue ||
      !emailvalue ||
      !passvalue
    ) {
      alert("Please provide all required information");
      return;
    }

    try {
      await axios.post("users/register", {
        user_name: usernamevalue,
        first_name: firstvalue,
        last_name: lastvalue,
        email: emailvalue,
        password: passvalue,
      });
      alert("register successfull.please login");
      navigate("/login");
    } catch (error) {
      alert("something went wrong!");
      console.log(error.response);
    }
  }
  return (
    <section className="px-4 bg-light login text-center authfy-panel panel-login text-center active">
      <div class="authfy-heading">
        <h3 className="auth-title">Join the network</h3>
        <p>
          Already have an account?
          <Link className="lnk-toggler" to={"/login"}>
            Sign in
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="wrap-input">
          <input
            className="login-input form-control input-lg"
            ref={usernameDom}
            type="text"
            placeholder="username"
          />
        </div>
        <br />
        <div className="row g-3">
          <div className="col">
            <input
              className=" login-input form-control input-lg"
              ref={firstnameDom}
              type="text"
              placeholder="First Name"
            />
          </div>
          <br />
          <div className="col">
            <input
              className="login-input form-control input-lg"
              ref={lastnameDom}
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <br />
        <div className="wrap-input">
          <input
            className="login-input form-control input-lg"
            ref={emailDom}
            type="email"
            placeholder="email"
          />
        </div>
        <br />
        <div className="wrap-input">
          <input
            className="login-input form-control input-lg"
            ref={passwordDom}
            type="password"
            placeholder="password"
          />
        </div>
        <br />
        <div>
          <button
            className="login-btn btn btn-lg btn-primary btn-block"
            type="submit"
          >
            Agree and Join
          </button>
        </div>
        <br />
        <p>
          I agree to the{" "}
          <Link className="lnk-toggler" to={"/"}>
            privacy policy
          </Link>
          and{" "}
          <Link className="lnk-toggler" to={"/"}>
            terms of service.
          </Link>
        </p>
        <Link className="lnk-toggler" to={"/login"}>
          Already have an account?
        </Link>
      </form>
    </section>
  );
}

export default Register;
