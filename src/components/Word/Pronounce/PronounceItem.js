import classes from "./PronounceItem.module.css";

const PronounceItem = ({ phon }) => {
  return <li className={classes["pronounce-item"]}>{phon}</li>;
};

export default PronounceItem;
