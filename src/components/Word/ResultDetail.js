import { useSelector } from "react-redux";
import DefinitionList from "./Definition/DefinitionList";
import classes from "./ResultDetail.module.css";

const ResultDetail = () => {
  const wordData = useSelector((state) => state.result.resultData);
  const isLoading = useSelector((state) => state.result.isLoading);
  {
    /* {isLoading && <p>loading...</p>}
        {!isLoading && <p>{word}</p>} */
  }
  return (
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
  );
};

export default ResultDetail;
