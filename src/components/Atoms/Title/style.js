import styled, { css } from 'styled-components';

const StyledTitle = styled.h2`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  font-size: 3.6rem;
  text-align: center;
  color: #fff;
  ${({ color }) => css`
    color: ${color};
  `};
`;

export { StyledTitle };
