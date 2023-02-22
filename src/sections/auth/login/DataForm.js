import { useEffect, useState } from 'react';
// @mui
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  Typography,
  Divider,
  Alert,
  Button,
  Box,
  Collapse,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormControlLabel,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
//import jwt from 'jsonwebtoken';

export default function DataForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    let authToken = Cookies.get('auth_token'); // Función para obtener la cookie "auth_token"
    console.log(authToken);
    if (authToken) {
      // Decodificar el token JWT para obtener los datos de usuario
      const decodedToken = jwt_decode(authToken);
      if (decodedToken) {
        const { username, password, first_name, last_name,email } = decodedToken; // Obtener los datos de usuario del token decodificado
        setUser({ displayName: username, password, first_name, last_name, email}); // Actualizar el estado con los datos de usuario
      }
    }
  }, []);

  return (
    <>
      <Stack spacing={2}>
        <Divider sx={{ my: 3 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            INFORMACIÓN DEL USUARIO
          </Typography>
        </Divider>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Nombre:{''}
        </Typography>
        <TextField type="text" name="first_name" label="Nombres" value={user.first_name}/>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Apellidos:{' '}
        </Typography>
        <TextField type="text" name="last_name" label="Apellidos" value={user.last_name} />
        
        <TextField type="email" name="email" label="Email" value={user.email} />
        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3}>
        <LoadingButton fullWidth size="large" type="reset" variant="contained" color="warning">
          Limpiar datos
        </LoadingButton>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          /* color="info" */ onClick={''} //Crear funcion con metodo POST en axios para actualizar los datos en la tabla
        >
          Actualizar datos
        </LoadingButton>
      </Stack>

      {/* <div>
        <h1>Perfil de usuario</h1>
        <p>Username: {user.displayName}</p>
        <p>Name: {user.first_name}</p>
        <p>Password: {user.password}</p>
      </div> */}
    </>
  );
}
