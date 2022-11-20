import fetchBaseQuery, { HttpMethods } from "../api/fetchBaseQuery";
import { SearchResults } from "../api/types";

type FindMatchingCharactersProps = {
  searchQuery: string;
};

export const findAutocompleteResults = async ({
  searchQuery,
}: FindMatchingCharactersProps) => {
  const searchResults = (await fetchBaseQuery({
    endpoint: `people/?search=${searchQuery}`,
    httpMethod: HttpMethods.GET,
  })) as SearchResults;

  const initialMatchingCharactersRegex = new RegExp(`^${searchQuery}`, "i");
  const autocompleteResults = searchResults?.results?.filter((character) =>
    character?.name.match(initialMatchingCharactersRegex)
  );

  return autocompleteResults;
};
