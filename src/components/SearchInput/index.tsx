import { useEffect, useRef } from "react";
import "./styles.css";

type SearchInputProps = {
  isSearching: boolean;
  searchQuery: string;
  handleChange: ({ target }: { target: HTMLInputElement }) => void;
};

const SearchInput = ({
  isSearching,
  searchQuery,
  handleChange,
}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>();

  // isSearching disables and enables the input when the search is completed, so there's no
  // race conditions in the search and setters
  useEffect(() => {
    if (!isSearching) {
      inputRef?.current?.focus();
    }
  }, [isSearching]);

  return (
    <div>
      <input
        ref={(input) => input && (inputRef.current = input)}
        className="SearchInput"
        type="text"
        placeholder="Search your StarWars character"
        name="searchBar"
        value={searchQuery}
        onChange={handleChange}
        disabled={isSearching}
      />
    </div>
  );
};

export default SearchInput;
