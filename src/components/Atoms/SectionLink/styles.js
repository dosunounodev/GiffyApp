import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  margin: 0 5px;
  font-size: 1.8rem;
  transition-duration: 0.5s;
  transition-timing-function: linear;
  transition-property: transform;
  will-change: transform;
  &:hover {
    transform: scale(1.1);
  }
  &.selected {
    text-decoration: underline;
    font-weight: 700;
  }
`;
export { StyledNavLink };
