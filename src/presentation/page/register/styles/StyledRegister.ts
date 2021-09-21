import styled from 'styled-components';

interface iGroup {
  quant?: string[];
  gap?: string;
}

export const Container = styled.div`
  border: 2px solid red;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  background: #e5e7e5;
  max-width: 800px;
  width: 100%;
  display: grid;
  grid-gap: 15px;
  padding: 20px;
  border: 2px solid #b1b1b1;
  border-radius: 10px;
`;

export const Group = styled.div<iGroup>`
  width: 100%;
  display: grid;
  grid-template-columns: ${props =>
    props.quant ? props.quant.join(' ') : '1fr 1fr'};
  grid-gap: ${props => props.gap || '10px'};
`;

export const Footer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
