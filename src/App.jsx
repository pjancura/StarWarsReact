import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header/Header.jsx";
import DataFetching from "./DataFetching.tsx";

function App() {
  return (
    <>
      <Header />
      <DataFetching />
    </>
  );
}

export default App;
