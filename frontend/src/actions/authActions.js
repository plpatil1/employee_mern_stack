import api from '../utils/api';

// Signup action
export const signup = (credentials) => async (dispatch) => {
  try {
    const res = await api.post('/signup', credentials);
    dispatch({ type: 'SIGNUP_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'AUTH_ERROR', payload: error.message });
  }
};

// Login action
export const login = (credentials) => async (dispatch) => {
  try {
    const res = await api.post('/login', credentials);
    localStorage.setItem('token', res.data.token);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'AUTH_ERROR', payload: error.message });
  }
};

// Logout action
export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: 'LOGOUT' });
};
