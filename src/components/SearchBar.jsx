import React from "react";

import '../styles/searchbar.css'

export default function SearchBar() {
  return (
    <>
    <div class="input-group ">
      <input type="text" class="form-control" placeholder="Insert Github username" aria-label="Github username" aria-describedby="button-addon2" />
      <button class="btn btn-search" type="button" id="button-addon2">Button</button>
    </div>
    </>
  );
}
