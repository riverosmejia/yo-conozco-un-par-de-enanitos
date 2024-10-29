// utils/localStorage.js

// Guardar el estado en localStorage
export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('reduxState', serializedState);
    } catch (e) {
      console.warn("No se pudo guardar el estado en localStorage", e);
    }
  };
  
  // Cargar el estado de localStorage
  export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('reduxState');
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (e) {
      console.warn("No se pudo cargar el estado de localStorage", e);
      return undefined;
    }
  };
  