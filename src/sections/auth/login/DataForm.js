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
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormControlLabel,
} from '@mui/material';
import { LoadingButton,DatePicker  } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';
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

export default function DataForm() {
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
  const [startDate, setStartDate] = useState(new Date());
  

  return (
    <>
      <Stack spacing={2}>
        <FormControl direction="row">
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">Mensaje de prueba</FormHelperText>
        </FormControl>

        
          {/* <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} /> */}
          
         
        {/* <BlogPostsSort options={SORT_OPTIONS} /> */}
        {/* <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Tipo de documento:{' '}
          </Typography>
          <TextField type="number" name="tipo" label="Tipo de documento" />
        </Stack> */}

        {/* <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Número de documento:{' '}
          </Typography>
          <TextField type="number" name="historia" label="Número de documento" />
        </Stack> */}

        {/* <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3}>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Nombres:{' '}
          </Typography>
          <TextField type="text" name="nombre" label="Nombres" />
        </Stack> */}

        {/* <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3}>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Apellidos:{' '}
          </Typography>
          <TextField type="text" name="apellidos" label="Apellidos" />
        </Stack> */}

        <Divider sx={{ my: 3 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            INFORMACIÓN DEL USUARIO
          </Typography>
        </Divider>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Tipo de documento:{' '}
        </Typography>
        <TextField type="number" name="tipo" label="Tipo de documento" />

        <Typography variant="h6" sx={{ mb: 2 }}>
          Número de documento:{' '}
        </Typography>
        <TextField type="number" name="historia" label="Número de documento" />

        <Typography variant="h6" sx={{ mb: 2 }}>
          Nombres:{' '}
        </Typography>
        <TextField type="text" name="nombre" label="Nombres" />

        <Typography variant="h6" sx={{ mb: 2 }}>
          Apellidos:{' '}
        </Typography>
        <TextField type="text" name="apellidos" label="Apellidos" />
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          INFORMACIÓN DE CONTACTO
        </Typography>
      </Divider>

      <Stack spacing={2}>
        <TextField name="text" label="Dirección" />
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3}>
          <TextField type="text" name="city" label="Ciudad" />
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
        <LoadingButton fullWidth size="large" type="reset" variant="contained" color="warning">
          Limpiar datos
        </LoadingButton>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          /* color="info" */ onClick={handleClick}
        >
          Actualizar datos
        </LoadingButton>
      </Stack>
    </>
  );
}
