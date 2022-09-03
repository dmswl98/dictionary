import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import NoWordsFound from "../../components/Word/NoWordsFound";
import FolderModal from "../../components/Modal/FolderModal";
import FolderList from "../../components/Folder/FolderList";

import classes from "./MyPage.module.css";

const MyPage = () => {
  const [folderModalIsShown, setFolderModalIsShown] = useState(false);
  const folders = useSelector((state) => state.book.folders);

  const showModalHandler = () => {
    setFolderModalIsShown(true);
  };

  const hideModalHandler = () => {
    setFolderModalIsShown(false);
  };

  return (
    <React.Fragment>
      <Outlet />
      <div className={classes["my-page"]}>
        {folderModalIsShown && <FolderModal onClose={hideModalHandler} />}
        {folders.length === 0 && <NoWordsFound onShow={showModalHandler} />}
        <button className={classes.button} onClick={showModalHandler}>
          Create a new list
        </button>
        {folders.length !== 0 && <FolderList folders={folders} />}
      </div>
    </React.Fragment>
  );
};

export default MyPage;
