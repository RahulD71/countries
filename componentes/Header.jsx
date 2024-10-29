import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useTheme } from "./hooks/useTheme";

const Header = () => {
  //const [isDark, setIsDark] = theme;
  // const [isDark, setIsDark] = useContext(ThemeContext);
  const [isDark, setIsDark] = useTheme();

  // if (isDark) {
  //   document.body.classList.add("dark");
  // } else {
  //   document.body.classList.remove("dark");
  // }
  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the worlds?</a>
        </h2>

        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
          &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
};

export default Header;
