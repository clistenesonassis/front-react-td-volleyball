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
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  border: 2px solid yellow;
  max-width: 700px;
  width: 100%;
`;

export const Group = styled.div<iGroup>`
  width: 100%;
  display: grid;
  grid-template-columns: ${props =>
    props.quant ? props.quant.join(' ') : '1fr 1fr'};
  grid-gap: ${props => props.gap || '10px'};
`;
