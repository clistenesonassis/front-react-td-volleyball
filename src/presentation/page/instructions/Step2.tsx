import React from 'react';

import { Button } from '../../components/common/button';

import { intruction1, intruction2 } from '../../base/assets/image';

import {
  Container,
  Title,
  Descriptions,
  Photo,
  Footer,
} from './styles/StyledStep2';

interface ownProps {
  onClick?: () => any;
}

const Step2: React.FC<ownProps> = props => {
  return (
    <Container>
      <Title>Instruções para o Teste</Title>
      <Descriptions>
        Seu time sempre será o mais próximo a câmera como indicado na figura
        abaixo pelas setas vermelhas. Antes de iniciar o teste, você verá duas
        cenas para familiarização.
      </Descriptions>
      <Photo>
        <img alt="intruction1" src={intruction1} />
        <img alt="intruction2" src={intruction2} />
      </Photo>
      <Footer>
        <Button onClick={props.onClick} autoFocus>
          Continuar
        </Button>
      </Footer>
    </Container>
  );
};

export default Step2;
