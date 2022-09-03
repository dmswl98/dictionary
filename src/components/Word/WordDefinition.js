import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DefinitionList from "../../components/Word/Definition/DefinitionList";
import PronounceList from "./Pronounce/PronounceList";
import SaveModal from "../Modal/SaveModal";
import Spinner from "../Spinner";

import { bookActions } from "../../store/book-slice";
import { fetchWordData } from "../../store/result-actions";

import Star from "../../assets/images/svg-star";
import classes from "./WordDefinition.module.css";

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
    default:
      colorClass = "black";
      break;
  }
  return colorClass;
};

const WordDefinition = () => {
  const dispatch = useDispatch();
  const word = useSelector((state) => state.search.word);
  const resultData = useSelector((state) => state.result.resultData);
  const folders = useSelector((state) => state.book.folders);
  const isLoading = useSelector((state) => state.result.isLoading);
  const error = useSelector((state) => state.result.errorMessage);
  const [saveModalIsShown, setSaveModalIsShown] = useState(false);

  useEffect(() => {
    if (word) dispatch(fetchWordData(word));
  }, [word, dispatch]);

  const showModalHandler = () => {
    if (!isSaved) setSaveModalIsShown(true);
    else {
      const folderIndex = folders.findIndex(
        (folder) =>
          folder.items.filter((item) => item === resultData.word).length > 0
      );
      dispatch(
        bookActions.removeWordToFolder({
          index: folderIndex,
          word: resultData.word,
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
      .filter((word) => word === resultData.word).length !== 0;

  let colorClass = "";

  if (isSaved) {
    const colorIndex = folders.findIndex(
      (folder) =>
        folder.items.filter((item) => item === resultData.word).length > 0
    );
    colorClass = matchColor(folders[colorIndex].color);
  }

  const content = (
    <section className={classes.result}>
      <header className={classes["result-header"]}>
        <div className={classes["header-left"]}>
          <div className={classes.title}>
            <strong>{resultData.word}</strong>
          </div>
          <PronounceList phonetics={resultData.phonetics} />
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
            {resultData.meanings.map((meaning, i) => (
              <DefinitionList key={resultData.id + i} meaning={meaning} />
            ))}
          </ul>
        </div>
      </main>
    </section>
  );

  return (
    <div className={classes["search-result"]}>
      {error.length !== 0 && <p className={classes.error}>{error}</p>}
      {isLoading && error.length === 0 && <Spinner />}
      {!isLoading && error.length === 0 && content}
    </div>
  );
};

export default WordDefinition;
