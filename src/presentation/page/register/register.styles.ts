import styled from 'styled-components';
import { lineFull } from '../../base/assets/image';

interface iGroup {
  quant?: string[];
  gap?: string;
}

export const Container = styled.div`
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

  .back {
    background-color: red;
  }
`;

export const Form = styled.form`
  max-width: 800px;
  width: 100%;
  display: grid;
  grid-gap: 15px;
  padding: 20px;
  background: ${props => props.theme.primary};
  border-radius: 5px;
`;

export const Group = styled.div<iGroup>`
  width: 100%;
  display: grid;
  grid-template-columns: ${props =>
    props.quant ? props.quant.join(' ') : '1fr 1fr'};
  grid-gap: ${props => props.gap || '10px'};

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Footer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
