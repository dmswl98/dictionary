import PronounceItem from "./PronounceItem";
import classes from "./PronounceList.module.css";

const PronounceList = ({ phonetics }) => {
  return (
    <div className={classes.pronounces}>
      <ul className={classes["pronounce-list"]}>
        {phonetics.map((phon, i) => (
          <PronounceItem key={i} phon={phon} />
        ))}
      </ul>
    </div>
  );
};

export default PronounceList;
