import React, { useContext } from "react";

import UserInfosCard from "./UserInfosCard";
import ReposCard from "./ReposCard";

import { GithubContext } from "../context/GithubContext";

export default function DataReturnedField() {
  const { repos } = useContext(GithubContext);
  
  function comparer(a, b){
    if (a.created_at < b.created_at){
      return 1
    }
    if (a.created_at > b.created_at){
      return -1
    }

    return 0
  }

  return (
    <>
      <UserInfosCard />
      <div id="repos-card" className="cards inner-row">
        {repos.sort(comparer).map((repo) => {
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

          
        })}
      </div>
    </>
  );
}
