// redux/reducers/turnoReducer.js

// Estado inicial
const initialState = {
  misTurnos: [],
};

// Tipos de acción
const AGREGAR_TURNO = 'turno/AGREGAR_TURNO';
const ELIMINAR_TURNO = 'turno/ELIMINAR_TURNO';

// Creadores de acción
export const agregarTurno = (turno) => ({
  type: AGREGAR_TURNO,
  payload: turno,
});

export const eliminarTurno = (turnoId) => ({
  type: ELIMINAR_TURNO,
  payload: turnoId,
});

// Reducer
const turnoReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_TURNO:
      return {
        ...state,
        misTurnos: [...state.misTurnos, action.payload],
      };
    case ELIMINAR_TURNO:
      return {
        ...state,
        misTurnos: state.misTurnos.filter(turno => turno.id !== action.payload),
      };
    default:
      return state;
  }
};

export default turnoReducer;
