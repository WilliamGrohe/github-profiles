import React, { useContext } from "react";

import "../styles/userinfoscard.css";

import PerfilAvatar from "../assets/images/perfil.jpg";

import { GithubContext } from "../context/GithubContext";
import { ThemeContext } from "../context/ThemeContext";

export default function UserInfosCard() {
  const { user } = useContext(GithubContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-avatar">
          <img
            src={user.avatar_url ? user.avatar_url : PerfilAvatar}
            className="avatar-image"
            alt="Foto de perfil do usuário"
          />
        </div>
        <div className="col-sm">
          <div className="inner-row">
            <h4>{user.name ? user.name : "Name: Not Defined"}</h4>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className={`non-btn ${theme ? "dark" : ""}`}
            >
              Visit Github Profile
            </a>
          </div>
          <div className="row">
            <div className="inner-row">
              {user.location ? user.location : "Location: Not Defined"}
            </div>
          </div>
          <div className="row">
            <div className="inner-row">
              <span className={`non-btn ${theme ? "dark" : ""}`}>
                Followers: {user.followers}
              </span>
              <span className={`non-btn ${theme ? "dark" : ""}`}>
                Following: {user.following}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="inner-row">
              <span className={`non-btn ${theme ? "dark" : ""}`}>
                Repositories: {user.public_repos}
              </span>
              <span className={`non-btn ${theme ? "dark" : ""}`}>
                Public Gist: {user.public_gists}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
