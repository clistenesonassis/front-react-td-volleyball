import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;

  img {
    width: 100vw;
    height: 100vh;
  }

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.8;
    background-color: black;
  }

  .container {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
`;
