import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';
/* import { BlogPostsSort } from '../../@dashboard/blog'; */
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

/* const SORT_OPTIONS = [
  { value: 'CC', label: 'CC' },
  { value: 'TI', label: 'TI' },
  { value: 'CE', label: 'CE' },
  { value: 'RC', label: 'RC' },
  { value: 'PA', label: 'PA' },
  { value: 'AS', label: 'AS' },
  { value: 'MS', label: 'MS' },
  { value: 'SC', label: 'SC' },
  { value: 'CD', label: 'CD' },
  { value: 'PE', label: 'PE' },
  { value: 'RE', label: 'RE' },
  { value: 'PT', label: 'PT' },
]; */

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const [historia, cambiarHistoria] = useState({ campo: '', valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    historia: 113063911, // Letras, numeros, guion y guion_bajo
    /* 
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros. */
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (historia.valido === 'true') {
      cambiarFormularioValido(true);
      cambiarHistoria({ campo: '', valido: '' });
      // ...
    } else {
      cambiarFormularioValido(false);
    }
  };

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  /* Option for create account */
  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

  /* Option for validate data of user before register */
  const validateClick = () => {
    navigate('/login', { replace: true });
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <Stack spacing={3}>
        {/* <BlogPostsSort options={SORT_OPTIONS} /> */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3}>
          <Stack action="" onSubmit={onSubmit}>
            <TextField
              estado={historia}
              cambiarEstado={cambiarHistoria}
              type="number"
              name="historia"
              label="Número de documento"
              leyendaError="El documento no se encutra registrado en la base de datos"
              expresionRegular={expresiones.historia}
              /* InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                    valido={estado.valido}
                  </InputAdornment>
                ),
              }} */
            />
          </Stack>
          {/* <LoadingButton size="large" type="submit" variant="contained" onClick={validateClick}>
            Validar Datos
          </LoadingButton> */}
          <LoadingButton
            size="large"
            disabled={open}
            variant="contained"
            onClick={() => {
              setOpen(true);
            }}
          >
            Validar Datos
          </LoadingButton>
        </Stack>

        <Box sx={{ width: '100%' }}>
          <Collapse in={open}>
            <Alert severity="success"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                  >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              VERIFICADO! Si se encuentra registrado
            </Alert>
          </Collapse>
        </Box>

        <Box sx={{ width: '100%' }}>
          <Collapse in={open}>
            <Alert severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              ERROR! No se encontro el registro
            </Alert>
          </Collapse>
        </Box>

        <Divider sx={{ my: 3 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {/* Ingrese los datos a continuación */}
            Rellene el formulario y comienza a gestionar tus citas
          </Typography>
        </Divider>

        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3}>
          <TextField name="text" label="Nombres" />
          <TextField name="text" label="Apellidos" />
        </Stack>

        <TextField name="text" label="Dirección" />

        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3}>
          <TextField type="number" name="tel" label="Telefono" />
          <TextField type="number" name="tel" label="Celular" />
        </Stack>

        <TextField type="email" name="email" label="Email" />

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

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        {/* <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          By signing up, I agree to Terms of Service and Privacy Policy.
        </Link> */}
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3}>
        {/* <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
          Validar Datos
        </LoadingButton> */}
        <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
          Crear cuenta
        </LoadingButton>
      </Stack>
    </>
  );
}
