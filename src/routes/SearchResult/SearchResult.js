import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import WordDefinition from "../../components/Word/WordDefinition";

const SearchResult = () => {
  return (
    <React.Fragment>
      <SearchForm />
      <WordDefinition />
    </React.Fragment>
  );
};

export default SearchResult;
