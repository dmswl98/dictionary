import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWordData } from "../../store/search-actions";
import WordForm from "./WordForm";
import DefinitionList from "./Definition/DefinitionList";
// import classes from "./Word.module.css";

let flag = false;

const Word = () => {
  const wordData = useSelector((state) => state.result);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  const [word, setWord] = useState(null);

  useEffect(() => {
    if (word) {
      flag = true;
    }
    if (!flag) return;
    dispatch(fetchWordData(word));
  }, [word, dispatch]);

  // const getDefinitions = useCallback(async () => {
  //   const res = await fetch(
  //     `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  //   );
  //   const data = await res.json();
  //   console.log(data[0]);
  //   const wordData = await data[0];

  //   const meaning = wordData.meanings.map((word) => {
  //     return {
  //       antonyms: word.antonyms,
  //       definitions: word.definitions,
  //       synonyms: word.synonyms,
  //     };
  //   });

  //   // let idx = wordData.phonetics.findIndex((pho) => pho.text);

  //   console.log({
  //     word: wordData.word,
  //     meaning,
  //     phonetics: wordData.phonetics.map((pho) => {
  //       if (pho.text) return pho.text;
  //     }),
  //   });
  // }, [word]);

  const updateSearchWord = (text) => {
    setWord(text.toLowerCase());
  };
  {
    /* {isLoading && <p>loading...</p>}
        {!isLoading && <p>{word}</p>} */
  }

  return (
    <div>
      <WordForm onAdd={updateSearchWord} />
      <section>
        <header>
          <div>
            <h1>{wordData.word}</h1>
          </div>
          <div>
            <ul>
              {wordData.phonetics.map((pho, i) => (
                <li key={i}>{pho}</li>
              ))}
            </ul>
          </div>
        </header>
        <main>
          <div>
            <ul>
              {wordData.meanings.map((meaning, i) => (
                <DefinitionList key={wordData.id + i} meaning={meaning} />
              ))}
              {/* <li>
                  <div>
                    <p>antonyms(list)</p>
                    <p>synonyms(list)</p>
                    <p>partOfSpeech(string)</p>
                    <ul>
                      <li>
                        <div>
                          <p>definitions.definition</p>
                          <p>definitions.example</p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <p>definitions.definition</p>
                          <p>definitions.example</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div>
                    <p>antonyms(list)</p>
                    <p>synonyms(list)</p>
                    <p>partOfSpeech(string)</p>
                    <ul>
                      <li>
                        <div>
                          <p>definitions.definition</p>
                          <p>definitions.example</p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <p>definitions.definition</p>
                          <p>definitions.example</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li> */}
            </ul>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Word;
