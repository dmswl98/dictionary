import RelationWord from "../RelationWord/RelationWord";
import DefinitionItem from "./DefinitionItem";
import classes from "./DefinitionList.module.css";

const DefinitionList = ({ meaning }) => {
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
          {(meaning.antonyms.length !== 0 || meaning.synonyms.length !== 0) && (
            <RelationWord
              antonyms={meaning.antonyms}
              synonyms={meaning.synonyms}
            />
          )}
        </div>
      </div>
    </li>
  );
};

export default DefinitionList;
