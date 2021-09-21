import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import { RouteComponentProps } from 'react-router-dom';
import { Select } from '../../components/select';

import { Container, Form, Group, Footer } from './styles/StyledRegister';
import { Button } from '../../components/common/button';

const Register: React.FC<RouteComponentProps> = (props): JSX.Element => {
  const [user, setUser] = useState({
    birth_date: '',
    city: '',
    competitive_level: '',
    competitive_profile: '',
    email: '',
    gender: '',
    name: '',
    olympic_games: false,
    phone: '',
    practice_time: 0,
    state: '',
    training_amount: 0,
    training_hours: 0,
  });

  const gender = [
    {
      value: 'man',
      label: 'Masculino',
    },
    {
      value: 'female',
      label: 'Feminino',
    },
  ];

  const perfilCompetitivo = [
    {
      value: 'profissional',
      label: 'Atleta Profissional',
    },
    {
      value: 'sub-21',
      label: 'Atleta sub-21',
    },
    {
      value: 'sub-19',
      label: 'Atleta sub-19',
    },
    {
      value: 'sub-15',
      label: 'Atleta sub-15',
    },
    {
      value: 'ex-prof-recreacional',
      label: 'Ex-atleta profissional com prática recreacional',
    },
    {
      value: 'ex-prof-recreacional-or-not',
      label: 'Ex-atleta de base com prática recreacional ou não',
    },
    {
      value: 'recreacional',
      label: 'Atleta recreacional (nunca jogou competitivamente)',
    },
  ];

  const nivelCompletivo = [
    {
      value: 'circuito-regional',
      label: 'Apenas Circuito Regional (Campeonato Estadual e Regional)',
    },
    {
      value: 'circuito-escolar',
      label:
        'Circuito Escolar (competições nacionais organizadas pela CBDE e/ou Fase Final dos Jogos Escolares do COB)',
    },
    {
      value: 'circuito-nacional-de-base',
      label:
        'Circuito Nacional de base (qualquer competição CBV de base em que tenha participado da fase principal)',
    },
    {
      value: 'circuito-nacional-profissional',
      label:
        'Circuito Nacional profissional (qualquer competição CBV de base em que tenha participado da fase principal)',
    },
    {
      value: 'circuito-mundial',
      label: 'Circuito Mundial',
    },
  ];

  const jogosOlimpicos = [
    {
      value: 'yes',
      label: 'Sim',
    },
    {
      value: 'no',
      label: 'Não',
    },
  ];

  return (
    <Container>
      <Form>
        <Group quant={['1fr', '0.5fr']}>
          <TextField
            id="standard-basic"
            label="Nome"
            fullWidth
            value={user.name}
            onChange={e => setUser({ ...user, name: e.target.value })}
          />
          <TextField
            id="standard-basic"
            label="Data de nascimento"
            type="date"
            fullWidth
            value={user.birth_date}
            onChange={e => setUser({ ...user, birth_date: e.target.value })}
          />
        </Group>

        <Group quant={['1fr', '0.7fr', '0.5fr']}>
          <TextField id="standard-basic" label="Email" fullWidth />
          <TextField id="standard-basic" label="Telefone" fullWidth />
          <Select itens={gender} label="Sexo*" />
        </Group>

        <Group>
          <TextField id="standard-basic" label="Cidade" fullWidth />
          <TextField id="standard-basic" label="Estado" fullWidth />
        </Group>

        <Group quant={['1fr', '1fr', '1fr']}>
          <TextField
            id="standard-basic"
            label="Tempo de prática(em anos)"
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Quantidade de treino por semana"
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Quantidade de horas por semana"
            fullWidth
          />
        </Group>

        <Group quant={['1fr', '1fr', '1fr']}>
          <Select itens={perfilCompetitivo} label="Perfil competitivo*" />
          <Select itens={nivelCompletivo} label="Nível completivo*" />
          <Select itens={jogosOlimpicos} label="Jogos Olímpicos*" />
        </Group>
      </Form>

      <Footer>
        <Button onClick={() => props.history.push('/instructions')}>
          Cadastre-se
        </Button>
      </Footer>
    </Container>
  );
};

export default Register;
