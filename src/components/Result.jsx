import React from "react";
import {calculateInvestmentResults} from '../util/investment.js'
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

  console.log(userInput);

  const investmentResults = calculateInvestmentResults(userInput)
  console.log(investmentResults)
  return <div>Result</div>;
};

export default Result;
