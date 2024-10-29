import { createSlice } from '@reduxjs/toolkit';

// Estado inicial del usuario
const initialState = {
  id: null, // ID del usuario
  name: '', // Nombre del usuario
  email: '', // Correo electrónico del usuario
  isAuthenticated: false, // Indica si el usuario está autenticado
};

// Creación del slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, name, email } = action.payload; // Desestructurar los datos del usuario
      state.id = id;
      state.name = name;
      state.email = email;
      state.isAuthenticated = true; // El usuario se considera autenticado
    },
    clearUser: (state) => {
      state.id = null;
      state.name = '';
      state.email = '';
      state.isAuthenticated = false; // Limpiar la información del usuario
    },
  },
});

// Exportar las acciones
export const { setUser, clearUser } = userSlice.actions;

// Exportar el reducer
export default userSlice.reducer;
