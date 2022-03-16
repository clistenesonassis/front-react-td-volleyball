import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid black;
  padding: 20px;

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const Warning = styled.div`
  max-width: 800px;
  text-align: center;
  margin: 15px 0px;
  color: red;
`;
