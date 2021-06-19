import React from 'react';
import { StyledButton } from './styles';

const Button = ({ children, onClick, invert = false }) => {
  return (
    <StyledButton invert={invert} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default React.memo(Button);
