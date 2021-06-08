import styled from 'styled-components';

export const SearchFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  max-width: 600px;
  margin-bottom: 0px;
  background-color: red;
  @media screen and (min-width: 650px) {
    flex-direction: row;
    justify-content: space-around;
    height: 60px;
  }

  input,
  button {
    display: block;
    width: 100%;
    max-width: 280px;
    height: 40px;
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
