import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding-top: 20px;
  max-height: 300px;
  height: 100%;
  width: 100%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (min-width: 576px) {
    max-height: 400px;
  }

  @media (min-width: 768px) {
    max-height: 500px;
  }

  @media (min-width: 992px) {
    max-height: 600px;
  }

  @media (min-width: 1200px) {
    max-height: 700px;
  }

  @media (min-width: 1400px) {
    max-height: 800px;
  }
`;

export const Painel = styled.div`
  max-height: 300px;
  height: 100%;
  width: 100%;
  background: black;

  @media (min-width: 576px) {
    max-height: 400px;
  }

  @media (min-width: 768px) {
    max-height: 500px;
  }

  @media (min-width: 992px) {
    max-height: 600px;
  }

  @media (min-width: 1200px) {
    max-height: 700px;
  }

  @media (min-width: 1400px) {
    max-height: 800px;
  }
`;
