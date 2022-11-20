export type Character = {
  name: string;
};

export type SearchResults = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
};
