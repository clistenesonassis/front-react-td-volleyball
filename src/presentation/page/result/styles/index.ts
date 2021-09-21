import styled from 'styled-components';

export const Page = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  color: white;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .result {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
  }

  @media only screen and (max-width: 1000px) {
    .result {
      grid-template-columns: 1fr;
    }
  }
`;
