import React from "react";
import { Link } from "react-router";


const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-xl font-bold text-center">Register your account</h1>
          <form className="fieldset">
            <label className="label font-bold">Your Name</label>
            <input type="text" className="input" placeholder="Enter Your Name" />
            <label className="label font-bold">Photo Url</label>
            <input type="text" className="input" placeholder="Photo Url" />
            <label className="label font-bold">Email</label>
            <input type="email" className="input" name="email" placeholder="Email" />
            <label className="label font-bold">Password</label>
            <input type="password" className="input" name="password" placeholder="Password" />
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p className="font-bold text-center ">
            Already Have An Account ?{" "}
            <Link to="/auth/login" className="text-secondary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
