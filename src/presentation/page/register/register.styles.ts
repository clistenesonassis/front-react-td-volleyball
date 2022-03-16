import styled from 'styled-components';
import { lineFull } from '../../base/assets/image';

interface iGroup {
  quant?: string[];
  gap?: string;
}

export const Container = styled.div`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    background: ${props => props.theme.background};
    background-image: url(${lineFull});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .back {
    background-color: red;
  }
`;

export const Form = styled.form`
  background: ${props => props.theme.primary};
  max-width: 800px;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-gap: 15px;
  padding: 20px;

  @media (min-width: 768px) {
    border-radius: 5px;
    height: fit-content;
  }
`;

export const Group = styled.div<iGroup>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr
  grid-gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: ${props =>
      props.quant ? props.quant.join(' ') : '1fr 1fr'};
  }
`;

export const Footer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
