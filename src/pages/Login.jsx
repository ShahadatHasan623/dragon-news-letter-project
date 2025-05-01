import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
            <h1 className="text-xl font-bold text-center">Login your account</h1>
          <form className="fieldset">
            <label className="label font-bold">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label font-bold">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover font-bold">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p className="font-bold text-center ">Don't Have An Account ? <Link to='/auth/register' className="text-secondary">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
