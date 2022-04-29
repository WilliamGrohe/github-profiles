import React, { useContext } from "react";

import UserInfosCard from "./UserInfosCard";
import ReposCard from "./ReposCard";

import { GithubContext } from "../context/GithubContext";

import sadOctocatImg from "../assets/images/sad-octocat.png";

export default function DataReturnedField() {
  const { repos } = useContext(GithubContext);

  function comparer(repoA, repoB) {
    if (repoA.created_at < repoB.created_at) {
      return 1;
    }
    if (repoA.created_at > repoB.created_at) {
      return -1;
    }

    return 0;
  }

  if (repos.message === "Not Found") {
    return (
      <div className="user-not-found">
        <img src={sadOctocatImg} alt="Octocat Github Sad" />
        <h1>Usuário não encontrado :(</h1>
      </div>
    );
  }

  return (
    <>
      <UserInfosCard />
      <div id="repos-card" className="cards inner-row">
        {repos.sort(comparer).map((repo, index) => {
          if (index > 3) {
            return <></>;
          } else {
            return (
              <ReposCard
                key={repo.id}
                name={repo.name}
                created_at={repo.created_at}
                stars={repo.stargazers_count}
                forks={repo.forks}
                url={repo.html_url}
              />
            );
          }
        })}
      </div>
    </>
  );
}
