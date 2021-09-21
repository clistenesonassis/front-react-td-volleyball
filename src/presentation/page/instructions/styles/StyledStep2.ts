import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2``;

export const Descriptions = styled.div`
  max-width: 600px;
  text-align: center;
  margin: 15px 0px;
`;

export const Photo = styled.div`
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  img {
    width: 100%;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
