import MyNavbar from './Views/Navbar/MyNavBar.jsx';
import Home from './Views/components/home.jsx';
import Login from './Views/Login/Login.jsx';
import Register from './Views/Register/Register.jsx';
import MisTurnos from './Views/Turnos/MisTurnos.jsx';
import CrearTurno from './Views/Turnos/crearTurno.jsx';
import { AppProvider } from './context/AppContext.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import store from './redux/store'; // Asegúrate de que la ruta sea correcta

import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css'; 
import toastr from 'toastr'; // Importa toastr

// Configuración de Toastr (opcional)
toastr.options = {
  closeButton: true,
  positionClass: 'toast-top-right', // Cambia la posición si lo deseas
  timeOut: '3000', // Duración en milisegundos
};


function App() {
  return (
    <StrictMode>
      <AppProvider store={store}> {/* Envuelve tu aplicación con el Provider */}
        <BrowserRouter>
        <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mis-turnos" element={<MisTurnos />} />
            <Route path="/crear-turno" element={<CrearTurno/>} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </StrictMode>
  );
}

export default App;
