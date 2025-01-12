import React from "react";
import { Input } from "./Input";
import InputGroup from "./InputGroup";

const UserInput = ({ inputs, onInputChange }) => {
  // Group the objects into pairs
  const firstHalf = inputs.slice(0, 2);
  const secondHalf = inputs.slice(2);
  return (
    <section id="user-input">
      <InputGroup>
        {firstHalf.map((input) => (
          <Input
            key={input.name}
            label={input.label}
            name={input.name}
            initialValue={input.initialValue}
            onInputChange={onInputChange} // Pass the handler to Input
            inputType="number"
          />
        ))}
      </InputGroup>
      <InputGroup>
        {secondHalf.map((input) => (
          <Input
            key={input.name}
            label={input.label}
            name={input.name}
            initialValue={input.initialValue}
            onInputChange={onInputChange} // Pass the handler to Input
            inputType="number"
          />
        ))}
      </InputGroup>
    </section>
  );
};

export default UserInput;
