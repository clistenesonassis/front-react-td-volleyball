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

  button[type='button'] {
    background: none;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    font-size: 20px;
    margin-top: 40px;

    :hover {
      border-color: gray;
      background: gray;
      transition: 0.3s;
    }
  }

  @media only screen and (max-width: 1000px) {
    .result {
      grid-template-columns: 1fr;
    }
  }
`;
