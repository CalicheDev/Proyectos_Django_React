import { Helmet } from 'react-helmet-async';
/* import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react'; */
// @mui
import {  
  Stack,  
  Button,  
  Container,
  Typography,  
} from '@mui/material';
// components
import Iconify from '../components/iconify';
//import {UserList} from '../src/sections/@dashboard/user/index';
import {UserList} from '../sections/@dashboard/user/index'

// ----------------------------------------------------------------------

export default function UserPage() {
  

  return (
    <>
      <Helmet>
        <title> User | CRM </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button>
        </Stack>

        {/* Component call data users */}
        <UserList />

      </Container>
      
    </>
  );
}
