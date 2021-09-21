import React from 'react';
import ReactPlayer from 'react-player';

import { Button } from '../common/button';
import { Container } from './styles/StyledOptions';

interface ownProps {
  itens: string[];
}

const Options: React.FC<ownProps> = ({ itens }): JSX.Element => {
  return (
    <Container>
      {itens.map(elem => (
        <Button type="button">{elem}</Button>
      ))}
    </Container>
  );
};

export default Options;
