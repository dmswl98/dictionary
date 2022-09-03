import Antonym from "./Antonym";
import Synonym from "./Synonym";
import classes from "./RelationWord.module.css";

const RelationWord = ({ antonyms, synonyms }) => {
  return (
    <div className={classes["relation-words"]}>
      {antonyms.length !== 0 && <Antonym antonyms={antonyms} />}
      {synonyms.length !== 0 && <Synonym synonyms={synonyms} />}
    </div>
  );
};

export default RelationWord;
