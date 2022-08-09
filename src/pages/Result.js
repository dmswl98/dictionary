import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Search from "../components/Word/Search";

const Result = () => {
  const { word } = useParams();
  console.log(word);

  return (
    <Layout>
      <Search word={word} />
      <Outlet />
    </Layout>
  );
};

export default Result;
