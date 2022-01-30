import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid black;
  padding: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 30px;
`;

export const Descriptions = styled.div`
  max-width: 900px;
  text-align: center;
  font-size: 24px;
  color: black;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
