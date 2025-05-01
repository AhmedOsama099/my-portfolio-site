export interface LiteratureContent {
  title: string;
  content: string;
  date: string;
}

export interface LiteratureListProps {
  filteredContent: LiteratureContent[];
  handleClearSearch: () => void;
}

export interface LiteratureItemProps {
  piece: LiteratureContent;
}

export interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredCount: number;
  debouncedSearchTerm: string;
}
