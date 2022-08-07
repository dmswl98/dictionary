import { searchActions } from "./search-slice";

export const fetchWordData = (word) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      if (!res.ok) {
        throw new Error("해당 단어를 찾을 수 없습니다.");
      }
      const data = await res.json();
      return data[0];
    };

    try {
      dispatch(searchActions.loadData(true));
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

      console.log({
        id,
        word: wordData.word,
        meanings,
        phonetics,
      });
      dispatch(
        searchActions.replaceWord({
          id,
          word: wordData.word,
          meanings,
          phonetics,
        })
      );
      dispatch(searchActions.loadData(false));
    } catch (err) {
      console.error(err);
      dispatch(searchActions.occurError(err.message));
      dispatch(searchActions.loadData(false));
    }
  };
};
