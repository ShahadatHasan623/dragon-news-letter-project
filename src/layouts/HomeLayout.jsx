import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import NewsLatest from "../components/NewsLatest/NewsLatest";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
            <NewsLatest></NewsLatest>
        </section>
      </header>
      <main>
        <section className="nav-left"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="nav-right"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
