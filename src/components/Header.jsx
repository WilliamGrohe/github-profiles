import React from "react";
import "../styles/navbar.css";

import GithubIcon from "../assets/images/github.svg";

export default function Header() {
  return (
    <nav className="navbar navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={GithubIcon} alt="Icone do github" />
          Github Profiles Finder
        </a>
      </div>
    </nav>
  );
}
