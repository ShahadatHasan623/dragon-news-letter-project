import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Login = () => {
  const {logIn}=use(AuthContext)
  const handleLogin =e=>{
    e.preventDefault()
    const email =e.target.email.value;
    const password =e.target.password.value;
    logIn(email,password)
    .then(Result=>{
      const result =Result.user;
      console.log(result)
    })
    .catch(error=>{
      console.log(error.message)
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
            <h1 className="text-xl font-bold text-center">Login your account</h1>
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label font-bold">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            <label className="label font-bold">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover font-bold">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
          </form>
          <p className="font-bold text-center ">Don't Have An Account ? <Link to='/auth/register' className="text-secondary">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
