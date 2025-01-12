import React from "react";
import { Input } from "./Input";

const UserInput = () => {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input label="Initial Investment" inputType="number" />
        <Input label="Annual Investment" inputType="number" />
      </div>
      <div className="input-group">
        <Input label="Expected Return" inputType="number" />
        <Input label="Duration" inputType="number" />
      </div>
    </section>
  );
};

export default UserInput;
