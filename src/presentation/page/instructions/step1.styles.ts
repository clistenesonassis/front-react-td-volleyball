import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid black;
  padding: 20px;

  .title {
    margin-bottom: 30px;
    text-align: center;
  }

  .description {
    max-width: 900px;
    text-align: center;
    font-size: 16px;
    color: black;
  }

  .footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

  @media (min-width: 768px) {
    .description {
      font-size: 24px;
    }
  }
`;
