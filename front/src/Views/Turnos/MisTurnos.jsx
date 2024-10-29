import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Turno from './Turno';
import styles from '../form.module.css';
import { AppContext } from '../../context/AppContext'; // Importar AppContext
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

const MisTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const { state } = useContext(AppContext); // Usar contexto para obtener el estado global
  const userId = state.user.id; // Obtener el userId del contexto
  const navigate = useNavigate();

  // Configuración de Toastr
  toastr.options = {
    closeButton: true,
    positionClass: 'toast-top-right',
    timeOut: '3000',
  };

  useEffect(() => {
    if (!userId) {
      toastr.warning('No estás logueado. Redirigiendo a inicio de sesión.');
      navigate('/login');
    } else {
      fetchTurnos();
    }
  }, [userId, navigate]);

  // Función para obtener los turnos del usuario
  const fetchTurnos = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/appointments/user/${userId}`);
      setTurnos(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      toastr.error('Error al obtener los turnos.');
    }
  };

  // Función para manejar la cancelación de turnos
  const handleCancel = async (id) => {
    console.log('Intentando cancelar el turno con ID:', id); // Debugging
    try {
      const response = await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
      console.log('Respuesta de la API:', response.data); // Debugging
      fetchTurnos(); // Refresca la lista de turnos después de la cancelación
      toastr.success('Turno cancelado exitosamente.');
    } catch (error) {
      console.error('Error cancelling appointment:', error);
      toastr.error('Error al cancelar el turno.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Mis Turnos</h2>
      <div>
        {turnos.length > 0 ? (
          turnos.map(turno => (
            <Turno
              key={turno.id}
              id={turno.id}
              date={turno.date}
              time={turno.time}
              status={turno.status}
              Asunto={turno.Asunto}
              onCancel={handleCancel} // Pasa la función handleCancel
            />
          ))
        ) : (
          <p>No tienes turnos agendados.</p>
        )}
      </div>
    </div>
  );
};

export default MisTurnos;
