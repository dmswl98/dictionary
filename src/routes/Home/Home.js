import React from "react";
import { Outlet } from "react-router-dom";

import SearchForm from "../../components/SearchForm/SearchForm";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <Outlet />
      <div className={classes["search-form"]}>
        <SearchForm />
      </div>
    </div>
  );
};

export default Home;
