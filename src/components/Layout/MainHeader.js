import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>Dictionary</h1>
      <nav>
        <ul>
          <li>
            <p>navigation</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
