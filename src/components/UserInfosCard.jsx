import React from "react";

import "../styles/userinfoscard.css";

import PerfilAvatar from "../assets/images/perfil.jpg";

export default function UserInfosCard() {
  return (
    <div className="container">
      <div class="row">
        <div className="col-avatar">
          <img
            src={PerfilAvatar}
            className="avatar-image"
            alt="Foto de perfil do usuário"
          />
        </div>
        <div class="col-sm">
          <div className="inner-row">
            <span>Name Lastname</span>
            <button className="btn btn-primary">Visit Github Profile</button>
          </div>
          <div className="row">
            <div className="inner-row">
              Location: 
            </div>
          </div>
          <div className="row">
            <div className="inner-row">
              <span className="non-btn">Followers: </span>
              <span className="non-btn">Following: </span>
            </div>
          </div>
          <div className="row">
            <div className="inner-row">
              <span className="non-btn">Repositories: </span>
              <span className="non-btn">Public Gist:</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
