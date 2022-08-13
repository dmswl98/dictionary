import { resultActions } from "./result-slice";

export const fetchWordData = (word) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      if (!res.ok) {
        throw new Error("Not found. Try again");
      }
      const data = await res.json();
      return data[0];
    };

    try {
      dispatch(resultActions.changeErrorMessage(""));
      dispatch(resultActions.loadData(true));
      const wordData = await fetchData();
      console.log(wordData);
      const id = wordData.license.name.replace(/ /gi, "");
      const meanings = wordData.meanings.map((word) => {
        return {
          partOfSpeech: word.partOfSpeech.toUpperCase(),
          antonyms: word.antonyms,
          definitions: word.definitions.map((def) => {
            return {
              definition: def.definition,
              example: def.example,
            };
          }),
          synonyms: word.synonyms,
        };
      });
      const phonetics = wordData.phonetics
        .map((pho) => pho.text)
        .filter((it) => it);

      // console.log({
      //   id,
      //   word: wordData.word,
      //   meanings,
      //   phonetics,
      // });
      dispatch(
        resultActions.replaceWord({
          id,
          word: wordData.word,
          meanings,
          phonetics,
        })
      );
      dispatch(resultActions.loadData(false));
      dispatch(resultActions.changeErrorMessage(""));
    } catch (err) {
      console.error(err);
      dispatch(resultActions.changeErrorMessage(err.message));
      dispatch(resultActions.loadData(false));
    }
  };
};
