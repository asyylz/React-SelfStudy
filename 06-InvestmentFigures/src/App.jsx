import "./App.css";
import "./index.css";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import React, { useState } from "react";

function App() {
  // Initialize figures state
  const [figures, setFigures] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(inputIdentifier, newValue) {
    setFigures((prevFigures) => {
      return {
        ...prevFigures,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput
        onChange={handleInputChange}
        figures={figures}
        setFigures={setFigures}
      />
      <Results figures={figures} />
    </>
  );
}

export default App;
