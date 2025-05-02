import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { logIn, forgotPassword } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  const [showPassword,setShowPassword]=useState(false)
  console.log(emailRef);
  // console.log(location)
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    logIn(email, password)
      .then((Result) => {
        const result = Result.user;
        console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleForgotPassword = () => {
    const email = emailRef?.current?.value;

    forgotPassword(email)
      .then(() => {
        alert("A password reset email sent.please check your email");
      })
      .catch(() => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-xl font-bold text-center">Login your account</h1>
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label font-bold">Email</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="input"
              placeholder="Email"
              required
            />
            <div className="relative">
            <label className="label font-bold">Password</label>
            <input
              type={showPassword ? 'text':'password'}
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <button onClick={()=>setShowPassword(!showPassword)} className=" btn absolute top-4.5 right-4">
              {
                showPassword ? <FaEye></FaEye>:<FaEyeSlash />
              }
            </button>
            </div>
            <div onClick={handleForgotPassword}>
              <a className="link link-hover font-bold">Forgot password?</a>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </form>
          <p className="font-bold text-center ">
            Don't Have An Account ?{" "}
            <Link to="/auth/register" className="text-secondary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
