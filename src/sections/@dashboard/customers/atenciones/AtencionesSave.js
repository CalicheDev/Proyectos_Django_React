import React, { useState } from 'react';
// @mui
import { TextField, Stack, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
// API
import axios from 'axios';

// Def styles
const useStyles = styled((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    width: '100%',
    maxWidth: '400px',
    margin: 'auto',
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

function AtencionesSave() {
  const [formData, setForm] = useState({
    fecha: '',
    fecha_atencion: '',
    documento: '',
    orden: '',
    historia: '',
    observaciones: '',
    tipo_novedad: '',
    novedad: '',
    estado: '',
  });

  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://127.0.0.1:8000/api/atenciones/', formData)
      .then((response) => {
        console.log(response);
        // Aquí podrías mostrar un mensaje de éxito o redirigir al usuario a otra página
        setForm({
          fecha: '',
          fecha_atencion: '',
          documento: '',
          orden: '',
          historia: '',
          observaciones: '',
          tipo_novedad: '',
          novedad: '',
          estado: '',
        });
      })
      .catch((error) => {
        console.log(error);
        // Aquí podrías mostrar un mensaje de error
      });
  };

  return (
    <Stack spacing={3}>
      {/* <Typography variant="h6">Agregar Atención</Typography> */}
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          name="fecha"
          label="Fecha"
          type="date"
          value={formData.fecha}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name="fecha_atencion"
          label="Fecha Atención"
          type="date"
          value={formData.fecha_atencion}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField name="documento" label="Documento" value={formData.documento} onChange={handleChange} />
        <TextField name="orden" label="Orden" value={formData.orden} onChange={handleChange} />
        <TextField name="historia" label="Historia" value={formData.historia} onChange={handleChange} />
        <TextField
          name="observaciones"
          label="Observaciones"
          multiline
          value={formData.observaciones}
          onChange={handleChange}
        />
        <TextField name="tipo_novedad" label="Tipo Novedad" value={formData.tipo_novedad} onChange={handleChange} />
        <TextField name="novedad" label="Novedad" multiline value={formData.novedad} onChange={handleChange} />
        <TextField name="estado" label="Estado" value={formData.estado} onChange={handleChange} />
        {/* <Button type="submit">Guardar</Button> */}

        <LoadingButton type="submit" variant="contained">
          Guardar
        </LoadingButton>
      </form>
    </Stack>
  );
}

export default AtencionesSave;
