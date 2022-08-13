import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefinitionList from "./Definition/DefinitionList";
import SaveModal from "./SaveModal";
import { bookActions } from "../../store/book-slice";
import Star from "../../assets/images/svg-star";
import classes from "./SearchResult.module.css";

const matchColor = (colorCode) => {
  let colorClass;
  switch (colorCode) {
    case "#FF595E":
      colorClass = "red";
      break;
    case "#FFCA3A":
      colorClass = "yellow";
      break;
    case "#8AC926":
      colorClass = "green";
      break;
    case "#1982C4":
      colorClass = "blue";
      break;
    case "#6A4C93":
      colorClass = "purple";
      break;
  }
  return colorClass;
};

const SearchResult = () => {
  const dispatch = useDispatch();
  const wordData = useSelector((state) => state.result.resultData);
  const folders = useSelector((state) => state.book.folders);
  const isLoading = useSelector((state) => state.result.isLoading);
  const error = useSelector((state) => state.result.errorMessage);
  const [saveModalIsShown, setSaveModalIsShown] = useState(false);

  useEffect(() => {
    console.log(folders);
  }, [folders]);

  const showModalHandler = () => {
    if (!isSaved) setSaveModalIsShown(true);
    else {
      const folderIndex = folders.findIndex(
        (folder) =>
          folder.items.filter((item) => item === wordData.word).length > 0
      );
      dispatch(
        bookActions.removeWordToFolder({
          index: folderIndex,
          word: wordData.word,
        })
      );
    }
  };

  const hideModalHandler = () => {
    setSaveModalIsShown(false);
  };

  const isSaved =
    folders
      .map((folder) => folder.items)
      .flat()
      .filter((word) => word === wordData.word).length !== 0;

  let colorClass = "";

  if (isSaved) {
    const colorIndex = folders.findIndex(
      (folder) =>
        folder.items.filter((item) => item === wordData.word).length > 0
    );
    colorClass = matchColor(folders[colorIndex].color);
  }

  {
    /* {isLoading && <p>loading...</p>}
        {!isLoading && <p>{word}</p>} */
  }

  const content = (
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
            onClick={showModalHandler}
          >
            <Star
              className={
                isSaved
                  ? `${classes.svg} ${classes[`${colorClass}`]}`
                  : `${classes.svg}`
              }
            />
          </button>
          {saveModalIsShown && (
            <SaveModal folders={folders} onClose={hideModalHandler} />
          )}
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

  return (
    <div className={classes["search-result"]}>
      {error.length !== 0 && <p className={classes.error}>{error}</p>}
      {isLoading && error.length === 0 && (
        <div className={classes.spinner}></div>
      )}
      {!isLoading && error.length === 0 && content}
    </div>
  );
};

export default SearchResult;
