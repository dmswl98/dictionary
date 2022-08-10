import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";
import WordList from "../components/Word/WordList";
import NoWordsFound from "../components/Word/NoWordsFound";
import classes from "./MyPage.module.css";
import FolderModal from "../components/Word/FolderModal";

const MyPage = () => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const items = useSelector((state) => state.book.items);

  useEffect(() => {
    console.log(modalIsShown);
  }, [modalIsShown]);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <Layout>
      <div className={classes["word-list"]}>
        {modalIsShown && <FolderModal onClose={hideModalHandler} />}
        {items.length === 0 && <NoWordsFound onShow={showModalHandler} />}
        {items.length !== 0 && <WordList items={items} />}
      </div>
    </Layout>
  );
};

export default MyPage;
