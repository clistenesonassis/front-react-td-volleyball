import { Box, Button, Modal, TextField, Typography } from '@material-ui/core';
import { LoadingButton } from '@mui/lab';
import { Rating } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { iReducer } from '../../../domain/interfaces/redux/reducer';
import { makeRemoteAnswer } from '../../../main/factories/usecases/UserFactory';
import { Container } from './Rater.styles';

const style = {
  position: 'absolute',
  width: '100%',
  height: '100%',
};

export const Rater: React.FC = (): JSX.Element => {
  const [open, setOpen] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState<any>(0);
  const [description, setDescription] = React.useState<any>('');

  const state: iReducer = useSelector(
    (reducer: { app: iReducer }) => reducer.app,
  );

  const submit = () => {
    const { user, answers } = state;

    setLoading(true);

    makeRemoteAnswer()
      .create({
        owner: user?.email || '',
        answer: answers || [],
        avaliacao: value,
        avaliacaoDescription: description,
      })
      .then(e => {
        setLoading(false);
        handleClose();
        console.log('firebase response: ', e);
      })
      .catch(e => {
        setLoading(false);
        alert('falha ao enviar dados para o servidor. tente novamente');
      });
  };

  return (
    <Modal
      open={open}
      onClose={(_, reason) => {
        if (reason !== 'backdropClick') {
          handleClose();
        }
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableAutoFocus
      disableEscapeKeyDown
    >
      <Box sx={style}>
        <Container>
          <Typography id="modal_title" variant="h6" component="h2">
            Deixe seu comentário
          </Typography>
          <Typography id="modal_description">
            Avalie sua experiência com a aplicação.
          </Typography>

          <Rating
            name="simple-controlled"
            value={value}
            size="large"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />

          <TextField
            id="text"
            label="Deixe um comentário"
            multiline
            rows={4}
            defaultValue=""
            value={description}
            onChange={e => setDescription(e.target.value)}
            variant="standard"
            required={false}
          />

          <div className="footer">
            <LoadingButton
              loading={loading}
              variant="contained"
              type="submit"
              onClick={submit}
              size="large"
              className="btn-submit"
              disabled={value === 0}
            >
              Enviar
            </LoadingButton>
          </div>
        </Container>
      </Box>
    </Modal>
  );
};
