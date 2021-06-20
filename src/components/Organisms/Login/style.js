import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;

  label {
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
    font-size: 1.4rem;
    font-weight: bold;
    color: #fff;
  }
  span {
    display: block;
    margin-bottom: 5px;
    font-style: italic;
  }
`;
