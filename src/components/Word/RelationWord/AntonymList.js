import classes from "./AntonymList.module.css";

const AntonymList = ({ antonyms }) => {
  return (
    <div className={classes.antonyms}>
      <div className={classes.title}>
        <strong>antonyms</strong>
      </div>
      <ul className={classes["antonym-list"]}>
        {antonyms.map((antonym, i) => (
          <li className={classes["antonym-item"]} key={i}>
            {antonym}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AntonymList;
