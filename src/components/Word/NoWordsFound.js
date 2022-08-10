import classes from "./NoWordsFound.module.css";

const NoWordsFound = (props) => {
  return (
    <div className={classes["not-found"]}>
      <h3 className={classes.title}>Not Found</h3>
      <p className={classes.detail}>
        Hit the button below to create your very first word list.
        <br />
        Start saving all your favorite words.
      </p>
      <button onClick={props.onShow}>Create a new list</button>
    </div>
  );
};

export default NoWordsFound;
