import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Definition from "./Definition";

export default function Dictionary() {
  let [searchResult, setSearchResult] = useState("");
  let [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setDefinition(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchResult}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearchResult(event) {
    setSearchResult(event.target.value);
  }
  return (
    <div>
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleSearchResult}
          autoFocus={true}
          placeholder="Search for a word.."
        />
      </form>
      <Definition definition={definition} />
    </div>
  );
}
