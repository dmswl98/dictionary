import { useDispatch, useSelector } from "react-redux";
import { bookActions } from "../../store/book-slice";
import { resultActions } from "../../store/result-slice";
import DefinitionList from "./Definition/DefinitionList";
import Star from "../../assets/images/svg-star";
import classes from "./SearchResult.module.css";
import { useEffect } from "react";

const SearchResult = () => {
  const dispatch = useDispatch();
  const wordData = useSelector((state) => state.result.resultData);
  const items = useSelector((state) => state.book.items);
  const isLoading = useSelector((state) => state.result.isLoading);
  // const isSaved = wordData.isSaved;
  {
    /* {isLoading && <p>loading...</p>}
        {!isLoading && <p>{word}</p>} */
  }
  let isSaved = items.filter((item) => item === wordData.word).length;

  const saveWordHandler = () => {
    if (!isSaved) {
      dispatch(bookActions.addWord(wordData.word));
    } else {
      dispatch(bookActions.removeWord(wordData.word));
    }
  };

  return (
    <section className={classes.result}>
      <header className={classes["result-header"]}>
        <div className={classes["header-left"]}>
          <div className={classes.title}>
            <strong>{wordData.word}</strong>
          </div>
          <div className={classes.pronounces}>
            <ul className={classes["pronounce-list"]}>
              {wordData.phonetics.map((pho, i) => (
                <li key={i} className={classes["pronounce-item"]}>
                  {pho}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes["header-right"]}>
          <button
            className={classes.save}
            type="button"
            onClick={saveWordHandler}
          >
            <Star
              className={
                isSaved
                  ? `${classes.svg} ${classes["svg-active"]}`
                  : `${classes.svg}`
              }
            />
          </button>
        </div>
      </header>
      <main className={classes["result-main"]}>
        <div className={classes.meaning}>
          <ul className={classes["meaning-list"]}>
            {wordData.meanings.map((meaning, i) => (
              <DefinitionList key={wordData.id + i} meaning={meaning} />
            ))}
          </ul>
        </div>
      </main>
    </section>
  );
};

export default SearchResult;
