import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  position: relative;

  .disable {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const Option = styled.button`
  padding: 10px;
  font-size: 18px;
  color: white;
  border: 1px solid white;

  &:hover {
    color: var(--india-green);
    border: 1px solid var(--india-green);
    transition: 0.5s;
  }
`;
