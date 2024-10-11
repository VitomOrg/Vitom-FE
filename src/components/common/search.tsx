import { useSearchStore } from "@/domains/stores/zustand/search";
import useSearch from "@/hooks/useSearch";
import { cn } from "@/lib";
import { SearchIcon } from "lucide-react";
import React, { useEffect, InputHTMLAttributes, useCallback } from "react";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Search: React.FC<SearchProps> = ({ ...restProps }) => {
  const { search, debounce, setSearch } = useSearch();
  const { setSearch: setSearchStore } = useSearchStore();
  const { className } = restProps;

  useEffect(() => {
    if (debounce !== undefined) {
      setSearch(debounce);
      setSearchStore(debounce);
    }
  }, [debounce, setSearch, setSearchStore]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  return (
    <div
      className={cn(
        "flex gap-2 w-full border rounded-sm p-2 items-center bg-secondary",
        className
      )}
    >
      <button
        type="button"
        aria-label="Search"
        className="transition-transform duration-200 "
      >
        <SearchIcon className="text-gray-400 size-5" />
      </button>
      <input
        value={search || ""}
        className="w-full focus:outline-none bg-secondary"
        onChange={handleChange}
        {...restProps}
        aria-describedby="search-helper"
      />
    </div>
  );
};

export default Search;
