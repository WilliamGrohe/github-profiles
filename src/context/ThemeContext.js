import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export function ThemeContextProvider(props) {
  const saveTheme = localStorage.getItem("darkTheme") === "true";

  const [theme, setTheme] = useState(saveTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
