import React, { useState }  from 'react';
import { TableCell, TableRow,
  Button, Dialog, DialogTitle,
  DialogContent, DialogActions, } from '@mui/material';
import {AtencionesSave} from './atenciones/index';

const PacienteRow = ({ paciente }) => {
  const [open, setOpen] = useState(false);
  
  //Funcion para abrir y cerrar el Dialog (Modal)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };/*  */

  return (
    <TableRow key={paciente.id}>
      <TableCell>
        <Button variant="outlined" onClick={handleOpen}>
          Atender
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Atender paciente</DialogTitle>
          <DialogContent>
            <AtencionesSave />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
          </DialogActions>
        </Dialog>
      </TableCell>
      <TableCell>{paciente.id}</TableCell>
      <TableCell>{paciente.fecha}</TableCell>
      <TableCell>{paciente.mes_cita}</TableCell>
      <TableCell>{paciente.documento}</TableCell>
      <TableCell>{paciente.orden}</TableCell>
      <TableCell>{paciente.historia}</TableCell>
      <TableCell>{paciente.apellido1}</TableCell>
      <TableCell>{paciente.apellido2}</TableCell>
      <TableCell>{paciente.nombre1}</TableCell>
      <TableCell>{paciente.nombre2}</TableCell>
      <TableCell>{paciente.empresa}</TableCell>
      <TableCell>{paciente.edad}</TableCell>
      <TableCell>{paciente.telefono1}</TableCell>
      <TableCell>{paciente.telefono2}</TableCell>
      <TableCell>{paciente.direcres}</TableCell>
      <TableCell>{paciente.codigo}</TableCell>
      <TableCell>{paciente.descripcion}</TableCell>
      <TableCell>{paciente.cantidad}</TableCell>
      <TableCell>{paciente.profesional}</TableCell>
      <TableCell>{paciente.profesional2}</TableCell>
      <TableCell>{paciente.especialidad}</TableCell>
      <TableCell>{paciente.centro_produccion}</TableCell>
      <TableCell>{paciente.dosis}</TableCell>
      <TableCell>{paciente.posologia}</TableCell>
      <TableCell>{paciente.tratamiento}</TableCell>
      <TableCell>{paciente.tiempo}</TableCell>
    </TableRow>
  );
};

export default PacienteRow;
