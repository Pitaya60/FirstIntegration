import React from 'react';

function InputField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default InputField;
