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

  .photos {
    display: flex;
    flex-direction: column;
    gap: 10px;

    img {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .photos {
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

export const Title = styled.h2``;

export const Descriptions = styled.div`
  max-width: 600px;
  text-align: center;
  margin: 15px 0px;
`;

export const Photo = styled.div``;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
`;

export const Warning = styled.div`
  max-width: 800px;
  text-align: center;
  margin: 15px 0px;
  color: red;
`;
