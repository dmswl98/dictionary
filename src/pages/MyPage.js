import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";
import WordList from "../components/Word/WordList";
import NoWordsFound from "../components/Word/NoWordsFound";
import classes from "./MyPage.module.css";
import FolderModal from "../components/Word/FolderModal";
import FolderList from "../components/Word/FolderList";

const MyPage = () => {
  const [folderModalIsShown, setFolderModalIsShown] = useState(false);
  const folders = useSelector((state) => state.book.folders);

  useEffect(() => {
    console.log(folders);
  }, [folders]);

  const showModalHandler = () => {
    setFolderModalIsShown(true);
  };

  const hideModalHandler = () => {
    setFolderModalIsShown(false);
  };

  return (
    <Layout>
      <div className={classes["my-page"]}>
        <button className={classes.button} onClick={showModalHandler}>
          Create a new list
        </button>
        {folderModalIsShown && <FolderModal onClose={hideModalHandler} />}
        {folders.length === 0 && <NoWordsFound onShow={showModalHandler} />}
        {folders.length !== 0 && <FolderList folders={folders} />}
        {/* {items.length !== 0 && <WordList items={items} />} */}
      </div>
    </Layout>
  );
};

export default MyPage;
