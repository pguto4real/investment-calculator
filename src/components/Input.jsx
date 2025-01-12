import React from "react";
import { useState } from "react";

export const Input = ({
  label,
  name,
  initialValue,
  onInputChange,
  inputType,
}) => {
  return (
    <p>
      <label htmlFor={name}>{label}</label>
      <input
        type={inputType}
        name={name}
        required
        value={initialValue}
        onChange={(event) => onInputChange(name, event.target.value)}
      />
    </p>
  );
};
