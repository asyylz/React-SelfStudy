import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [advice, setAdvice] = useState();

  const fetchAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const { advice } = response.data.slip;
      console.log("Data fetched:", advice);
      return advice;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  const handleButtonClick = async () => {
    try {
      const newAdvice = await fetchAdvice();
      setAdvice(newAdvice);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={handleButtonClick}>
          <span>Give me advice!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
