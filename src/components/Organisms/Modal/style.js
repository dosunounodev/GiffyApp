import styled from 'styled-components';

export const ModalWrapper = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: rgb(255 255 255 / 0.5);
  backdrop-filter: blur(5px);
  z-index: 20;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 300px;
  height: auto;
  padding: 20px;
  background-color: #000;
  border-radius: 20px;
  > button {
    position: absolute;
    top: 10px;
    right: 10px;
    width: auto;
  }
`;
