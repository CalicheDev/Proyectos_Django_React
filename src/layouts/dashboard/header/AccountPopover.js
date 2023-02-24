import { useState,useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from '@mui/material';
import ProfilePage from '../../../pages/ProfilePage';
// mocks_
import account from '../../../_mock/account';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    path: 'perfil',
    element: <Navigate to="/dashboard/perfil" />,
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
    path: 'perfil',
    element: <ProfilePage />,
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
    path: 'perfil',
    element: <ProfilePage />,
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);

  const [user, setUser] = useState('');

  useEffect(() => {
    let authToken = Cookies.get('auth_token'); // Función para obtener la cookie "auth_token"
    console.log(authToken);
    if (authToken) {
      // Decodificar el token JWT para obtener los datos de usuario
      const decodedToken = jwt_decode(authToken);
      if (decodedToken) {
        const { username,  email } = decodedToken; // Obtener los datos de usuario del token decodificado
        setUser({ displayName: username, email }); // Actualizar el estado con los datos de usuario
      }
    }
  }, []);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleClick = () => {
    navigate('/login', { replace: true });
    Cookies.remove('auth_token');
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src={user.photoURL} alt="photoURL" />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleClick} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
