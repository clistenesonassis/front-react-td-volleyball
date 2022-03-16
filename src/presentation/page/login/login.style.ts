import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    padding: 30px;
    background: #ffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 400px;
    width: 100%;

    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;

      button {
        background: ;
      }
    }
  }
`;
