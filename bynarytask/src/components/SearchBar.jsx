/* eslint-disable react/prop-types */
import { Form } from "react-bootstrap";

const SearchBar = ({
  searchQuery,
  locationFilter,
  setSearchQuery,
  setLocationFilter,
}) => {
  return (
    <div className="search-bar">
      <Form.Control
        type="text"
        placeholder="filter by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Form.Control
        type="text"
        placeholder="filter by location"
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
