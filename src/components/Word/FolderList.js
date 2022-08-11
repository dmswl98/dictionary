import React from "react";
import { Link } from "react-router-dom";
import Folder from "../../assets/images/svg-folder";
import classes from "./FolderList.module.css";

const FolderList = ({ folders }) => {
  return (
    <React.Fragment>
      <ul className={classes["folder-list"]}>
        {folders.map((folder) => (
          <li key={folder.id}>
            <div className={classes.folder}>
              <Link className={classes.button} to={`/mypage/${folder.name}`}>
                <Folder className={classes.svg} color={folder.color} />
              </Link>
              <p className={classes["folder-name"]}>{folder.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default FolderList;
