import { useSearchStore } from "@/domains/stores/zustand/search";
import useSearch from "@/hooks/useSearch";
import { SearchIcon } from "lucide-react";
import React, { useEffect, InputHTMLAttributes, useCallback } from "react";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {}

const Search: React.FC<SearchProps> = ({ ...restProps }) => {
  const { search, debounce, setSearch } = useSearch();
  const { setSearch: setSearchStore } = useSearchStore();

  useEffect(() => {
    if (debounce !== undefined) {
      setSearch(debounce);
      setSearchStore(debounce); // Cập nhật search store khi debounce thay đổi
    }
  }, [debounce, setSearch, setSearchStore]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  return (
    <div className="flex items-center border rounded-md border-input hover:shadow-md hover:border-accent focus-within:ring-2 focus-within:ring-accent">
      <button
        type="button"
        className="flex items-center px-3 py-2 text-muted-foreground hover:text-accent"
        aria-label="Search"
      >
        <SearchIcon className="size-6" />
      </button>
      <input
        className="flex-1 px-3 py-2 border border-transparent bg-background hover:border-background focus:border-background focus:ring-0 focus:outline-none"
        value={search || ""}
        onChange={handleChange}
        {...restProps}
        aria-describedby="search-helper"
      />
    </div>
  );
};

export default Search;
