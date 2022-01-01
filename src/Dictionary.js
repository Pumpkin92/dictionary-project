import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [searchResult, setSearchResult] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${searchResult}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchResult}`;
    axios.get(apiUrl).then(handleResponse);
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
