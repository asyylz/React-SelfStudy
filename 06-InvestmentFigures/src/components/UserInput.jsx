import React, { useState } from "react";

export default function UserInput() {

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
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              value={figures.initialInvestment}
              onChange={(e) =>
                handleInputChange("initialInvestment", e.target.value)
              }
              required
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              value={figures.annualInvestment}
              onChange={(e) =>
                handleInputChange("annualInvestment", e.target.value)
              }
              required
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              value={figures.expectedReturn}
              onChange={(e) =>
                handleInputChange("expectedReturn", e.target.value)
              }
              required
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              value={figures.duration}
              onChange={(e) => handleInputChange("duration", e.target.value)}
              required
            />
          </p>
        </div>
      </section>
    </>
  );
}
