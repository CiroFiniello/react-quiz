import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Mainn from "./Mainn.jsx";
import "./App.css";

function App() {
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error"));
  }, []);
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
