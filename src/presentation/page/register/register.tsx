import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import { MenuItem } from '@material-ui/core';

import { History } from 'history';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Group, Footer } from './register.styles';
import { Button } from '../../components/common/button';
import { schema } from '../../../validation/schema/personalData';
import { AnswerImpl } from '../../../data/store/reducer/actions';
import { iReducer } from '../../../domain/interfaces/redux/reducer';
import { makeRemoteUser } from '../../../main/factories/usecases/UserFactory';

interface Props {
  history: History;
  setNeedRegister: (data: boolean) => void;
}

export const RegisterComponent: React.FC<Props> = ({
  history,
  setNeedRegister,
}): JSX.Element => {
  const gender = [
    {
      value: 'masculino',
      label: 'Masculino',
    },
    {
      value: 'feminino',
      label: 'Feminino',
    },
  ];

  const hand = [
    {
      value: 'destro',
      label: 'Destro',
    },
    {
      value: 'canhoto',
      label: 'Canhoto',
    },
    {
      value: 'ambidestro',
      label: 'Ambidestro',
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
      value: 'Ex-atleta profissional com prática recreacional',
      label: 'Ex-atleta profissional com prática recreacional',
    },
    {
      value: 'Ex-atleta de base com prática recreacional ou não',
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
      value: 'sim',
      label: 'Sim',
    },
    {
      value: 'não',
      label: 'Não',
    },
  ];

  const dispatch = useDispatch();

  const state: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );

  const back = () => {
    history.push('/login');
  };

  const next = (data: any) => {
    dispatch(AnswerImpl({ user: data }));
    makeRemoteUser().create(data);
    history.push('/login');
    toastr.success('Cadastro realizado com sucesso!', 'Turtle Bay Resort', {
      timeOut: 5000,
    });
  };

  return (
    <Container>
      <div className="content">
        <Formik
          initialValues={{
            name: state.user?.name,
            birthDate: state.user?.birthDate,
            email: state.user?.email,
            phone: state.user?.phone,
            gender: state.user?.gender,
            city: state.user?.city,
            state: state.user?.state,
            hand: state.user?.hand,
            practiceTime: state.user?.practiceTime,
            trainingAmount: state.user?.trainingAmount,
            trainingHours: state.user?.trainingHours,
            competitiveProfile: state.user?.competitiveProfile,
            competitiveLevel: state.user?.competitiveLevel,
            olympicGames: state.user?.olympicGames,
          }}
          validationSchema={schema}
          onSubmit={(values, { setSubmitting }) => {
            next(values);
          }}
        >
          {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
            <Form className="container" onSubmit={handleSubmit}>
              {console.log(values, errors)}
              <Group quant={['1fr', '0.5fr']}>
                <TextField
                  id="standard-basic"
                  label="Nome"
                  name="name"
                  color="primary"
                  error={!!errors.name}
                  helperText={errors.name}
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <TextField
                  id="standard-basic"
                  label="Data de nascimento"
                  name="birthDate"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.birthDate}
                  helperText={errors.birthDate}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Group>

              <Group quant={['1fr', '0.7fr', '0.5fr']}>
                <TextField
                  id="standard-basic"
                  label="Email"
                  name="email"
                  type="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  fullWidth
                />
                <TextField
                  id="standard-basic"
                  label="Telefone"
                  name="phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  fullWidth
                />
                <TextField
                  id="standard-select-currency"
                  select
                  label="Genero*"
                  name="gender"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!errors.gender}
                  helperText={errors.gender}
                >
                  {gender.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Group>

              <Group quant={['1fr', '0.7fr', '0.5fr']}>
                <TextField
                  id="standard-basic"
                  label="Cidade"
                  name="city"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!errors.city}
                  helperText={errors.city}
                  fullWidth
                />
                <TextField
                  id="standard-basic"
                  label="Estado"
                  name="state"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!errors.state}
                  helperText={errors.state}
                  fullWidth
                />
                <TextField
                  id="standard-select-currency"
                  select
                  label="Mão dominate*"
                  name="hand"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!errors.state}
                  helperText={errors.state}
                >
                  {hand.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Group>

              <Group quant={['1fr', '1fr', '1fr']}>
                <TextField
                  id="standard-basic"
                  label="Tempo de prática(em anos)"
                  name="practiceTime"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!errors.state}
                  helperText={errors.state}
                  fullWidth
                />
                <TextField
                  id="standard-basic"
                  label="Quantidade de treino por semana"
                  name="trainingAmount"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!errors.trainingAmount}
                  helperText={errors.trainingAmount}
                  fullWidth
                />
                <TextField
                  id="standard-basic"
                  label="Quantidade de horas por semana"
                  name="trainingHours"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!errors.trainingHours}
                  helperText={errors.trainingHours}
                  fullWidth
                />
              </Group>

              <Group quant={['1fr', '1fr', '1fr']}>
                <TextField
                  id="standard-select-currency"
                  select
                  label="Perfil competitivo*"
                  name="competitiveProfile"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!errors.competitiveProfile}
                  helperText={errors.competitiveProfile}
                >
                  {perfilCompetitivo.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="standard-select-currency"
                  select
                  label="Nível completivo*"
                  name="competitiveLevel"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!errors.competitiveLevel}
                  helperText={errors.competitiveLevel}
                >
                  {nivelCompletivo.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="standard-select-currency"
                  select
                  label="Jogos Olímpicos*"
                  name="olympicGames"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!errors.olympicGames}
                  helperText={errors.olympicGames}
                >
                  {jogosOlimpicos.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Group>
              <Footer>
                <Button className="back" type="button" onClick={back}>
                  Voltar
                </Button>
                <Button type="submit">Cadastre-se</Button>
              </Footer>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};
