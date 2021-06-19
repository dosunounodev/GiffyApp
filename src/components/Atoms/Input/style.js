import styled from 'styled-components';

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  height: 40px;
  padding: 10px;
  border: 2px solid #1565c0;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  color: #1565c0;
  /* text-transform: uppercase; */
  :focus {
    border: 4px solid #1565c0;
    outline: none;
  }
`;
