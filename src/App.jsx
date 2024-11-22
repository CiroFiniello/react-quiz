import { useEffect, useReducer, useState } from "react";
import Header from "./Header.jsx";
import Mainn from "./Mainn.jsx";
import "./App.css";
const initialState = {
  questions: [],

  //loading, error,  ready , active , finished
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("Action unkonwn");
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
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
