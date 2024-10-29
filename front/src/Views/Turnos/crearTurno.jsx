import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext'; // Importa AppContext
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

const CrearTurno = () => {
  const [turno, setTurno] = useState({ date: '', time: '', Asunto: '' });
  const { state } = useContext(AppContext); // Obtén el contexto
  const userId = state.user.id; // Obtén el userId del contexto
  const navigate = useNavigate();

  // Configuración de Toastr
  toastr.options = {
    closeButton: true,
    positionClass: 'toast-top-right',
    timeOut: '3000',
  };

  // Verifica si el usuario está logueado
  useEffect(() => {
    if (!userId) {
      toastr.warning('No estás logueado. Redirigiendo a inicio de sesión.');
      navigate('/login');
    }
  }, [userId, navigate]);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setTurno({ ...turno, [e.target.name]: e.target.value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica si el usuario está logueado (en caso de que el efecto se ejecute después del envío)
    if (!userId) {
      toastr.warning('No estás logueado. Debes iniciar sesión para crear un turno.');
      navigate('/login');
      return;
    }

    try {
      // Realiza la solicitud para crear el turno
      const response = await axios.post(`http://localhost:3000/appointments/schedule`, {
        userId,
        date: turno.date,
        time: turno.time,
        Asunto: turno.Asunto
      });
      console.log('Turno creado:', response.data);
      toastr.success('Turno creado exitosamente.');
      navigate('/mis-turnos');
    } catch (error) {
      console.error('Error creando el turno:', error);
      toastr.error('Error al crear el turno. Verifica los datos e inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <h2>Crear Turno</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={turno.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={turno.time}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Asunto"
          placeholder="Asunto"
          value={turno.Asunto}
          onChange={handleChange}
          required
        />
        <button type="submit">Crear Turno</button>
      </form>
    </div>
  );
};

export default CrearTurno;
