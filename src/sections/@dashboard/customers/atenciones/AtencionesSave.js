import React, { useState } from "react";
import axios from "axios";

function AtencionesSave() {
  const [form, setForm] = useState({
    fecha: "",
    fecha_atencion: "",
    documento: "",
    orden: "",
    historia: "",
    observaciones: "",
    tipo_novedad: "",
    novedad: "",
    estado: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/atenciones/", form)
      .then((response) => {
        console.log(response);
        // Aquí podrías mostrar un mensaje de éxito o redirigir al usuario a otra página
      })
      .catch((error) => {
        console.log(error);
        // Aquí podrías mostrar un mensaje de error
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Fecha:
        <input type="text" name="fecha" onChange={handleChange} value={form.fecha} />
      </label>
      <br />
      <label>
        Fecha de atención:
        <input
          type="text"
          name="fecha_atencion"
          onChange={handleChange}
          value={form.fecha_atencion}
        />
      </label>
      <br />
      <label>
        Documento:
        <input type="text" name="documento" onChange={handleChange} value={form.documento} />
      </label>
      <br />
      <label>
        Orden:
        <input type="text" name="orden" onChange={handleChange} value={form.orden} />
      </label>
      <br />
      <label>
        Historia:
        <input type="text" name="historia" onChange={handleChange} value={form.historia} />
      </label>
      <br />
      <label>
        Observaciones:
        <input
          type="text"
          name="observaciones"
          onChange={handleChange}
          value={form.observaciones}
        />
      </label>
      <br />
      <label>
        Tipo de novedad:
        <input
          type="text"
          name="tipo_novedad"
          onChange={handleChange}
          value={form.tipo_novedad}
        />
      </label>
      <br />
      <label>
        Novedad:
        <input type="text" name="novedad" onChange={handleChange} value={form.novedad} />
      </label>
      <br />
      <label>
        Estado:
        <input type="text" name="estado" onChange={handleChange} value={form.estado} />
      </label>
      <br />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default AtencionesSave;
