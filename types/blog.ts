export interface LiteratureContent {
  title: string;
  content: string | undefined;
  date: string;
  isShow: boolean;
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
