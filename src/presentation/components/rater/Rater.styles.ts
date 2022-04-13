import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background: #ffff;
  height: 100%;

  .footer {
    margin-top: 20px;
    text-align: center;

    .btn-submit {
      width: 100%;
    }
  }
`;
