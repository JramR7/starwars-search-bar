import { useMemo } from "react";
import { Character } from "../../api/types";
import "./styles.css";

type SearchListProps = {
  characterList: Character[];
  handleCharacterPressed: (characterName: string) => void;
};

type NameItemProps = {
  name: string;
  handleNamePressed: (name: string) => void;
};

const NameItem = ({ name, handleNamePressed }: NameItemProps) => {
  return (
    <div className="NameItem" onClick={() => handleNamePressed(name)}>
      {name}
    </div>
  );
};

const SearchList = ({
  characterList,
  handleCharacterPressed,
}: SearchListProps) => {
  const renderNamesList = useMemo(() => {
    return characterList?.map((character, index) => (
      <NameItem
        key={`name-${index}`}
        name={character.name}
        handleNamePressed={handleCharacterPressed}
      ></NameItem>
    ));
  }, [characterList, handleCharacterPressed]);

  return <div className="Container">{renderNamesList}</div>;
};

export default SearchList;
