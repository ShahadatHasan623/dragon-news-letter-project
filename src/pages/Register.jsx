import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";



const Register = () => {
  const { crateUser,setUser,updateUser }=use(AuthContext)
  const [errorName,setErrorName]=useState('')
  const navigate =useNavigate()

  const handleRegister =e=>{
      e.preventDefault()
      const name =e.target.name.value
      const photourl =e.target.photourl.value
      const email =e.target.email.value;
      const password =e.target.password.value;
      if(name.length <5){
        setErrorName("Name should be more then 5 character")
        return;
      }
      else{
        setErrorName('')
      }
      crateUser(email,password)
      .then(result=>{
        const user =result.user;
        updateUser({displayName:name,photoURL:photourl})
        .then(()=>{
          setUser({...user,displayName:name,photoURL:photourl});
          navigate('/')
        })
        .catch(error=>{
          console.log(error)
          setUser(user)
        })
        
      })
      .catch(error=>{
        console.log(error.message)
      })
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-xl font-bold text-center">Register your account</h1>
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label font-bold">Your Name</label>
            <input name="name" type="text" className="input" placeholder="Enter Your Name" />
            {errorName && <p className="text-red-500">{errorName}</p>}
            <label className="label font-bold">Photo Url</label>
            <input type="text" name="photourl" className="input" placeholder="Photo Url" />
            <label className="label font-bold">Email</label>
            <input type="email" className="input" name="email" placeholder="Email" />
            <label className="label font-bold">Password</label>
            <input type="password" className="input" name="password" placeholder="Password" />
            <button type="submit" className="btn btn-neutral mt-4">Register</button>
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
