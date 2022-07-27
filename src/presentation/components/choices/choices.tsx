import React from 'react';
import { useSelector } from 'react-redux';
import { iReducer } from 'domain/interfaces/redux/reducer';
import { validResponse } from '../../../mapper/keyboard-answers';

import { Container, Option } from './choices.styles';
import disptach from '../../../data/store/reducer/dispatch';

const Choices: React.FC = (): JSX.Element => {
  const store: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );

  const vote = (option: string) => {
    const response = validResponse(option);

    if (response) {
      disptach.Answer(response);
    }
  };

  return (
    <Container>
      <Option onClick={() => vote('a')} disabled={!store.options}>
        Diagonal forte
      </Option>
      <Option onClick={() => vote('s')} disabled={!store.options}>
        Diagonal colocado
      </Option>
      <Option onClick={() => vote('d')} disabled={!store.options}>
        Corredor forte
      </Option>
      <Option onClick={() => vote('f')} disabled={!store.options}>
        Corredor colocado
      </Option>
      <Option onClick={() => vote(' ')} disabled={!store.options}>
        Explorando o bloqueio
      </Option>
    </Container>
  );
};

export default Choices;
