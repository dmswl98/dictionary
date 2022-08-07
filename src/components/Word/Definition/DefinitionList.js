import RelationWord from "../RelationWord/RelationWord";
import DefinitionItem from "./DefinitionItem";
import classes from "./DefinitionList.module.css";

const DefinitionList = ({ meaning }) => {
  console.log("Defin", meaning);
  return (
    <li className={classes["meaning-item"]}>
      <div className={classes.definitions}>
        <p className={classes["part-speech"]}>{meaning.partOfSpeech}</p>
        <div className={classes["part-speech-content"]}>
          <ol className={classes["definition-list"]}>
            {meaning.definitions.map((def, i) => (
              <DefinitionItem
                key={i}
                order={i + 1}
                definition={def.definition}
                example={def.example}
              />
            ))}
          </ol>
          <div className={classes["relation-words"]}>
            {meaning.antonyms.length !== 0 && (
              <div className={classes.antonyms}>
                <div className={classes.title}>
                  <strong>antonyms</strong>
                </div>
                <ul className={classes["antonym-list"]}>
                  {meaning.antonyms.map((antonym, i) => (
                    <li className={classes["antonym-item"]} key={i}>
                      {antonym}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {meaning.synonyms.length !== 0 && (
              <div className={classes.synonyms}>
                <div className={classes.title}>
                  <strong>synonyms</strong>
                </div>
                <ul className={classes["synonym-list"]}>
                  {meaning.synonyms.map((synonym, i) => (
                    <li className={classes["synonym-item"]} key={i}>
                      {synonym}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default DefinitionList;
