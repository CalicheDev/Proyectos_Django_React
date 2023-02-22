import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Typography } from '@mui/material'; /* Button, */
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import Cookies from 'js-cookie';
//import jwt_decode from 'jwt-decode';

const LoginForm = () => {
  /* Funcion para navegar entre paginas una ves se hace el Login, para ver el menu principal u otra seccion */
  const navigate = useNavigate();
  /* const handleClick = () => { 
    navigate('/dashboard', { replace: true });
  } */    

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar el formulario de inicio de sesión al servidor
    axios
      //.post('http://127.0.0.1:8000/api_generate_token/', {
      .post('http://127.0.0.1:8000/api/token/', {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          // Redireccionar a la página principal después de iniciar sesión
          Cookies.set('auth_token', response.data.refresh); // Guardar el token en una cookie
          navigate('/dashboard/perfil', { replace: true });
        } else {
          // Mostrar un mensaje de error al usuario
          console.log(`Error: estado de la respuesta ${response.status}`);
        }
      })
      .catch((error) => {
        console.log(error);
        // Mostrar un mensaje de error al usuario
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 10,
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
        <TextField id="username" label="Usuario" variant="outlined" value={username} onChange={handleUsernameChange} />
        <TextField
          id="password"
          label="Contraseña"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
        />
        <LoadingButton variant="contained" type="submit">
          Ingresar
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default LoginForm;
