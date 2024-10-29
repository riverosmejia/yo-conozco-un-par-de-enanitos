import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styles from '../form.module.css';
import 'toastr/build/toastr.min.css'; 

const Register = () => {

  //prefiero esto, no me mires, feo, no me digas nada, por eso vete, olvida mi nombre, mi cara, mi casa y pega la vuelta...
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      birthdate: '',
      nDni: '',
      password: ''
    },
    
    validationSchema: Yup.object({
      name: Yup.string().required('Nombre es requerido'),
      email: Yup.string().email('Email inválido').required('Email es requerido'),
      birthdate: Yup.string().required('Fecha de nacimiento es requerida'),
      nDni: Yup.number().required('Número de DNI es requerido').positive('El DNI debe ser un número positivo').integer('El DNI debe ser un número entero'),
      password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Contraseña es requerida')
    }),

    onSubmit: async (values, { setSubmitting, setStatus }) => {
      // Formatear la fecha a aaaa/mm/dd
      const formattedDate = values.birthdate.replace(/(\d{4})-(\d{2})-(\d{2})/, '$1/$2/$3');
      const dataToSubmit = { ...values, birthdate: formattedDate, role: 'user' };

      try {
        await axios.post('http://localhost:3000/users', dataToSubmit);
        setStatus({ success: 'Registro exitoso' });
      } catch (error) {
        setStatus({ error: 'Ocurrió un error en el registro' });
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <div className={styles.formContainer}>
      <h2>Registro de Usuario</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label className={styles.formLabel}>Nombre:</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className={styles.formInput}
          />
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        </div>

        <div>
          <label className={styles.formLabel}>Email:</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className={styles.formInput}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>

        <div>
          <label className={styles.formLabel}>Fecha de Nacimiento:</label>
          <input
            type="date"
            name="birthdate"
            onChange={formik.handleChange}
            value={formik.values.birthdate}
            className={styles.formInput}
          />
          {formik.errors.birthdate ? <div>{formik.errors.birthdate}</div> : null}
        </div>

        <div>
          <label className={styles.formLabel}>Número de DNI:</label>
          <input
            type="number"
            name="nDni"
            onChange={formik.handleChange}
            value={formik.values.nDni}
            className={styles.formInput}
          />
          {formik.errors.nDni ? <div>{formik.errors.nDni}</div> : null}
        </div>

        <div>
          <label className={styles.formLabel}>Contraseña:</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className={styles.formInput}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>

        <button type="submit" disabled={formik.isSubmitting} className={styles.formLabel}>
          Registrarse
        </button>

        {formik.status && formik.status.error && <div>{formik.status.error}</div>}
        {formik.status && formik.status.success && <div>{formik.status.success}</div>}
      </form>
    </div>
  );
};

export default Register;
