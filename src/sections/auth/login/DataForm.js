/* import { Buffer } from 'buffer';


import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import base64url from 'base64url';

if (typeof global.Buffer === 'undefined') {
  global.Buffer = Buffer;
}

export default function DataForm() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const authToken = Cookies.get('auth_token');
    if (authToken) {
      const [header, payload, signature] = authToken.split('.'); // obtener las partes del token
      const decodedPayload = JSON.parse(base64url.decode(payload)); // decodificar el payload
      const { username, password } = decodedPayload; // obtener los datos de usuario
      setUser({ username, password }); // actualizar el estado con los datos de usuario
    }
  }, []);

  return (
    <>
      <div>
        <h1>Perfil de usuario</h1>
        <p>Username: {user.username}</p>
        <p>Password: {user.password}</p>
      </div>
    </>
  );
} */


// Primera opcion para importar y capturar los datos del token
/* import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
//import jwt from 'jsonwebtoken';


export default function DataForm() {
  const jwt = require('jsonwebtoken');
  const [user, setUser] = useState('');  

  useEffect(() => {
    const authToken = Cookies.get('auth_token'); // Función para obtener la cookie "auth_token"
    console.log(authToken);
    if (authToken) {
      // Decodificar el token JWT para obtener los datos de usuario
      const decodedToken = jwt.decode(authToken);
      if (decodedToken) {
        const { name, email, photoUrl } = decodedToken; // Obtener los datos de usuario del token decodificado
        setUser({ displayName: name, email, photoURL: photoUrl }); // Actualizar el estado con los datos de usuario
      }
    }
  }, []);

  return (
    <>
      <div>
        <h1>Perfil de usuario</h1>
        <p>Nombre: {user.displayName}</p>
        <p>Email: {user.email}</p>
        <img src={user.photoURL} alt={user.displayName} /> 
      </div>
    </>
  );
} */

// Segunda opcion para importar y capturar los datos del token
/* import { Buffer } from 'buffer';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function DataForm() {
  if (typeof global.Buffer === 'undefined') {
    global.Buffer = Buffer;
  }
  const [user, setUser] = useState('');

  useEffect(() => {
    const authToken = Cookies.get('auth_token');
    console.log(authToken);
    if (authToken) {
      const decodedToken = decodeURIComponent(atob(authToken).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      const { username, password } = JSON.parse(decodedToken);
      setUser({ username, password });
    }
  }, []);

  return (
    <>
      <div>
        <h1>Perfil de usuario</h1>
        <p>Username: {user.username}</p>
        <p>Password: {user.password}</p>
      </div>
    </>
  );
} */
