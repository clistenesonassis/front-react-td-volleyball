import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid #cdcdcd;
  padding: 20px;
  box-shadow: 1px 1px 10px #cdcdcd;

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
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    gap: 20px;
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
