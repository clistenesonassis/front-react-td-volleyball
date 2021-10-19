import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.primary};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .content {
      .title {
        font-size: 50px;
        color: white;
      }

      .button {
        padding: 20px;
        background: transparent;
        border: 1px solid white;
        color: white;
        font-size: 1.4rem;

        &:hover {
          cursor: pointer;
          transform: scale(1.1);
          transition: 0.5s;
        }
      }
    }
  }
`;
