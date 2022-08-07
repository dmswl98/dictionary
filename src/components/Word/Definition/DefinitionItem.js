const DefinitionItem = ({ definition, example }) => {
  return (
    <li>
      <div>
        <p>{definition}</p>
        <p>{example}</p>
      </div>
    </li>
  );
};

export default DefinitionItem;
