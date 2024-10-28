const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGNUP_SUCCESS':
      case 'LOGIN_SUCCESS':
        return { ...state, isAuthenticated: true, user: action.payload.user, error: null };
      case 'AUTH_ERROR':
        return { ...state, error: action.payload };
      case 'LOGOUT':
        return { ...state, isAuthenticated: false, user: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  