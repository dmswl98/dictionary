import AntonymList from "./AntonymList";
import SynonymList from "./SynonymList";
import classes from "./RelationWord.module.css";

const RelationWord = ({ antonyms, synonyms }) => {
  return (
    <div className={classes["relation-words"]}>
      {antonyms.length !== 0 && <AntonymList antonyms={antonyms} />}
      {synonyms.length !== 0 && <SynonymList synonyms={synonyms} />}
    </div>
  );
};

export default RelationWord;
