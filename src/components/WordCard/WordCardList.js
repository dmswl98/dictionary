import classes from "./WordCardList.module.css";

const sortList = (list, sortType = "default") => {
  if (sortType === "default") return list;
  else if (sortType === "asc") return list.sort((a, b) => a.localeCompare(b));
  else if (sortType === "desc") return list.sort((a, b) => b.localeCompare(a));
  else return list;
};

const WordCardList = ({ items, sort }) => {
  const wordList = [...items];
  const sortedList = sortList(wordList, sort);

  return (
    <div>
      <ul className={classes["word-list"]}>
        {sortedList.map((item, i) => (
          <li className={classes["word-item"]} key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordCardList;
