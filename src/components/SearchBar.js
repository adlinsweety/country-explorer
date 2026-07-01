function SearchBar({
  search,
  setSearch,
  filterType,
  setFilterType,
}) {
  return (
    <div className="search-section">

      <input
        type="text"
        placeholder="Search Country..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <select
        value={filterType}
        onChange={(e) =>
          setFilterType(e.target.value)
        }
      >
        <option value="name">
          Country Name
        </option>

        <option value="capital">
          Capital
        </option>

        <option value="code">
          Country Code
        </option>
      </select>

    </div>
  );
}

export default SearchBar;