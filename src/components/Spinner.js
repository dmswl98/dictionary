import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={classes["spinner-overlay"]}>
      <div className={classes["spinner-container"]} />
    </div>
  );
};

export default Spinner;
