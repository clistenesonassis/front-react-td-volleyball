import styled from 'styled-components';
import { lineFullBlack } from '../../base/assets/image';

export const Container = styled.div`
  background-image: url(${lineFullBlack});
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
