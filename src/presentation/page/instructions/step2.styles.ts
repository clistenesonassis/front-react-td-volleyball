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
  }

  .description {
    max-width: 600px;
    text-align: center;
    margin: 15px 0px;
  }

  .photo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    img {
      width: 100%;
    }
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
    .photo {
      max-width: 1400px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;

      img {
        width: 100%;
      }
    }
  }
`;
