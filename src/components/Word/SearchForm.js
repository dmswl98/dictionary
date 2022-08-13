import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Search from "../../assets/images/svg-search";
import { searchActions } from "../../store/search-slice";
import classes from "./SearchForm.module.css";

const SearchForm = (props) => {
  const dispatch = useDispatch();
  const wordInputRef = useRef("");
  const [isActive, setIsActive] = useState(false);

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

    // props.onAdd(enteredWord);
    dispatch(searchActions.searchWord(enteredWord));
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
    </form>
  );
};

export default React.memo(SearchForm);
