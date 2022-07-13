import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';
import { History } from 'history';
import React, { useState } from 'react';
import dispatch from '../../../data/store/reducer/dispatch';
import { makeRemoteUser } from '../../../main/factories/usecases/UserFactory';
import { Container } from './login.style';

type Props = {
  history: History;
};

export const LoginComponent: React.FC<Props> = ({ history }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState({
    status: false,
    msg: 'Email não encontrado',
  });

  const submit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    makeRemoteUser()
      .get(email)
      .then(response => {
        setLoading(false);
        if (response.body.data()) {
          setEmailError({
            status: false,
            msg: '',
          });
          dispatch.sendChangeState({
            user: response.body.data(),
          });
          history.push('/instructions');
        } else {
          setEmailError({
            status: true,
            msg: 'Email não encontrado',
          });
        }
      })
      .catch(err => {
        setLoading(false);
        console.error(err);
      });
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
          <LoadingButton loading={loading} variant="contained" type="submit">
            Entrar
          </LoadingButton>
        </form>
        <a href="/register">Cadastre-se</a>
      </div>
    </Container>
  );
};
