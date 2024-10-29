import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";

import { useOutletContext } from "react-router-dom";
import { useWindowSize } from "./hooks/useWindowSize";
import { useTheme } from "./hooks/useTheme";

const Home = () => {
  const [query, setQuery] = useState("");
  //const [isDark] = useOutletContext(); //it will return array send by context property of Outlet tag.
  // console.log(isDark);
  //const [isDark] = useContext(ThemeContext);
  const [isDark] = useTheme();
  const winSize = useWindowSize();
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      {/* unmount the component forcefully for testing */}
      {/* {query === "unmount" ? "" : <CountriesList query={query} />} */}
      <h1 style={{ textAlign: "center" }}>
        {winSize.width} x{winSize.height}
      </h1>

      <CountriesList query={query} />
    </main>
  );
};

export default Home;
