import React from 'react';
import { StyledTitle } from './style';

const Title = ({ children, color }) => {
  return <StyledTitle color={color}>{children}</StyledTitle>;
};

export default Title;
