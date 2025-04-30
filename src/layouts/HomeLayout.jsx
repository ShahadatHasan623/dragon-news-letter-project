import React from "react";
import { Outlet } from "react-router";
import AsideLeft from "../components/Homelayout/AsideLeft";
import AsideRight from "../components/Homelayout/AsideRight";
import Header from "../components/Header";
import NewsLatest from "../components/NewsLatest";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <NewsLatest></NewsLatest>
        </section>
        <nav className="w-11/12 mx-auto mt-5">
            <NavBar></NavBar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto  grid grid-cols-12 gap-5 my-5">
        <aside className="col-span-3">
          <AsideLeft></AsideLeft>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <AsideRight></AsideRight>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
