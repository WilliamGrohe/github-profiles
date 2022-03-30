import { createContext, useState } from "react";

const APIURL = 'http://api.github.com/users/'

export const GithubContext = createContext({})

export function GithubContextProvider(props) {
  const [user, setUser] = useState([])
  const [username, setUsername] = useState([])
  const [repo, setRepo] = useState([])

  async function getRepos() {
    const response = await fetch(`${APIURL}`);
      const data = await response.json()
  }
  
    async function newUser(){
      const response = await fetch(`${APIURL}`);
      const data = await response.json()
    }

  return(
    <GithubContext.Provider value={{user, setUsername}}>
      {props.children}
    </GithubContext.Provider>
  )

}
