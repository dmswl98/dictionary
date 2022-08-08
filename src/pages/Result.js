import React from "react";
import { useParams } from "react-router-dom";
import Search from "../components/Word/Search";
import ResultDetail from "../components/Word/ResultDetail";

const Result = () => {
  const params = useParams();
  console.log(params);

  return (
    <React.Fragment>
      <Search />
      <ResultDetail />
    </React.Fragment>
  );
};

export default Result;
