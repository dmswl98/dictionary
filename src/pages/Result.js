import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import SearchForm from "../components/Word/SearchForm";
import SearchResult from "../components/Word/SearchResult";
import { fetchWordData } from "../store/result-actions";
import { searchActions } from "../store/search-slice";

const Result = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { word } = useParams();
  const searchWord = useSelector((state) => state.search.word);

  useEffect(() => {
    console.log("word: ", word, "/ searchWord: ", searchWord);
    // if (searchWord.length !== 0 && word !== searchWord) {
    //   dispatch(searchActions.resetWord());
    // }

    if (word !== searchWord) {
      console.log("search", searchWord);
      console.log("(1) word !== searchWord");
      dispatch(fetchWordData(searchWord));
      navigate(`/${searchWord}`);
      // dispatch(searchActions.resetWord());
    } else {
      console.log("(2) word === searchWord");
      // dispatch(searchActions.resetWord());
    }
  }, [navigate, dispatch, word, searchWord]);

  return (
    <Layout>
      <SearchForm />
      <SearchResult />
    </Layout>
  );
};

export default Result;
