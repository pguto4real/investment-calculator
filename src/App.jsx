import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInputs] = useState({
    initialInvestment: {
      label: "Initial Investment",
      name: "initialInvestment",
      initialValue: 1000,
    },
    annualInvestment: {
      label: "annual Investment",
      name: "annualInvestment",
      initialValue: 900,
    },
    expectedReturn: {
      label: "expected Return",
      name: "expectedReturn",
      initialValue: 5.5,
    },
    duration: { label: "duration", name: "duration", initialValue: 10 },
  });

  const handleInputChange = (name, value) => {
    setUserInputs((prevInputs) => ({
      ...prevInputs, // Spread the previous state
      [name]: { ...prevInputs[name], initialValue: +value }, // Update the specific property
    }));
  };

  return (
    <>
      <Header />
      <UserInput inputs={userInput} onInputChange={handleInputChange} />
      <Result inputs={userInput} />
    </>
  );
}

export default App;
