import { useContext } from "react";
import Switch from "react-switch";

import "../styles/togglebutton.css";

import { ThemeContext } from "../context/ThemeContext";

export function ToggleButton() {
  const {theme, setTheme} = useContext(ThemeContext)

  function handleToggleTheme() {
    setTheme((prevState) => !prevState)
  }

  return <Switch onChange={handleToggleTheme} checked={theme} offColor="#ba113b" height={16} width={38}/>
}
