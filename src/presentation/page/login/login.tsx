import { TextField } from '@mui/material';
import { History } from 'history';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnswerImpl } from '../../../data/store/reducer/actions';
import { makeRemoteUser } from '../../../main/factories/usecases/UserFactory';
import { Container } from './login.style';

type Props = {
  setNeedRegister: (data: boolean) => void;
  history: History;
};

export const LoginComponent: React.FC<Props> = ({
  setNeedRegister,
  history,
}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState({
    status: false,
    msg: 'Email não encontrado',
  });

  const dispatch = useDispatch();

  const submit = (e: any) => {
    e.preventDefault();
    makeRemoteUser()
      .get(email)
      .then(response => {
        if (response.body.data()) {
          setEmailError({
            status: false,
            msg: '',
          });
          dispatch(
            AnswerImpl({
              user: response.body.data(),
            }),
          );
          history.push('/instructions');
        } else {
          setEmailError({
            status: true,
            msg: 'Email não encontrado',
          });
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <Container>
      <div className="content">
        <form onSubmit={submit}>
          <TextField
            error={emailError.status}
            label="Email"
            type="email"
            helperText={emailError.status && emailError.msg}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit">entrar</button>
        </form>
        <a href="/register">Cadastre-se</a>
      </div>
    </Container>
  );
};
