import React, { useContext } from "react";

import "../styles/userinfoscard.css";

import PerfilAvatar from "../assets/images/perfil.jpg";

import { GithubContext } from "../context/GithubContext"

export default function UserInfosCard() {

  const { user }  = useContext(GithubContext)

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
            <h4>{user.name ? user.name : 'Name: Not Defined'}</h4>
            <a href={user.html_url}  target="_blank" className="non-btn">Visit Github Profile</a>
          </div>
          <div className="row">
            <div className="inner-row">
              {user.location ? user.location : 'Location: Not Defined'}
            </div>
          </div>
          <div className="row">
            <div className="inner-row">
              <span className="non-btn">Followers: {user.followers}</span>
              <span className="non-btn">Following: {user.following}</span>
            </div>
          </div>
          <div className="row">
            <div className="inner-row">
              <span className="non-btn">Repositories: {user.public_repos}</span>
              <span className="non-btn">Public Gist: {user.public_gists}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
