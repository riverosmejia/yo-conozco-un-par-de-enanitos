// redux/store.js
import { createStore, combineReducers } from 'redux';
import turnoReducer from './features/turnoSlice';
import authReducer from './features/authSlice'; // Importar el reducer de autenticación
import { loadState,saveState } from '../utils/localeStorage';

// Combina los reducers
const rootReducer = combineReducers({
  turno: turnoReducer,
  auth: authReducer,
});

// Cargar el estado inicial desde localStorage
const preloadedState = loadState();

// Crear el store con el estado inicial
const store = createStore(rootReducer, preloadedState);

// Suscribirse a los cambios y guardar el estado en localStorage
store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
  });
});

export default store;