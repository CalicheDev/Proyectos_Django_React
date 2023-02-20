import { Helmet } from 'react-helmet-async';

// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Grid, Button } from '@mui/material';
// components
//import { DataForm } from '../sections/auth/login';

export default function ProfilePage() {
    return (
      <>
        <Helmet>
          <title> Perfil | CRM </title>
        </Helmet>
  
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ mb: 5 }}>
            Información Básica del usuario
          </Typography>
  
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              {/* <DataForm /> */}
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }