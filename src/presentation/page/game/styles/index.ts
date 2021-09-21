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

export const Content = styled.div<iConfig>`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-gap: 10px;
`;

export const Player = styled.div<iPlayer>`
  position: relative;

  #layer {
    position: absolute;
    background: black;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;

    display: ${props => (props.active === true ? 'block' : 'none')};
  }
`;

export const OptionsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Options = styled.div<iConfig>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    font-size: 18px;
    padding: 10px;
    background: transparent;
    border: 1px solid white;
    color: white;
    border-radius: 8px;
    cursor: pointer;

    :hover {
      transition: 0.5s;
      background: #535a69;
    }
  }
`;

export const OptionsTitle = styled.div``;
