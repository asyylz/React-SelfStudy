import React, { useState } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Input() {
  const [initialInvest, setInitialInvest] = useState("");
  const [annualInvest, setAnnualInvest] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  // Initialize figures state properly
  const [figures, setFigures] = useState({
    initialInvestment: initialInvest,
    annualInvestment: annualInvest,
    expectedReturn: expectedReturn,
    duration: duration,
  });
  console.log(figures);

  // Handle input changes
  const handleInputChange = (e, inputType) => {
    const value = e.target.value;
    switch (inputType) {
      case "initialInvestment":
        setInitialInvest(value);
        break;
      case "annualInvestment":
        setAnnualInvest(value);
        break;
      case "expectedReturn":
        setExpectedReturn(value);
        break;
      case "duration":
        setDuration(value);
        break;
      default:
        break;
    }
    setFigures((prevState) => ({
      ...prevState,
      [inputType]: value,
    }));
  };
  console.log(calculateInvestmentResults(figures));
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              value={initialInvest}
              onChange={(e) => handleInputChange(e, "initialInvestment")}
              required
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              value={annualInvest}
              onChange={(e) => handleInputChange(e, "annualInvestment")}
              required
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              value={expectedReturn}
              onChange={(e) => handleInputChange(e, "expectedReturn")}
              required
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => handleInputChange(e, "duration")}
              required
            />
          </p>
        </div>
      </section>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {calculateInvestmentResults(figures).map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvest;
            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
