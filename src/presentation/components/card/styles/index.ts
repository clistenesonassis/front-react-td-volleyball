import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  color: gray;
  padding: 20px;
  width: 300px;
  border-radius: 5px;

  :hover {
    background: #eaeaea;
  }

  .title {
    font-size: 28px;
  }

  .value {
    font-size: 48px;
    text-align: center;
    font-weight: bold;
  }
`;
