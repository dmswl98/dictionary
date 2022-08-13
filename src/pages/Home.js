import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Outlet,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import SearchForm from "../components/Word/SearchForm";
import { fetchWordData } from "../store/result-actions";
import { searchActions } from "../store/search-slice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchWord = useSelector((state) => state.search.word);

  useEffect(() => {
    if (searchWord.trim().length !== 0) {
      dispatch(fetchWordData(searchWord));
      navigate(`/${searchWord}`);
      // dispatch(searchActions.resetWord());
    }
  }, [searchWord, navigate]);

  return (
    <Layout>
      <SearchForm />
    </Layout>
  );
};

export default Home;
