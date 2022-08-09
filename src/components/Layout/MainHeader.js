import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>Dictionary</h1>
      <nav>
        <NavLink className={classes["mypage-nav"]} to="/mypage">
          My Page
        </NavLink>
      </nav>
    </header>
  );
};

export default React.memo(MainHeader);
