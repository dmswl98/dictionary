import DefinitionItem from "./DefinitionItem";

const DefinitionList = ({ meaning }) => {
  console.log("Defin", meaning);
  return (
    <li>
      <div>
        <p>{meaning.partOfSpeech}</p>
        <div>
          <ul>
            {meaning.definitions.map((def, i) => (
              <DefinitionItem
                key={i}
                definition={def.definition}
                example={def.example}
              />
            ))}
          </ul>
        </div>
        {meaning.antonyms.length !== 0 && <p>{meaning.antonyms[0]}</p>}
        {meaning.synonyms.length !== 0 && <p>{meaning.synonyms[0]}</p>}
      </div>
    </li>
  );
};

export default DefinitionList;
