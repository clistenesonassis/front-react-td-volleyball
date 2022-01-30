import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid red;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left,
    .right {
      display: flex;
      gap: 5px;
    }

    .item {
      padding: 10px;
    }
  }
`;
