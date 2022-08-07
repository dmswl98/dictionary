import { useRef, useState } from "react";
import Search from "../../assets/images/Search";
import classes from "./WordForm.module.css";

const WordForm = (props) => {
  const wordInputRef = useRef("");
  const [isActive, setIsActive] = useState(false);
  console.log("wordForm");

  const wordInputFocusHandler = () => {
    setIsActive(true);
  };

  const wordInputBlurHandler = () => {
    setIsActive(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredWord = wordInputRef.current.value;
    if (enteredWord.trim().length === 0) return;

    props.onAdd(enteredWord);
    wordInputRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-wrapper"]}>
        <label className="visually-hidden">search</label>
        <input
          className={classes.input}
          ref={wordInputRef}
          onFocus={wordInputFocusHandler}
          onBlur={wordInputBlurHandler}
          type="text"
        />
        <button className={classes.button} type="button">
          <Search
            className={
              isActive
                ? `${classes.svg} ${classes["svg-active"]}`
                : `${classes.svg}`
            }
          />
        </button>
      </div>
      {/* <button className={classes.button}>Search</button> */}
    </form>
  );
};

export default WordForm;
