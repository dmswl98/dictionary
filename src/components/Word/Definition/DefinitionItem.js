import classes from "./DefinitionItem.module.css";

const DefinitionItem = ({ order, definition, example }) => {
  return (
    <li className={classes["definition-item"]}>
      <div className={classes["definition-content"]}>
        <span className={classes.order}>{order}</span>
        <div>
          <p className={classes.definition}>{definition}</p>
          {example && <p className={classes.example}>{example}</p>}
        </div>
      </div>
    </li>
  );
};

export default DefinitionItem;
