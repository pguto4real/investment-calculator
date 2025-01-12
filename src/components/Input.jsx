import React from "react";

export const Input = ({ label, input=true, inputType }) => {
  return (
    <p>
      <label htmlFor="">{label}</label>
      {input && <input type={`${inputType}`} required />}
    </p>
  );
};
