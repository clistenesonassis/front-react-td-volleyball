import React from 'react';

import { Container } from './styles';

interface ownProps {
  title: string;
  value: string;
  className: string;
}

type iProps = ownProps;

const Card: React.FC<iProps> = ({ title, value, className }): JSX.Element => {
  return (
    <Container className={className}>
      <div className="title">{title}</div>
      <div className="value">{value}</div>
    </Container>
  );
};

export default Card;
