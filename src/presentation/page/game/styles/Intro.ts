import styled, { css } from 'styled-components';

interface iConfig {
  layout: 'layout1' | 'layout2';
}

interface iPlayer {
  active: boolean;
}

export const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
