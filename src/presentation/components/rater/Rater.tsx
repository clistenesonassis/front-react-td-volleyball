import { Box, Button, Modal, TextField, Typography } from '@material-ui/core';
import { Rating } from '@mui/material';
import React from 'react';
import { Container } from './styles/RaterStyles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  boxShadow: 24,
  p: 4,
};

export const Rater: React.FC = (): JSX.Element => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState<any>(2);

  return (
    <Container>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal_title" variant="h6" component="h2">
            Deixe seu comentário
          </Typography>
          <Typography id="modal_description">
            Avalie sua experiência com a aplicação.
          </Typography>

          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />

          <TextField
            id="text"
            label="Deixe um comentário"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="standard"
          />
        </Box>
      </Modal>
    </Container>
  );
};
