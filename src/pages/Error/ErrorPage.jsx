import React from "react";
import Header from "../../components/Header";
import NewsLatest from "../../components/NewsLatest";
import NavBar from "../../components/NavBar";

const ErrorPage = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-11/12 mx-auto space-y-4">
        <NewsLatest></NewsLatest>
        <NavBar></NavBar>
      </div>
      <div className="min-h-screen flex items-center justify-center flex-col ">
        <div className="text-center space-y-2">
          <h1 className="text-red-500 text-4xl font-bold">404</h1>
          <h1 className="text-xl font-semibold">Something is wrong !</h1>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
