import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import WordCardList from "../../components/WordCard/WordCardList";

import Arrow from "../../assets/images/svg-arrow";
import classes from "./WordList.module.css";

const WordList = () => {
  const navigate = useNavigate();
  const { folderName } = useParams();
  const [sortType, setSortType] = useState("");
  const folders = useSelector((state) => state.book.folders);

  const selectedFolder = folders.filter(
    (folder) => folder.name === folderName
  )[0].items;

  const moveToPreviousPage = () => {
    navigate(-1);
  };

  const sortTypeChangeHandler = (e) => {
    setSortType(e.target.value);
  };

  return (
    <React.Fragment>
      <div className={classes.menu}>
        <div className={classes["menu-left"]}>
          <div className={classes["menu-item"]}>
            <Arrow className={classes.svg} onClick={moveToPreviousPage} />
          </div>
          <div className={classes["menu-item"]}>
            <Link to="/">
              <strong>home</strong>
            </Link>
          </div>
        </div>
        <div className={classes["menu-item"]}>
          <select
            defaultValue=""
            className={classes.sort}
            onChange={sortTypeChangeHandler}
          >
            <option value="" disabled>
              Sort
            </option>
            <option value="default">Default</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {selectedFolder.length === 0 && (
        <p className={classes.error}>No words are stored in this folder.</p>
      )}
      {selectedFolder.length !== 0 && (
        <WordCardList items={selectedFolder} sort={sortType} />
      )}
    </React.Fragment>
  );
};

export default WordList;
