import { useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";
import WordList from "../components/Word/WordList";
import classes from "./MyPage.module.css";

const MyPage = () => {
  const items = useSelector((state) => state.book.items);
  return (
    <Layout>
      <div className={classes["word-list"]}>
        {items.length === 0 && (
          <div className={classes["not-found"]}>
            <h3 className={classes.title}>Not Found</h3>
            <p className={classes.detail}>
              Hit the button below to create your very first word list.
              <br />
              Start saving all your favorite words.
            </p>
            <button>Create a new list</button>
          </div>
        )}
        {items.length !== 0 && <WordList items={items} />}
      </div>
    </Layout>
  );
};

export default MyPage;
