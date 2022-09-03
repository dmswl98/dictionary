import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <NavLink end to="/">
          <h1>Dictionary</h1>
        </NavLink>
        <nav>
          <NavLink className={classes["mypage-nav"]} to="/mypage">
            My Page
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </React.Fragment>
  );
};

export default React.memo(Navigation);
