import React from 'react';
import { StyledInput } from './style';

const Input = ({ children, type, placeholder, value, onChange }) => {
  return (
    <StyledInput
      autocomplete="off"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    >
      {children}
    </StyledInput>
  );
};

export default Input;
