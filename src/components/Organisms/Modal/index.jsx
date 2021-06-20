import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'components/Atoms/Button';
import { ModalContent, ModalWrapper } from './style';

const Modal = ({ children, onClose }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <Button onClick={onClose}>X</Button>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

const ModalPortal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById('modal-root')
  );
};

export default ModalPortal;
