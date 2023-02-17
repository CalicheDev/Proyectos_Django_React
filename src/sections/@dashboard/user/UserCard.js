import React from 'react';
//Call library @mui
import { Card, CardContent, Typography } from '@mui/material';
import { Person, Email } from '@mui/icons-material';

const UserCard = ({ user }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          <Person /> {user.nombre} {user.telefono}
        </Typography>
        <Typography variant="subtitle1">
          <Email /> {user.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;