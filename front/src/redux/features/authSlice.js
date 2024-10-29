// Estado inicial
const initialState = {
    user: null, // Almacena los datos del usuario
    isAuthenticated: false, // Indica si el usuario está autenticado
};

// Tipos de acción
const LOGIN = 'auth/LOGIN';
const LOGOUT = 'auth/LOGOUT';

// Acciones
export const login = (user) => ({
    type: LOGIN,
    payload: user,
});

export const logout = () => ({
    type: LOGOUT,
});

// Reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default authReducer;
