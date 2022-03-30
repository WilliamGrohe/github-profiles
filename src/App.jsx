import React from "react";

import { GithubContextProvider } from "./context/GithubContext";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import DataReturnedField from "./components/DataReturnedField";

function App() {
  return (
    <div className="App">
      <GithubContextProvider>
        <Header />
        <SearchBar />
        <DataReturnedField />
      </GithubContextProvider>
    </div>
  );
}

export default App;
