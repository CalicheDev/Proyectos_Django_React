import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import PacienteRow from './PacienteRow';

const PacientesList = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/pacientes_api/')
      .then(response => {
        setPacientes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Acciones</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Mes Cita</TableCell>
              <TableCell>Documento</TableCell>
              <TableCell>Orden</TableCell>
              <TableCell>Historia</TableCell>
              <TableCell>Apellido 1</TableCell>
              <TableCell>Apellido 2</TableCell>
              <TableCell>Nombre 1</TableCell>
              <TableCell>Nombre 2</TableCell>
              <TableCell>Empresa</TableCell>
              <TableCell>Edad</TableCell>
              <TableCell>Teléfono 1</TableCell>
              <TableCell>Teléfono 2</TableCell>
              <TableCell>Dirección Residencia</TableCell>
              <TableCell>Código</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Profesional</TableCell>
              <TableCell>Profesional 2</TableCell>
              <TableCell>Especialidad</TableCell>
              <TableCell>Centro de Producción</TableCell>
              <TableCell>Dosis</TableCell>
              <TableCell>Posología</TableCell>
              <TableCell>Tratamiento</TableCell>
              <TableCell>Tiempo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pacientes.map(paciente => (
              <PacienteRow key={paciente.id} paciente={paciente} />
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default PacientesList;
