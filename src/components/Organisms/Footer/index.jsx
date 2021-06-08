import React from 'react';
import { FooterWrapper } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Made with 💙 by{' '}
        <a
          href="https://github.com/dosunounodev"
          target="_blank"
          rel="noreferrer"
        >
          dosunounodev
        </a>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
