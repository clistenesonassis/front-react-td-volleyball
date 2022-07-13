import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { v4 } from 'uuid';
import { Container } from './teste.styles';
import { VideoService } from '../../../utils';
import { Rater } from '../../components/rater';
import { makeRemoteUser } from '../../../main/factories/usecases/UserFactory';
import { makeRemoteVideo } from '../../../main/factories/usecases/VideoFactory';

const Teste: React.FC<RouteComponentProps> = (props): JSX.Element => {
  const data = VideoService.getPlaylist(3, 'feminino');

  const SendData = () =>
    makeRemoteUser().create({
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
    });

  const GetData = () =>
    makeRemoteUser()
      .get('clistenes808@gmail.com')
      .then(e => {
        console.log('response: ', e);
        console.log(e.body.data());
      });

  const GetVideo = () =>
    makeRemoteVideo()
      .get('training', 'masculino')
      .then(e => {
        e.body.docs.forEach((res: any) => {
          console.log('videos: ', res.data());
        });
      });

  const SetVideo = () =>
    makeRemoteVideo()
      .set('valid', 'masculino', {
        id: 'testando_id',
        end: 10,
        reponse: {
          diagonalForte: 2,
          diagonalColocado: 1,
          corredorForte: 0,
          corredorColocado: 3,
          explorandoBloqueio: 4,
        },
      })
      .then(e => console.log(e.body));

  return (
    <>
      <Container>
        {/* <Rater /> */}
        <h1>testando aplicação</h1>
        <button type="button" onClick={SendData}>
          Send !!
        </button>

        <button type="button" onClick={GetData}>
          receive Data
        </button>

        <button type="button" onClick={GetVideo}>
          Obter video
        </button>

        <button type="button" onClick={SetVideo}>
          Salvar video
        </button>
      </Container>
    </>
  );
};

export default Teste;
