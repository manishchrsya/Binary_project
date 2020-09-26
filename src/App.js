import React from "react";
import "./App.css";
import ContentBody from "./Components/ContentBody/ContentBody";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ display: "flex" }} className="body">
        <SideBar />
        <ContentBody />
      </div>
    </div>
  );
}

export default App;
