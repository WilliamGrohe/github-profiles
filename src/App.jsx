import React, { useContext } from "react";

import Index from "./pages/index";

import { ThemeContextProvider } from "./context/ThemeContext";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App">
      <ThemeContextProvider>
        <Index themes={theme} />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
