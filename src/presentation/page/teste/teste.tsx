import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { v4 } from 'uuid';
import { Container } from './teste.styles';
import { VideoService } from '../../../utils';
import { Rater } from '../../components/rater';
import { makeRemoteUser } from '../../../main/factories/usecases/UserFactory';

const Teste: React.FC<RouteComponentProps> = (props): JSX.Element => {
  const data = VideoService.getPlaylist(3, 'feminino');

  const SendData = () =>
    makeRemoteUser().create({
      id: v4(),
      name: '',
      birth_date: '',
      email: 'clistenes808@gmail.com',
      phone: '',
      gender: '',
      city: '',
      state: '',
      training_amount: 10,
      training_hours: 2,
      practice_time: 5,
      competitive_profile: '',
      competitive_level: '',
      olympic_games: true,
      answers: [
        {
          response: 'tt',
          timeToResponse: 100,
          video: 1,
        },
      ],
    });

  const GetData = () =>
    makeRemoteUser()
      .get()
      .then(e => {
        console.log('response: ', e);
        e.body.forEach((doc: any) => {
          console.log(doc);
          console.log(doc.id, '=>', doc.data());
        });
      });

  return (
    <>
      <Container>
        <Rater />
        <h1>testando aplicação</h1>
        <button type="button" onClick={SendData}>
          Send !!
        </button>

        <button type="button" onClick={GetData}>
          receive Data
        </button>
      </Container>
    </>
  );
};

export default Teste;
