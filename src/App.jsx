import { useEffect, useReducer, useState } from "react";
import Header from "./Header.jsx";
import Mainn from "./Mainn.jsx";
import Loader from "./Loader.jsx";
import Error from "./Error.jsx";
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
  const [{ question, status }, dispatch] = useReducer(reducer, initialState);
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
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
      </Mainn>
    </div>
  );
}

export default App;
