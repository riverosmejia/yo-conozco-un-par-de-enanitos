import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import styles from "./navbar.module.css";

const MyNavbar = () => {
  const { state, dispatch, isLoading } = useContext(AppContext);
  const isAuthenticated = state.user.isAuthenticated;

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('reduxState');
    window.location.href = '/login';
  };

  if (isLoading) {
    return null; // Puedes reemplazar esto por un spinner o indicador de carga si prefieres
  }

  return (
    <header className={styles.naver}>
      <Navbar expand="lg" className={`fixed-top ${styles.bg}`}>
        <Navbar.Brand as={Link} to="/mis-turnos" className={styles.winbutton}>
          <span>Mis Turnos</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {!isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/login" className={styles.text}>
                  <span>Login</span>
                </Nav.Link>
                
                <Nav.Link as={Link} to="/register" className={styles.text}>
                  <span>Register</span>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link onClick={handleLogout} className={styles.text}>
                <span>Logout</span>
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/crear-Turno" className={styles.text}>
              <span>Crear Turno</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default MyNavbar;
