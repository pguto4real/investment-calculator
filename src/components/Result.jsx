import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";
const Result = ({ inputs }) => {
  console.log(inputs);
  const initialInvestment = +inputs.initialInvestment.initialValue;
  const annualInvestment = +inputs.annualInvestment.initialValue;
  const expectedReturn = +inputs.expectedReturn.initialValue;
  const duration = +inputs.duration.initialValue;

  const userInput = {
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  };

  const investmentResults = calculateInvestmentResults(userInput);
  const initialInvestmentData =
    investmentResults[0].valueEndOfYear -
    investmentResults[0].interest -
    investmentResults[0].annualInvestment;
  console.log(investmentResults);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestmentData;

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
  );
};

export default Result;
