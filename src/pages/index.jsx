import React, { useContext } from "react";

import "../styles/index.css";

import { GithubContextProvider } from "../context/GithubContext";
import { ThemeContext } from "../context/ThemeContext";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import DataReturnedField from "../components/DataReturnedField";

export default function Index(themes) {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme ? "dark" : ""}>
      <GithubContextProvider>
        <Header />
        <SearchBar />
        <DataReturnedField />
      </GithubContextProvider>
    </main>
  );
}
