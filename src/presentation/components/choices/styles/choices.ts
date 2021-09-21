import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Option = styled.div`
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
