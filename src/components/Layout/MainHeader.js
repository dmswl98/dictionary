import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
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
  );
};

export default React.memo(MainHeader);
