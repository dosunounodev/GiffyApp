import styled from 'styled-components';

export const SearchFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;

  input,
  button {
    display: block;
    width: 100%;
    max-width: 280px;
    padding: 10px;
    border: 2px solid #1565c0;
    border-radius: 5px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    color: #1565c0;
    transition-property: color, background-color;
    transition-duration: 0.3s;
    will-change: color, background-color;
  }

  input {
    margin-bottom: 10px;
    color: initial;
  }

  button {
    cursor: pointer;
    &:hover {
      color: #fff;
      background-color: #1565c0;
    }
  }
`;
