import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from './home.styles';
import { line1, volei } from '../../base/assets/image';
import { makeRemoteUser } from '../../../main/factories/usecases/UserFactory';

const Home: React.FC<RouteComponentProps> = (props): JSX.Element => {
  const test = () =>
    makeRemoteUser()
      .create({
        birth_date: '',
        city: 'joão pessoa',
        competitive_level: '',
        competitive_profile: '',
        email: '',
        gender: '',
        id: '001',
        name: '',
        olympic_games: true,
        phone: '',
        practice_time: 10,
        state: '',
        training_amount: 2,
        training_hours: 2,
      })
      .then(e => console.log('saved: ', e));

  return (
    <Container>
      <div id="section1" className="container">
        <img className="line1" src={line1} alt="line" />

        <div className="content">
          <p className="title">
            Você é rápido para tomar
            <br />
            decisões no vôlei?
          </p>
          <p className="subtitle">
            A tomada de decisão é um das habilidades mais
            <br />
            importantes no esporte.
          </p>
          <a href="/register" className="next">
            Teste agora sua habilidade &gt;
          </a>
          <button type="button" onClick={test}>
            save
          </button>
        </div>

        <div className="image">
          <img src={volei} alt="volei-logo" />
        </div>
      </div>
      <div id="section2" className="container">
        <p>
          A tomada de decisão é um das habilidades mais importantes no esporte.
          Atletas de alto nível conseguem por meio da percepção de sinais
          relevantes e conhecimento do jogo escolher a melhor opção para
          execução da ação motora e consequentemente obter vantagem. Desta
          forma, o Programa de Pós-Graduação em Neurociência Cognitiva e
          Comportamento em parceria com o Departamento de Computação
          desenvolveram o Sideout Beach Volleyball Test (S-BVT) para avalia o
          tempo de resposta e a qualidade da tomada de decisão no ataque.
        </p>
      </div>
    </Container>
  );
};

export default Home;
