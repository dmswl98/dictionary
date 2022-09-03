import { Link } from "react-router-dom";

import Folder from "../../assets/images/svg-folder";
import classes from "./FolderItem.module.css";

const FolderItem = ({ folder }) => {
  return (
    <li>
      <div className={classes["folder-item"]}>
        <Link className={classes.folder} to={`/mypage/${folder.name}`}>
          <div className={classes["svg-wrapper"]}>
            <Folder className={classes.svg} color={folder.color} />
          </div>
        </Link>
        <p className={classes["folder-name"]}>{folder.name}</p>
      </div>
    </li>
  );
};

export default FolderItem;
