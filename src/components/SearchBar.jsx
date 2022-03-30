import React, { useContext, useState } from "react";

import "../styles/searchbar.css";

import { GithubContext } from "../context/GithubContext"

export default function SearchBar() {
  const [inputName, setInputName] = useState("");

  const {setUsername} = useContext(GithubContext)

  function handleSubmitSearch(e) {
    e.preventDefault();
    
    if(!inputName){
      alert('Preencha o campo de busca.')
      return
    }

    setUsername(inputName);
  }

  return (
    <>
      <div className="input-group ">
        <input
          type="text"
          className="form-control"
          placeholder="Insert Github username"
          aria-label="Github username"
          aria-describedby="button-addon2"
          value={inputName}
          onChange={(v) => setInputName(v.target.value)}
        />
        <button
          className="btn btn-search"
          type="button"
          id="button-addon2"
          onClick={handleSubmitSearch}
        >
          Search
        </button>
      </div>
    </>
  );
}
