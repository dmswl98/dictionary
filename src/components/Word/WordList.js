import classes from "./WordList.module.css";

const WordList = ({ items }) => {
  return (
    <div>
      <ul className={classes["word-list"]}>
        {items.map((item, i) => (
          <li className={classes["word-item"]} key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;
