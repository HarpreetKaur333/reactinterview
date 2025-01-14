import { useEffect, useState } from "react";

function SearchFilter() {
  const items = ["Apple", "Banana", "Cherry", "Date", "Grapes"];

  const [search, setSearch] = useState("");

  const filteredSearch = items.filter((item) =>
    item.toLocaleLowerCase().includes(search.toLowerCase())
  );


//   9. Debounced Search
  
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(handler);
  }, [query]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search for item..."
      />

      <ul>
        {filteredSearch.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <p>Search Query: {debouncedQuery}</p>
      </div>
    </>
  );
}

export default SearchFilter;
