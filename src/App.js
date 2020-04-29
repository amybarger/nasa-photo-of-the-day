import React from "react";
import NavBar from "./components/navBar"
import NasaPhoto from "./components/nasaPhoto"
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
      🚀 NASA API Funsies! 🚀
      </h1>
      <NavBar />
      <NasaPhoto />
    </div>
  );
}

export default App;
