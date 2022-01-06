import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Definition from "./Definition";

export default function Dictionary(props) {
  let [searchResult, setSearchResult] = useState(props.defaultWord);
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setDefinition(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchResult}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearchResult(event) {
    setSearchResult(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="container">
        <section>
          <h2 className="title">What word are you searching for?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleSearchResult}
              autoFocus={true}
              defaultValue={props.defaultWord}
            />
          </form>
        </section>

        <Definition definition={definition} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
