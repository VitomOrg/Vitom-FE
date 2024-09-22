import { useDebounce } from "@/hooks/useDebounce";
import { useState } from "react";

const useSearch = () => {
  const [search, setSearch] = useState<string>();

  const debounce = useDebounce(search, 400);

  return {
    debounce,
    setSearch,
    search,
  };
};

export default useSearch;
