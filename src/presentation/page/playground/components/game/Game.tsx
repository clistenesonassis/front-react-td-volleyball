import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Page } from './styles';
import { Player } from '../../../../components/player';
import { Choices } from '../../../../components/choices';
import { Countdown } from '../../../../components/countdown/countdown';
import { iReducer } from '../../../../../domain/interfaces/redux/reducer';
import { Painel } from '../../../../components/player/player.styles';
import dispatch from '../../../../../data/store/reducer/dispatch';

interface Props {
  end: () => any;
}

export const Game: React.FC<Props> = ({ end }): JSX.Element => {
  const state: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );

  useEffect(() => {
    dispatch.StartGame();
  }, []);

  if (state.end) end();

  return (
    <Page>
      <div className="container">
        {state.video ? <Player /> : <Painel />}
        {state.options && <Choices />}
      </div>
      {state.counterdown && <Countdown />}
    </Page>
  );
};
