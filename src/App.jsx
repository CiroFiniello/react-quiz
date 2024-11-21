import { useState } from "react";
import Header from "./Header.jsx";
import Mainn from "./Mainn.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <Mainn>
        <p>1/15</p>
        <p>Question?</p>
      </Mainn>
    </div>
  );
}

export default App;
