import React from 'react';
import { useForm } from 'react-hook-form';

import { TextField, Button, Grid } from '@material-ui/core';

function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} style={{ margin: '8px' }}>
        <Grid item xs={3}>
          <TextField
            name="name"
            label="Nome"
            inputRef={register({ required: true })}
            error={errors.name}
            variant="outlined"
            fullWidth />
        </Grid>

        <Grid item xs={3}>
          <TextField
            name="email"
            label="Email"
            inputRef={register({ required: true })}
            error={errors.name}
            variant="outlined"
            fullWidth />
        </Grid>

        <Grid item xs={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth>Salvar</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default App;
