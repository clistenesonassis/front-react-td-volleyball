import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Page } from './styles';
import { answerService } from '../../../service';
import { CalcResult } from '../../../utils/CalcResult';
import { VideoService } from '../../../utils';

import { ChangeState } from '../../../data/store/reducer/actions';

import { Card } from '../card';
import { iReducer } from '../../../domain/interfaces/redux/reducer';

export interface iProps {
  btnContent: string;
  btnAction: () => any;
}

type Props = iProps & RouteComponentProps;

const Result: React.FC<Props> = ({ btnAction, btnContent }): JSX.Element => {
  const videos = answerService.answers();

  const state: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );

  const result = new CalcResult(state.playlist!, videos);
  const dispatch = useDispatch();

  const finish = () => {
    dispatch(
      ChangeState({
        options: false,
        video: false,
        counterdown: false,
        currentVideo: 0,
        score: 0,
      }),
    );
    btnAction();
  };

  return (
    <Page>
      <div className="container">
        <div className="result">
          <Card
            title="Acurácia:"
            value={`${result.accuracy()}%`}
            className="accuracy"
          />
          <Card
            title="Eficiência:"
            value={`${result.efficiency()}%`}
            className="efficiency"
          />
          <Card title="ITD:" value={result.itd()} className="itd" />
          <Card
            title="Tempo total:"
            value={`${result.totalTime()}s`}
            className="itd"
          />
          <Card
            title="Tempo médio de resposta:"
            value={`${result.averageResponseTime()}ms`}
            className="itd"
          />
        </div>
        <div>
          <button type="button" onClick={finish}>
            {btnContent}
          </button>
        </div>
      </div>
    </Page>
  );
};

export default Result;
