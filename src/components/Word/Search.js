import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchWordData } from "../../store/result-actions";
import SearchForm from "./SearchForm";

const Search = () => {
  const searchWord = useSelector((state) => state.search.word);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchWord !== "") {
      dispatch(fetchWordData(searchWord));
      navigator("/result");
    }
  }, [searchWord, dispatch, navigator]);

  return (
    <div>
      <SearchForm />
    </div>
  );
};

export default Search;
