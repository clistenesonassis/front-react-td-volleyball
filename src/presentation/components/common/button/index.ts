import styled from 'styled-components';

export const Button = styled.button`
  background: blue;
  max-width: 200px;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  font-weight: bold;

  :hover {
    background: darkblue;
    transition: 0.5s;
  }
`;
