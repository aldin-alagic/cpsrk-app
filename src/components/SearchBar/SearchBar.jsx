import { SearchBarWrapper, SearchBarInput } from "./SearchBarStyles";

const SearchBar = ({ placeholder, disabled = false, onFilterChange }) => {
  return (
    <SearchBarWrapper>
      <SearchBarInput
        onChange={onFilterChange}
        placeholder={placeholder}
        type="text"
        name="event-search"
        disabled={disabled}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
