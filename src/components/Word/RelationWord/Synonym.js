import classes from "./Synonym.module.css";

const Synonym = ({ synonyms }) => {
  return (
    <div className={classes.synonyms}>
      <div className={classes.title}>
        <strong>synonyms</strong>
      </div>
      <ul className={classes["synonym-list"]}>
        {synonyms.map((synonym, i) => (
          <li className={classes["synonym-item"]} key={i}>
            {synonym}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Synonym;
