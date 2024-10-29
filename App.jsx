import Header from "./componentes/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
