import "./App.css";
import app from "./index";
import React, { useState, useEffect } from "react";
import Pages from "./Config/Pages";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Pages />
    </div>
  );
}

export default App;
