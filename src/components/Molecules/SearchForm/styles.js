import styled from 'styled-components';

export const SearchFormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 20px;

  input,
  button,
  select {
    display: block;
    width: 100%;
    max-width: 280px;
    height: 40px;
    padding: 5px;
    border: none;
    text-align: center;
    font-weight: bold;
    color: royalblue;
    transition-property: color, background-color;
    transition-duration: 0.3s;
    will-change: color, background-color;
    &:focus {
      border: none;
      outline: none;
    }
  }

  input {
    color: initial;
    background-color: #fff;
    border: 2px solid royalblue;
    border-radius: 8px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
  }

  select {
    width: 70px;
    background-color: #fff;
    border-radius: 8px;
    border: 2px solid royalblue;
    margin-left: 3px;
    font-size: 1.2rem;
    text-align: center;
  }

  button {
    width: 100px;
    text-transform: uppercase;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    color: #fff;
    background-color: royalblue;
    cursor: pointer;
    &:hover {
      color: royalblue;
      background-color: #fff;
      border: 2px solid royalblue;
    }
  }
`;
