import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext'; // Importar AppContext
import axios from 'axios';
import styles from '../form.module.css';
import { useNavigate } from 'react-router-dom';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const { dispatch } = useContext(AppContext); // Usar el dispatch del contexto
  const navigate = useNavigate();

  toastr.options = {
    closeButton: true,
    positionClass: 'toast-top-right',
    timeOut: '3000',
  };

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setCredentials((prev) => ({
        username: e.target.value,
        password: prev.password
      }));
    } else if (e.target.name === 'password') {
      setCredentials((prev) => ({
        username: prev.username,
        password: e.target.value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/user/login', credentials);
      const user = response.data;

      dispatch({ type: 'LOGIN', payload: user }); // Despachar al contexto la acción LOGIN
      
      toastr.success('¡Has iniciado sesión con éxito!', 'Éxito');
      navigate('/mis-turnos');
    } catch (err) {
      toastr.error('Error de autenticación. Verifica tus credenciales.', 'Error');
      console.error(err);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.formInput}
          type="text"
          name="username"
          placeholder="Correo Electrónico"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <input
          className={styles.formInput}
          type="password"
          name="password"
          placeholder="Contraseña"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.formInput}>Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
