import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { searchActions } from "../../store/search-slice";

import Search from "../../assets/images/svg-search";
import classes from "./SearchForm.module.css";

const SearchForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [enteredSearchWord, setEnteredSearchWord] = useState("");

  const searchWordChangeHandler = (e) => {
    setEnteredSearchWord(e.target.value);
  };

  const wordInputFocusHandler = () => {
    setIsActive(true);
  };

  const wordInputBlurHandler = () => {
    setIsActive(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const word = enteredSearchWord;
    if (word.trim().length === 0) return;

    dispatch(searchActions.searchWord(word));
    setEnteredSearchWord("");

    navigate(`/search/${word}`);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-wrapper"]}>
        <label className="visually-hidden">search</label>
        <input
          value={enteredSearchWord}
          placeholder="Search for any word or phrase"
          className={classes.input}
          onChange={searchWordChangeHandler}
          onFocus={wordInputFocusHandler}
          onBlur={wordInputBlurHandler}
          type="text"
        />
        <button className={classes.button} type="submit">
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
