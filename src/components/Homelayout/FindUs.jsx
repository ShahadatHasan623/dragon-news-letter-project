import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold mt-5">Find Us</h1>
      <div className="join join-vertical w-full mt-5 ">
        <button className="btn join-item justify-start"><FaFacebook size={20}></FaFacebook>Facebook</button>
        <button className="btn join-item justify-start"><FaTwitter size={20}></FaTwitter>twitter</button>
        <button className="btn join-item justify-start"><FaInstagram size={20}></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
