import React from 'react';
import { StyledButton } from './styles';

const Button = ({ children, onClick, height, invert = false }) => {
  return (
    <StyledButton height={height} invert={invert} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default React.memo(Button);
