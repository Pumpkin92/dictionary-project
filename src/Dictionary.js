import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchResult, setSearchResult] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`searching for ${searchResult}`);
  }

  function handleSearchResult(event) {
    setSearchResult(event.target.value);
  }
  return (
    <div>
      <form onSubmit={search}>
        <input type="search" onChange={handleSearchResult} autoFocus={true} />
      </form>
    </div>
  );
}
