import styled from 'styled-components';
import { lineFullBlack } from '../../base/assets/image';

export const Container = styled.div`
  background-image: url(${lineFullBlack});
  /* background-repeat: no-repeat;
  background-size: cover; */
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
