import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Definition from "./Definition";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [searchResult, setSearchResult] = useState(props.defaultWord);
  let [definition, setDefinition] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleDefinitionResponse(response) {
    setDefinition(response.data[0]);
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchResult}`;
    axios.get(apiUrl).then(handleDefinitionResponse);

    let pexelApiKey =
      "563492ad6f917000010000010d614906c92a4872b284a07aeee0c7d4";
    let headers = { Authorization: `Bearer ${pexelApiKey}` };
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${searchResult}&per_page=9`;
    axios.get(pexelApiUrl, { headers: headers }).then(handlePhotoResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
