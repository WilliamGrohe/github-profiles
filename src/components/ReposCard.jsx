import React, { useContext } from "react";

import "../styles/repocard.css";

import { ThemeContext } from "../context/ThemeContext";

import RepoIcon from "../assets/images/repos.png";
import StarIcon from "../assets/images/star.png";
import ForkIcon from "../assets/images/fork.png";

export default function ReposCard({ name, created_at, stars, forks, url }) {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`container ${theme? 'dark' : ''} card`}>
      <div className="row">
        <a href={url} target="_blank" rel="noreferrer">
          <img src={RepoIcon} alt="Icone de repositório" /> {name}
        </a>
      </div>
      <div className="row">
        <span>Created at: {created_at}</span>
      </div>
      <div className="row">
        <span>
          <img
            src={StarIcon}
            className="githubIcons"
            alt="Icone de repositório"
          />
          : {stars}
          <img
            src={ForkIcon}
            className="githubIcons"
            alt="Icone de repositório"
          />
          : {forks}
        </span>
      </div>
    </div>

  );
}
