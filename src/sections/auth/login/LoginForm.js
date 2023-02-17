import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://127.0.0.1:8000/api/login_api/', {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 10
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Iniciar Sesión
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
      >
        <TextField
          id="email"
          label="Correo electrónico"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          id="password"
          label="Contraseña"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button variant="contained" type="submit">
          Ingresar
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
