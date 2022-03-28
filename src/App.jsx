import React from "react";

import Header  from "./components/Header";
import SearchBar from "./components/SearchBar";
import DataReturnedField from "./components/DataReturnedField";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <DataReturnedField />
    </div>
  );
}

export default App;
