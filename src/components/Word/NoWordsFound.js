import classes from "./NoWordsFound.module.css";

const NoWordsFound = () => {
  return (
    <div className={classes["not-found"]}>
      <h3 className={classes.title}>Not Found</h3>
      <p className={classes.detail}>
        Hit the button below to create your very first word list.
        <br />
        Start saving all your favorite words.
      </p>
    </div>
  );
};

export default NoWordsFound;
