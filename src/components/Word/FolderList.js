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
            <div className={classes["folder-item"]}>
              <Link className={classes.folder} to={`/mypage/${folder.name}`}>
                <div>
                  <Folder className={classes.svg} color={folder.color} />
                </div>
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
