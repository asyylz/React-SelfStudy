import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [advice, setAdvice] = useState(""); // State to store the fetched advice

  // Define fetchAdvice function inside the App component
  const fetchAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const { advice } = response.data.slip;
      console.log("Data fetched:", advice);
      setAdvice(advice); // Update the advice state with the fetched advice
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
  useEffect(() => {
    fetchAdvice();
  }, []); // Empty dependency array means it only runs once when component mounts

  const handleButtonClick = async () => {
    fetchAdvice(); // Call the fetchAdvice function when the button is clicked
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
