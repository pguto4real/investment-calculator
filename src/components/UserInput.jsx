import React from "react";
import { Input } from "./Input";
import InputGroup from "./InputGroup";

const UserInput = () => {
  return (
    <section id="user-input">
      <InputGroup>
        <Input label="Initial Investment" inputType="number" />
        <Input label="Annual Investment" inputType="number" />
      </InputGroup>
      <InputGroup>
        <Input label="Expected Return" inputType="number" />
        <Input label="Duration" inputType="number" />
      </InputGroup>
    </section>
  );
};

export default UserInput;
