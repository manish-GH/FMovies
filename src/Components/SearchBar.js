import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { useKeyword } from "../context/KeywordProvider";

export const SearchBar = () => {
  const { setKeyword } = useKeyword();
  let history = useHistory();
  const [search, setSearch] = useState("");

  console.log("search : ", search);

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(search);
    console.log("search inside: ", search);
    history.push("/search");
    setSearch("");
  };
  return (
    <div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          className="search-field"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter keywords here..."
        />
        <span>
          <button className="search-btn" type="submit">
            <SearchIcon />
          </button>
        </span>
      </form>
    </div>
  );
};
