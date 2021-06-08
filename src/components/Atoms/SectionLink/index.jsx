import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavLink } from './styles';

const SectionLink = ({ children, to, activeClassName = 'selected' }) => {
  return (
    <StyledNavLink exact to={to} activeClassName={activeClassName}>
      {children}
    </StyledNavLink>
  );
};

SectionLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
};

export default SectionLink;
