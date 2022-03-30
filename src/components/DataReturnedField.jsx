import React from "react";

import UserInfosCard from "./UserInfosCard";
import ReposCard from "./ReposCard";

export default function DataReturnedField() {
  return (
    <>
      <UserInfosCard />
      <div className="cards inner-row">
        
        <ReposCard />
        <ReposCard />
        <ReposCard />
        <ReposCard />
      </div>
    </>
  );
}
