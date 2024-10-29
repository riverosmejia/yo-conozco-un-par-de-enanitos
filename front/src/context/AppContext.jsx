import React, { createContext, useReducer, useEffect, useState } from 'react';

const AppContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || {
    id: null,
    name: '',
    email: '',
    isAuthenticated: false,
  },
  todos: {
    items: [],
  },
  turnos: {
    misTurnos: [],
  },
};

function appReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      const user = action.payload;
      localStorage.setItem('user', JSON.stringify(user)); // Guardar en localStorage
      return {
        ...state,
        user: {
          ...user,
          isAuthenticated: true,
        },
      };
    case 'LOGOUT':
      localStorage.removeItem('user'); // Eliminar de localStorage
      return {
        ...state,
        user: {
          id: null,
          name: '',
          email: '',
          isAuthenticated: false,
        },
      };
    default:
      return state;
  }
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userFromStorage = JSON.parse(localStorage.getItem('user'));
    if (userFromStorage) {
      dispatch({ type: 'LOGIN', payload: userFromStorage });
    }
    setIsLoading(false);
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
