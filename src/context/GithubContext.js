import { createContext, useEffect, useState } from "react";

const APIURL = 'http://api.github.com/users/'

export const GithubContext = createContext({})

export function GithubContextProvider(props) {
  const [user, setUser] = useState([])
  const [username, setUsername] = useState('')
  const [repos, setRepos] = useState([])

  async function getRepos(username) {
    const response = await fetch(APIURL + username + "/repos");
      const data = await response.json()
      setRepos(data)
    }
    
    async function findUser(username){
      const response = await fetch(APIURL + username);
      const data = await response.json()
      setUser(data)
      console.log(data)
    }
    
    useEffect(() => {

      if(username === ''){
        return
      }
      
      getRepos(username)
      findUser(username)
      }, [username])
      
      // const ff = Object.entries(user)
      // console.log(ff)

  return(
    <GithubContext.Provider value={{user, repos, setUsername}}>
      {props.children}
    </GithubContext.Provider>
  )

}
