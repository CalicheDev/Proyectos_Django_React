import React from 'react';
// routes
//import Router from "./routes";
// theme
//import ThemeProvider from "./theme";
//import { UserList } from "../src/sections/@dashboard/user/index";
//import { PacientesList } from "../src/sections/@dashboard/customers/index";
import {LoginForm} from '../src/sections/auth/login/index';

export default function App() {
  return (
    <div className="App">
      {/* <UserList />
      <PacientesList /> */}
      <LoginForm />
    </div>
  );
}

// ----------------------------------------------------------------------
/* /* <ThemeProvider>
      <Router />
    </ThemeProvider>
    
<div className="App">
      <UserList />
      <PacientesList/>
    </div> */

//export default App;

/* import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import { Email } from '@mui/icons-material';
import './App.css';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/user_api/')
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <Typography variant="h2" component="h1" gutterBottom>
        Lista de usuarios
      </Typography>
      <div className="CardContainer">
        {usuarios.map(usuario => (
          <Card key={usuario.id}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {usuario.nombre} {usuario.telefono}
              </Typography>
              <Typography variant="body2" component="p">
                <Email /> {usuario.email}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App; */
