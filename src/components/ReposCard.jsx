import React from "react";

import "../styles/repocard.css";

import RepoIcon from "../assets/images/repos.png";
import StarIcon from "../assets/images/star.png";
import ForkIcon from "../assets/images/fork.png";

export default function ReposCard() {
  return (
    <div className="container card">
      <div className="row">
        <a href="#">
          <img src={RepoIcon} alt="Icone de repositório" /> Repo Name
        </a>
      </div>
      <div className="row">
        <span>
        Created at:
        </span>
        </div>
      <div className="row">
        <span>
        <img
          src={StarIcon}
          className="githubIcons"
          alt="Icone de repositório"
          />
        : 2 
        <img
          src={ForkIcon}
          className="githubIcons"
          alt="Icone de repositório"
          />
        : 5          
        </span>
      </div>
    </div>
  );
}
