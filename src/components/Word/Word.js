import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWordData } from "../../store/search-actions";
import WordForm from "./WordForm";
import DefinitionList from "./Definition/DefinitionList";
import classes from "./Word.module.css";

let flag = false;

const Word = () => {
  const wordData = useSelector((state) => state.result);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  const [word, setWord] = useState(null);

  useEffect(() => {
    if (word) {
      flag = true;
    }
    if (!flag) return;
    dispatch(fetchWordData(word));
  }, [word, dispatch]);

  const updateSearchWord = (text) => {
    setWord(text.toLowerCase());
  };
  {
    /* {isLoading && <p>loading...</p>}
        {!isLoading && <p>{word}</p>} */
  }

  return (
    <div>
      <WordForm onAdd={updateSearchWord} />
      <section className={classes.result}>
        <header className={classes["result-header"]}>
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
    </div>
  );
};

export default Word;
