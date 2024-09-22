import useSearch from "@/hooks/useSearch";
import { SearchIcon } from "lucide-react";
import React, { useEffect, InputHTMLAttributes } from "react";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  getValue: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ getValue, ...restProps }) => {
  const { search, debounce, setSearch } = useSearch();

  useEffect(() => {
    if (debounce !== undefined) {
      getValue(debounce);
    }
  }, [debounce, getValue]);

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
        onChange={(e) => setSearch(e.target.value)}
        {...restProps}
      />
    </div>
  );
};

export default Search;
