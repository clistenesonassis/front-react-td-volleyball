import styled, { css } from 'styled-components';

interface iConfig {
  layout: 'layout1' | 'layout2';
}

interface iPlayer {
  active: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;
