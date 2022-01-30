import styled from 'styled-components';
import { backgroundVolei } from '../../base/assets/image';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.background};
  position: relative;
  overflow-y: auto;

  .line1 {
    position: absolute;
  }

  .line1 {
    top: 0;
    right: 0;
  }

  .container {
    display: flex;
    align-items: center;
    height: 100%;

    .content {
      .title {
        font-size: 50px;
        color: ${props => props.theme.primary};
      }

      .subtitle {
        font-size: 24px;
        color: ${props => props.theme.primaryLight};
      }

      .next {
        font-size: 20px;
        color: ${props => props.theme.primary};
      }
    }
  }

  #section1 {
    justify-content: space-between;
  }

  #section2 {
    background-image: url(${backgroundVolei});
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: ${props => props.theme.primaryLight};
      max-width: 1024px;
      text-align: center;
      font-size: 20px;
      line-height: 50px;
    }
  }
`;
