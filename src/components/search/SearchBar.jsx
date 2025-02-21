import React from "react";
import { SearchContainer } from "./SearchBar-styles";
import { BiSearch } from "react-icons/bi";

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <SearchContainer className="search-bar">
      <BiSearch className="icon" />

      <input
        type="text"
        placeholder="¿Qué Necesitas?"
        color="black"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      />
    </SearchContainer>
  );
};
