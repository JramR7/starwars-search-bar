import { useState } from "react";
import { Character } from "../../api/types";
import SearchList from "../SearchList";
import { findAutocompleteResults } from "../../utils/autocompleteSearch";
import "./styles.css";
import SearchInput from "../SearchInput";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [foundCharacters, setFoundCharacters] = useState<Character[]>([]);

  const handleOnChange = async ({ target }: { target: HTMLInputElement }) => {
    setSearchQuery(target.value);
    setIsSearching(true);
    if (target.value !== "") {
      const foundCharacters = await findAutocompleteResults({
        searchQuery: target.value,
      });
      setFoundCharacters(foundCharacters);
    } else {
      setFoundCharacters([]);
    }
    setIsSearching(false);
  };

  const handleCharacterPressed = (characterName: string) => {
    setSearchQuery(characterName);
    setFoundCharacters([]);
  };

  return (
    <>
      <img src={require("../../icons/starWars.png")} alt={"StarWars logo"} />
      <SearchInput
        searchQuery={searchQuery}
        isSearching={isSearching}
        handleChange={handleOnChange}
      />
      {foundCharacters.length > 0 && (
        <SearchList
          characterList={foundCharacters}
          handleCharacterPressed={handleCharacterPressed}
        ></SearchList>
      )}
    </>
  );
};

export default SearchBar;
