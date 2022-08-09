import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchWordData } from "../../store/result-actions";
import SearchForm from "./SearchForm";

const Search = ({ word }) => {
  const searchWord = useSelector((state) => state.search.word);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Search rendering!!!!!!");
    if (searchWord !== "" || word) {
      const data = searchWord || word;
      dispatch(fetchWordData(data));
      navigate(`/${data}`);
    }
  }, [searchWord, word, dispatch, navigate]);

  return <SearchForm />;
};

export default React.memo(Search);
