import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {
  const [inputs, setInputs] = useState([
    {
      label: "Initial Investment",
      name: "initialInvestment",
      initialValue: 1000,
    },
    {
      label: "annual Investment",
      name: "annualInvestment",
      initialValue: 1200,
    },
    { label: "expected Return", name: "expectedReturn", initialValue: 1000 },
    { label: "duration", name: "duration", initialValue: 1000 },
  ]);

  const handleInputChange = (name, value) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.name === name ? { ...input, initialValue: value } : input
      )
    );
  };

  console.log(inputs);
  return (
    <>
      <Header />
      <UserInput inputs={inputs} onInputChange={handleInputChange} />
    </>
  );
}

export default App;
