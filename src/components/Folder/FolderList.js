import React from "react";
import FolderItem from "./FolderItem";

import classes from "./FolderList.module.css";

const FolderList = ({ folders }) => {
  return (
    <div>
      <ul className={classes["folder-list"]}>
        {folders.map((folder) => (
          <FolderItem key={folder.id} folder={folder} />
        ))}
      </ul>
    </div>
  );
};
export default FolderList;
