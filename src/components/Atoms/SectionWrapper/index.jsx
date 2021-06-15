import React from 'react';
import { StyledSectionWrapper } from './styles';

const SectionWrapper = ({ children, bgcolor }) => {
  return (
    <StyledSectionWrapper bgcolor={bgcolor}>{children}</StyledSectionWrapper>
  );
};

export default SectionWrapper;
