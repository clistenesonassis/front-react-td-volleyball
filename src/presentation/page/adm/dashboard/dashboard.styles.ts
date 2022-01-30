import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;

  .options {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      padding: 10px;
      font-size: 18px;
      color: black;
      font-weight: bold;
    }
  }
`;
