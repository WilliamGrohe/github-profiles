import React, { useContext } from "react";
import "../styles/navbar.css";

import GithubIcon from "../assets/images/github.svg";
import { ToggleButton } from "./ToggleButton";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
const {theme} = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme? 'dark' : ''} navbar-dark`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={GithubIcon} alt="Icone do github" />
          Github Profiles Finder
        </a>
        <ToggleButton />
      </div>
    </nav>
  );
}
