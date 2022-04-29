import { createContext, useState } from "react";

export const ThemeContext = createContext({})

export function ThemeContextProvider(props) {

  const [theme, setTheme] = useState(true)

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}