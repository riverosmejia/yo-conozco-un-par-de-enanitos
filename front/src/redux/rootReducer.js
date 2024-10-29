// src/redux/rootReducer.js
import { combineReducers } from 'redux';
import todoReducer from './features/todoSlice';
// Importa otros reducers aquí

const rootReducer = combineReducers({
  todos: todoReducer,
  // Agrega otros reducers aquí
});

export default rootReducer;
